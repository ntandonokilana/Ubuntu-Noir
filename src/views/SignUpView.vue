<template>
  <div class="signup-form">
    <h2>Create an Account.</h2>
    <form @submit.prevent="submitForm">
      <label for="firstname">First Name</label>
      <input type="text" id="firstname" name="firstname" v-model="form.firstname" placeholder="e.g Ntando" required>
      
      <label for="surname">Surname</label>
      <input type="text" id="surname" name="surname" v-model="form.surname" placeholder="e.g Nokilana" required>
      
      <label for="gender">Gender</label>
      <select id="gender" name="gender" v-model="form.gender" required>
        <option value="">Select Gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">Gender queer</option>
        <option value="other">Prefer Not to Say</option>
      </select>
      
      <label for="age">Age</label>
      <input type="number" id="age" name="age" v-model="form.age" placeholder="e.g 25" required>
      
      <label for="email">Email Address:</label>
      <input type="email" id="email" name="email" v-model="form.email" placeholder="Your Email Address" required>
      
      <label for="password">Password</label>
      <input type="password" id="password" name="password" v-model="form.password" placeholder="Enter Password" required>
      
      <div class="submit-form">
        <button type="submit">Register</button>
        <router-link to="/login">Already have an account? Login</router-link>
      </div>
    </form>
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
.signup-form {
  max-width: 400px;
  margin: 0 auto;
}
.signup-form h2 {
  text-align: center;
}
.signup-form form {
  display: flex;
  flex-direction: column;
}
.signup-form label {
  margin-bottom: 0.5rem;
}
.signup-form input,
.signup-form select {
  padding: 0.5rem;
  margin-bottom: 1rem;
}
.signup-form .submit-form {
  display: flex;
  justify-content: space-between;
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
