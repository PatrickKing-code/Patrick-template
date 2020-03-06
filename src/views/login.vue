<template>
  <div class="login_warp">
    <div class="header-button">
      <el-button
        v-for="item in menuTab"
        @click="toggleMenuTag(item)"
        :key="item.id"
        type="danger"
        :class="{ error: item.classValue }"
        >{{ item.txt }}</el-button
      >
    </div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-position="left"
    >
      <el-form-item label="用户名" prop="username">
        <el-input
          type="text"
          v-model="ruleForm.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="重复密码"
        prop="repeatPass"
        v-if="mode === 'register'"
      >
        <el-input
          type="password"
          v-model="ruleForm.repeatPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-row :gutter="15" class="sendCodeNumber">
        <el-col :span="18">
          <el-form-item label="验证码" prop="codeNumber">
            <el-input
              maxlength="6"
              minlength="6"
              v-model.number="ruleForm.codeNumber"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-button type="success" @click="getCode()">发送验证码</el-button>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button
          type="primary"
          class="submitClass"
          @click="submitForm('ruleForm')"
          >{{ mode === "login" ? "登录" : "注册" }}</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { GetSms, Login, Register } from "../api/login";
import { reactive, ref, onMounted } from "@vue/composition-api";
import {
  stripscript,
  emailValiadata,
  passlValiadata,
  codeValiadata
} from "@/utils/validate";
export default {
  name: "login",
  setup(props, { refs, root }) {
    var checkUsername = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入用户名！"));
      } else if (emailValiadata(value)) {
        callback(new Error("请输入正确的邮箱格式！"));
      } else {
        callback();
      }
    };
    // 验证密码
    var validatePassword = (rule, value, callback) => {
      ruleForm.password = stripscript(value);
      value = ruleForm.password;
      if (value === "") {
        callback(new Error("请输入密码！"));
      } else if (passlValiadata(value)) {
        callback(new Error("请输入数字加字母组合的密码！"));
      } else {
        callback();
      }
    };
    // 验证重复密码
    var validatePassword2 = (rule, value, callback) => {
      ruleForm.repeatPass = stripscript(value);
      value = ruleForm.repeatPass;
      if (value === "") {
        callback(new Error("请再次输入密码！"));
      } else if (value != ruleForm.password) {
        callback(new Error("重复密码不正确"));
      } else {
        callback();
      }
    };
    // 验证验证码
    var validateCodeNumber = (rule, value, callback) => {
      ruleForm.codeNumber = stripscript(value);
      value = ruleForm.codeNumber;
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (codeValiadata(value)) {
        callback(new Error("请正确输入六位验证码"));
      } else {
        callback();
      }
    };
    const menuTab = reactive([
      {
        txt: "登录",
        classValue: true,
        type: "login"
      },
      {
        txt: "注册",
        classValue: false,
        type: "register"
      }
    ]);
    const ruleForm = reactive({
      username: "422991011@qq.com",
      password: "qq422991011",
      repeatPass: "qq422991011",
      codeNumber: ""
    });
    const rules = reactive({
      username: [{ validator: checkUsername, trigger: "blur" }],
      password: [{ validator: validatePassword, trigger: "blur" }],
      codeNumber: [{ validator: validateCodeNumber, trigger: "blur" }],
      repeatPass: [{ validator: validatePassword2, trigger: "blur" }]
    });
    const mode = ref("login");
    // 获取验证码

    const getCode = () => {
      let requestDate = {
        username: ruleForm.username,
        module: mode.value
      };
      if (ruleForm.username == "") {
        root.$message({
          message: "邮箱不能为空",
          type: "error",
          duration: 800
        });
        return false;
      }
      GetSms(requestDate).then(res => {
        let data = res.data;
        root.$message({
          message: data.message,
          type: "success"
        });
      });
    };
    const toggleMenuTag = item => {
      menuTab.forEach(menu => {
        menu.classValue = false;
      });
      refs.ruleForm.resetFields(); // 切换清零
      item.classValue = true;
      mode.value = item.type;
    };
    const submitForm = formName => {
      refs[formName].validate(valid => {
        if (valid) {
          mode.value == "login" ? login() : register();
        } else {
          return false;
        }
      });
    };
    const login = () => {
      let requestDate = {
        username: ruleForm.username,
        password: ruleForm.password,
        code: ruleForm.codeNumber,
        mode: "login"
      };
      root.$store.dispatch('login/login', requestDate).then( response => {
        root.$message({
          message: response.data.message,
          type: 'success'
        })
        root.$router.push({
          name: 'Console'
        }).catch( error => {
          console.log('error', error);
        })
      })
    };
    const register = () => {
      let requestDate = {
        username: ruleForm.username,
        password: ruleForm.password,
        code: ruleForm.codeNumber,
        mode: "register"
      };
      Register(requestDate)
        .then(res => {
          let data = res.data;
          root.$message({
            message: data.message,
            type: "success"
          });
          toggleMenuTag(menuTab[0]);
        })
        .catch(error => {
          root.$message({
            message: data.message,
            type: "error"
          });
        });
    };
    const resetForm = formName => {
      refs[formName].resetFields();
    };
    onMounted(() => {
    });
    return {
      menuTab,
      ruleForm,
      rules,
      mode,
      toggleMenuTag,
      submitForm,
      resetForm,
      getCode
    };
  }
};
</script>
<style lang="scss">
.error {
  background-color: antiquewhite;
  color: rgb(255, 0, 191);
}
.login_warp {
  width: 500px;
  margin: 0 auto;
  .header-button {
    text-align: center;
    //   width: 200px;
  }
  .submitClass {
    display: block;
    width: 100%;
  }
  .sendCodeNumber {
    display: flex;
    align-items: center;
    button {
      margin-top: 17px;
    }
  }
}
</style>
