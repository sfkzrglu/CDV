<template>
  <div class="new-person-view">
    <h1>{{ title }}</h1>
    
    <form @submit.prevent="handleSubmit" class="person-form">
      <div class="form-group">
        <label for="firstName">First Name:</label>
        <input 
          type="text" 
          id="firstName" 
          v-model="firstName" 
          required 
          placeholder="Enter first name"
        />
      </div>
      
      <div class="form-group">
        <label for="lastName">Last Name:</label>
        <input 
          type="text" 
          id="lastName" 
          v-model="lastName" 
          required 
          placeholder="Enter last name"
        />
      </div>
      
      <button type="submit" class="submit-btn">Add Person</button>
    </form>

    <div v-if="message" class="message" :class="messageType">
      {{ message }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { store } from '../store.js'

// Props
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

// Router
const router = useRouter()

// Local form state
const firstName = ref('')
const lastName = ref('')
const message = ref('')
const messageType = ref('success')

// Handle form submission
const handleSubmit = () => {
  const success = store.addPerson(firstName.value, lastName.value)
  
  if (success) {
    message.value = 'Person added successfully!'
    messageType.value = 'success'
    
    // Clear form
    firstName.value = ''
    lastName.value = ''
    
    // Navigate to persons list after a short delay
    setTimeout(() => {
      router.push('/persons')
    }, 1000)
  } else {
    message.value = 'Please fill in both fields.'
    messageType.value = 'error'
  }
  
  // Clear message after 3 seconds
  setTimeout(() => {
    message.value = ''
  }, 3000)
}
</script>

<style scoped>
.new-person-view {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

.person-form {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
}

.form-group input {
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #42b883;
}

.submit-btn {
  width: 100%;
  background-color: #42b883;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #369970;
}

.message {
  margin-top: 20px;
  padding: 12px;
  border-radius: 6px;
  text-align: center;
  font-weight: bold;
}

.message.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.message.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}
</style>