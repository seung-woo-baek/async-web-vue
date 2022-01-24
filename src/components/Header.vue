<template>
    <div class="header">
        <div class="contents-inner header-inner">
            <nav>
                <h1>
                    <router-link to="/" class="logo__link">
                        <img
                            src="https://www.tilon.com/web/twcom/imgs/com/asp/main/img_logo.png"
                            alt="logo-colored">
                        <span class="blind">틸론</span>
                    </router-link>
                </h1>
                <ul class="nav-items">
                    <li class="nav-item">
                        <router-link to="/">HOME</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/notice">공지사항</router-link>
                    </li>
                </ul>
                <ul class="login-items" id="login">
                    <li class="login-item">
                        <router-link to="/login">로그인</router-link>
                    </li>
                    <li class="login-item">
                        <router-link to="/signup">회원가입</router-link>
                    </li>
                </ul>
                <ul class="login-items" id="logout">
                    <li class="login-item">
                        <span id="user_id"></span>
                    </li>
                    <li class="login-item">
                        <router-link to="/">로그아웃</router-link>
                    </li>
                    <li class="login-item">
                        <router-link to="/user">회원정보</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import User from '../assets/module/module.js';

export default {
  name: 'HeaderBox',
  setup () {
    onMounted(() => {
      getUserData();
    })
    const getUserData = () => {
      const userInfo = JSON.parse(sessionStorage.getItem('currentLogin'));
      if (userInfo !== null){
          const user = new User(userInfo);
          user.welcome();
      }
    }
    return {
      getUserData
    }
  },
};
</script>
