<template>
  <div class="signup-page">
    <div class="background-image"></div>
    <div class="signup-form">
      <h2>Login to Your Account</h2>
      <p>Don't have an account yet? <router-link to="/signup">Sign Up</router-link></p>
      <form @submit.prevent="submitForm" class="form">
        <div class="form-group">
          <label for="email">Email Address:</label>
          <input type="email" id="email" name="email" v-model="form.email" placeholder="Your Email Address" required class="form-input">
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" v-model="form.password" placeholder="Enter Password" required class="form-input">
        </div>
        <div class="submit-form">
          <button type="submit" class="submit-btn">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

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
      // Your login logic here
      console.log('Form submitted:', this.form);

      // Assuming login is successful, show success message
      this.showLoginSuccessMessage();
    },
    showLoginSuccessMessage() {
      // Show success message using SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'You have successfully logged in.',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
}
</script>

<style scoped>
.signup-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://i.ibb.co/s2SRGkP/mohammad-dadkhah-h33si-B2533-Y-unsplash.jpg');
  background-size: cover;
  z-index: -1;
}

.signup-form {
  position: relative;
  max-width: 500px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
}

.signup-form h2 {
  text-align: center;
  color: #fff;
}

.signup-form p {
  text-align: center;
  color: #fff;
}

.form-group {
  margin-bottom: 1rem;
}

.signup-form label {
  color: #fff;
}

.signup-form .form-input {
  width: 100%;
  padding: 0.5rem;
  background-color: transparent;
  border: none;
  border-left: 3px solid transparent;
  border-bottom: 1px solid #fff;
  color: #fff;
  margin-top: 5px;
}

.signup-form .submit-btn {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.signup-form .submit-btn:hover {
  background-color: #0056b3;
}
</style>