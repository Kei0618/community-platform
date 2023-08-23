<template>
  <div>
    <header class="header">
      <!-- <img class="logo" src="../../../assets/LOGO.png" alt="Logo" />
        <div class="nav">
          <a v-if="loggedIn" @click="toggleLogin">登出</a>
          <router-link v-else to="/LOGIN">登入</router-link> -->
      <!-- <router-link to="/article-management">文章管理</router-link> -->
      <!-- <router-link to="/home">home</router-link>
          <router-link to="/category">文章管理</router-link>
        </div> -->

      <nav class="navbar navbar-expand-lg bg-secondary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">VUE交流網</a>
          <!-- <img class="logo" src="../../../assets/LOGO.png" alt="Logo" /> -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/category" class="nav-link" >文章管理</router-link>
              </li>
              <li class="nav-item">
                <a v-if="loggedIn" @click="toggleLogin" class="nav-link" >登出</a>
                <router-link v-else to="/LOGIN" class="nav-link" >登入</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <!-- 其他頁面內容 -->
  </div>
</template>
<script >
export default {
  data() {
    return {
      loggedIn: false // 初始值為未登入
    };
  },
  methods: {
    toggleLogin() {
      this.loggedIn = !this.loggedIn; // 切換登入狀態
    }
  }
};
</script>
<style>
/* .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
  }
  
  .logo {
    width: 50px;
    height: auto;
  }
  
  .nav {
    display: flex;
    align-items: center;
  }
  
  button {
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
    margin-right: 20px;
  }
  
  a {
    text-decoration: none;
    color: white;
  } */

  /* .logo{
    width: 70px;
  } */
</style>