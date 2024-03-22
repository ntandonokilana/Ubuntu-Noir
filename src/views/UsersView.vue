<template>
    <div class="admin-section">
      <h2>Users</h2>
      <table class="user-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Role</th>
            <th>Email</th>
            <th>Picture</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user.userID" :class="{ 'zebra-stripe': index % 2 === 0 }">
            <td>{{ index + 1 }}</td>
            <td><h2>{{ user.firstname }}</h2></td>
            <td><h2>{{ user.lastname }}</h2></td>
            <td><p>{{ user.gender }}</p></td>
            <td><p>{{ user.age }}</p></td>
            <td><p>{{ user.userRole }}</p></td>
            <td><p>{{ user.email }}</p></td>
            <td><img :src="user.profileurl" alt="User Image" class="user-image"></td>
            <td>
              <button class="edit-btn" @click="editUser(user)">Edit</button>
              <button class="delete-btn" @click="deletUser(user._id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
  data() {
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch('fetchUsers');
  },
  methods: {}
};
</script>
