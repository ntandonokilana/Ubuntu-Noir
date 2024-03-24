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
            <td>
              <template v-if="!user.editing">{{ user.firstname }}</template>
              <input v-else type="text" v-model="user.editedFirstname" class="input-field">
            </td>
            <td>
              <template v-if="!user.editing">{{ user.lastname }}</template>
              <input v-else type="text" v-model="user.editedSurname" class="input-field">
            </td>
            <td>
              <template v-if="!user.editing">{{ user.gender }}</template>
              <input v-else type="text" v-model="user.editedGender" class="input-field">
            </td>
            <td>
              <template v-if="!user.editing">{{ user.age }}</template>
              <input v-else type="number" v-model.number="user.editedAge" class="input-field">
            </td>
            <td>
              <template v-if="!user.editing">{{ user.userRole }}</template>
              <input v-else type="text" v-model="user.userRole" disabled class="input-field">
            </td>
            <td>
              <template v-if="!user.editing">{{ user.email }}</template>
              <input v-else type="email" v-model="user.editedEmail" class="input-field">
            </td>
            <td><img :src="user.profileurl" alt="User Image" class="user-image"></td>
            <td>
              <template v-if="!user.editing">
                <button class="edit-btn" @click="editUser(user)">Edit</button>
                <button class="delete-btn" @click="deleteUser(user.userID)">Delete</button>
              </template>
              <template v-else>
                <button class="save-btn" @click="saveChanges(user)">Save</button>
                <button class="cancel-btn" @click="cancelEdit(user)">Cancel</button>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {};
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch('fetchUsers');
  },
  methods: {
    editUser(user) {
      user.editing = true;
      user.editedFirstname = user.firstname;
      user.editedSurname = user.lastname;
      user.editedGender = user.gender;
      user.editedAge = user.age;
      user.editedEmail = user.email;
    },
    cancelEdit(user) {
      user.editing = false;
    },
    async saveChanges(user) {
      try {
        
        user.firstname = user.editedFirstname;
        user.lastname = user.editedSurname; 
        user.gender = user.editedGender;
        user.age = user.editedAge;
        user.email = user.editedEmail;
        user.editing = false;
        Swal.fire({
          icon: 'success',
          title: 'User updated successfully',
          showConfirmButton: false,
          timer: 1500
        });
      } catch (error) {
        console.error('Error updating user:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to update user!',
        });
      }
    },
    async deleteUser(userId) {
      try {
        this.$store.dispatch('deleteUser', userId);
        Swal.fire({
          icon: 'success',
          title: 'User deleted successfully',
          showConfirmButton: false,
          timer: 1500
        });
      } catch (error) {
        console.error('Error deleting user:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to delete user!',
        });
      }
    }
  }
};
</script>
