<template>
  <div class="signup-page">
    <div class="background-image"></div>
    <div class="signup-form">
      <h2>Create an Account.</h2>
      <p>Already have an account?<router-link to="/login"> Login</router-link></p>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="firstname">First Name</label>
          <input type="text" id="firstname" name="firstname" v-model="form.firstname" placeholder="e.g Ntando" required>
        </div>
        <div class="form-group">
          <label for="surname">Surname</label>
          <input type="text" id="surname" name="surname" v-model="form.surname" placeholder="e.g Nokilana" required>
        </div>
        <div class="form-group">
          <label for="gender">Gender</label>
          <select id="gender" name="gender" v-model="form.gender" required>
            <option value="">Select Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Gender queer</option>
            <option value="other">Prefer Not to Say</option>
          </select>
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input type="number" id="age" name="age" v-model="form.age" placeholder="e.g 25" required>
        </div>
        <div class="form-group">
          <label for="email">Email Address:</label>
          <input type="email" id="email" name="email" v-model="form.email" placeholder="Your Email Address" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" v-model="form.password" placeholder="Enter Password" required>
        </div>
        <div class="submit-form">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      form: {
        firstname: '',
        surname: '',
        gender: '',
        age: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        await axios.post('https://capstone-b.onrender.com/signup', this.form);
        // Redirect to login page or show success message
        this.$router.push('/login');
      } catch (error) {
        console.error('Error during registration:', error);
        // Show error message
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: 'Please try again later.'
        });
      }
    }
  }
};
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
  max-width: 90%; /* Adjust max-width for smaller screens */
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
}

.signup-form h2,
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

.signup-form input,
.signup-form select,
.signup-form button {
  width: 100%;
  padding: 0.5rem;
  background-color: transparent;
  border: none;
  border-left: 3px solid transparent;
  border-bottom: 1px solid #fff;
  color: #fff;
  margin-top: 5px;
}

.signup-form select {
  appearance: none;
}

.signup-form .submit-form {
  margin-top: 20px;
  text-align: center;
}
</style>

<style>
@media screen and (max-width: 576px) {
  .signup-form {
    padding: 10px; 
  }

  .signup-form button {
    padding: 0.5rem 1rem; 
  }
}
</style>
