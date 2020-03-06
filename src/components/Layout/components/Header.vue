<template>
  <div id="header-wrap">
    <div class="pull-left header-icon" @click="navMenuState">
      <svg-icon iconClass="five" className="font20"></svg-icon>
    </div>
    <div class="pull-right">
      <div class="user-info pull-left">
        {{ username }}
      </div>
      <div class="header-icon pull-left" @click="logout">
        <svg-icon iconClass="two" class="font20"></svg-icon>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "@vue/composition-api";
import { removeToken, removeUsername } from "../../../utils/login";
export default {
  name: "layoutHeader",
  setup(props, { root }) {
    const navMenuState = () => {
      root.$store.commit("app/SET_COLLAPSE");
    };
    const logout = () => {
      removeToken();
      removeUsername();
      root.$router.push("/");
    };
    const username = computed(() => {
      return root.$store.state.login.username;
    });
    return {
      navMenuState,
      username,
      logout
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../../style/scss/config.scss";
#header-wrap {
  position: absolute;
  top: 0;
  right: 0;
  left: $navMenu;
  height: 75px;
  background-color: #fff;
  line-height: 75px;
  -webkit-box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
  -o--box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
  -ms-box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  -ms-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.open {
  #header-wrap {
    left: $navMenu;
  }
}
.close {
  #header-wrap {
    left: $navMenuMin;
  }
}
.header-icon {
  padding: 0 32px;
  svg {
    cursor: pointer;
  }
}
.user-info {
  height: 100%;
  padding: 0 32px;
  border-right: 1px solid #ededed;
}

</style>
