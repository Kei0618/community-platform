<template>
    <div>
      <header class="header">
        <img class="logo" src="../../../assets/LOGO.png" alt="Logo" />
        <div class="nav">
          <button @click="toggleLogin">
            {{ loggedIn ? '登出' : '登入' }}
          </button>
          <router-link to="/article-management">文章管理</router-link>
        </div>
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
  .header {
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
  }
  </style>