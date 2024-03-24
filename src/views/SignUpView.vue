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
export default {
  data() {
    return {
      form: {
        firstname: '',
        surname: '',
        gender: '',
        age: '',
        Role: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Handle form submission here
      console.log('Form submitted:', this.form);
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
  margin: right;
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

.signup-form input,
.signup-form select {
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

.signup-form button {
  padding: 0.75rem 1rem;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.signup-form button:hover {
  background-color: #0056b3;
}
</style>