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
      <el-form-item prop="username">
        <label for="">用户名</label>
        <el-input
          type="text"
          v-model="ruleForm.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <label for="">密码</label>
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-row :gutter="15" class="sendCodeNumber">
        <el-col :span="18">
          <el-form-item label="验证码" prop="codeNumber">
            <el-input v-model.number="ruleForm.codeNumber"> </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-button type="success">发送验证码</el-button>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button
          type="primary"
          class="submitClass"
          @click="submitForm('ruleForm')"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      menuTab: [
        {
          txt: "登录",
          classValue: true
        },
        {
          txt: "注册",
          classValue: false
        }
      ],
      ruleForm: {
        username: "",
        password: "",
        codeNumber: ""
      },
      rules: {
        username: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        codeNumber: [{ validator: validateNumber, trigger: "blur" }]
      }
    };
    var validateUser = (rule, value, callback) => {
      console.log('1');
      
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validateNumber = (rule, value, callback) => {
        console.log(rule, value);
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
  },
  methods: {
    toggleMenuTag(item) {
      this.menuTab.forEach(menu => {
        menu.classValue = false;
      });
      item.classValue = true;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
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
