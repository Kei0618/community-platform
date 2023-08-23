<template>
    <div>
      <h2>帳號申請</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="username" class="form-label">使用者名稱</label>
          <input type="text" id="username" v-model="username" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">電子郵件</label>
          <input type="email" id="email" v-model="email" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">密碼</label>
          <input type="password" id="password" v-model="password" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">申請帳號</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
      };
    },
    methods: {
      submitForm() {
        // 在這裡可以處理帳號申請的邏輯，例如發送 API 請求
        console.log('使用者名稱:', this.username);
        console.log('電子郵件:', this.email);
        console.log('密碼:', this.password);
        
        // 進行 API 請求等處理後，可以導航到其他頁面
        // this.$router.push('/login'); // 導航到登入頁面
      },
    },
  };
  </script>
  設定 Vue Router：
  在你的 Vue Router 設定中，將 /signup 路由指向剛剛建立的 Signup.vue 組件。
  
  javascript
  Copy code
  const routes = [
    // ...
    {
      path: '/signup',
      name: 'signup',
      component: SignupComponent
    }
  ];
  這個範例中的 Signup.vue 組件包含一個帳號申請表單，當用戶填寫完表單後，可以提交申請。你可以根據你的實際需求添加更多的表單字段和處理邏輯。
  
  在實際應用中，你還需要處理帳號申請的邏輯，例如將填寫的資料發送到後端進行帳號創建，然後根據 API 回應進行相應的處理。你可以在 submitForm 方法中添加相關的 API 請求或處理邏輯。
  
  
  
  
  
  