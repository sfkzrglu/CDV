<template>
  <div class="person-manager-options">
    <h2>Person Manager (Options API)</h2>
    
    <!-- Form for adding new person -->
    <form @submit.prevent="addPersonToList">
      <div class="form-group">
        <label for="firstNameOptions">First Name:</label>
        <input 
          type="text" 
          id="firstNameOptions" 
          v-model="firstName" 
          required 
        />
      </div>
      
      <div class="form-group">
        <label for="lastNameOptions">Last Name:</label>
        <input 
          type="text" 
          id="lastNameOptions" 
          v-model="lastName" 
          required 
        />
      </div>
      
      <button type="submit">Add Person</button>
    </form>

    <!-- List of persons -->
    <div class="persons-list">
      <h3>Persons List</h3>
      <ul v-if="persons.length > 0">
        <li v-for="(person, index) in persons" :key="index">
          {{ person.firstName }} {{ person.lastName }}
        </li>
      </ul>
      <p v-else>No persons added yet.</p>
    </div>

    <!-- Summary -->
    <div class="summary">
      <p><strong>Total persons: {{ personCount }}</strong></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonManagerOptions',
  data() {
    return {
      firstName: '',
      lastName: '',
      persons: []
    }
  },
  computed: {
    personCount() {
      return this.persons.length
    }
  },
  methods: {
    addPersonToList() {
      if (this.firstName.trim() && this.lastName.trim()) {
        this.persons.push({
          firstName: this.firstName.trim(),
          lastName: this.lastName.trim()
        })
        
        // Clear form fields
        this.firstName = ''
        this.lastName = ''
      }
    }
  }
}
</script>

<style scoped>
.person-manager-options {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 40px;
  border-top: 2px solid #42b883;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

button {
  background-color: #42b883;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #369970;
}

.persons-list {
  margin-top: 30px;
}

.persons-list ul {
  list-style-type: none;
  padding: 0;
}

.persons-list li {
  background-color: #f8f9fa;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 4px;
  border-left: 4px solid #42b883;
}

.summary {
  margin-top: 20px;
  padding: 15px;
  background-color: #e9ecef;
  border-radius: 4px;
}
</style>