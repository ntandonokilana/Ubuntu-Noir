<template>
  <div class="login-form">
    <form @submit.prevent="submitForm" class="form">
      <label for="email" class="form-label">Email Address:</label>
      <input type="email" id="email" name="email" v-model="form.email" placeholder="Your Email Address" required class="form-input">
      
      <label for="password" class="form-label">Password:</label>
      <input type="password" id="password" name="password" v-model="form.password" placeholder="Enter Password" required class="form-input">
      
      <div class="submit-form">
        <button type="submit" class="submit-btn">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    submitForm() {
    }
  }
}
</script>

<style scoped>
.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
}

.form {
  width: 600px; /* Increased width for larger form */
  /* background-color: #f9f9f9; */
  padding: 40px; /* Increased padding for more spacing */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-label {
  margin-bottom: 8px;
  font-weight: bold;
}

.form-input {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: none;
  border-bottom: 2px solid #000000; /* Bottom border only */
  font-weight: bold; /* Bold black color */
}

.submit-btn {
  padding: 10px;
  background-color: #000000;
  color: #fff;
  border: none;
  border-radius: 4px;
}

.submit-btn:hover {
  background-color: #0056b3;
}
</style>
