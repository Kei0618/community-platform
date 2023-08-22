<script setup>
import LayoutHeader from '@/views/Layout/component/LayoutHeader.vue';
</script>
<template>
    
    <div class="login-page">
      <div class="login-form">
      <h1>登录</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">用戶名</label>
          <input v-model="username" type="text" id="username" class="form-control">
        </div>
        <div class="form-group">
          <label for="password">密碼</label>
          <input v-model="password" type="password" id="password" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">登入</button>
      </form>
      <p v-if="error" class="error-message">{{ error }}</p>
      </div>
    </div>
    <LayoutHeader/>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        error: '',
      };
    },
    methods: {
      login() {
       
      },
    },
  };
  </script>
  
  <style scoped>
  .login-form {
    max-width: 500px;
    margin: 0 auto;
    padding: 30px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .btn {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .error-message {
    color: red;
  }
  
  /* 響應視窗*/
  @media (min-width: 724px) {
    .login-page{
    min-height: 100vh;
    display: flex;
    align-items: center;
    }
  }
  /* .login-form {
    min-height: 100vh;
    display: flex;
    align-items: center;
  } */
  </style>