import { reactive } from 'vue'

// Shared reactive state
const state = reactive({
  persons: []
})

// Store methods
export const store = {
  // Get all persons
  getPersons() {
    return state.persons
  },

  // Add a new person to the array
  addPerson(firstName, lastName) {
    if (firstName.trim() && lastName.trim()) {
      state.persons.push({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        id: Date.now() // Simple ID generation
      })
      return true
    }
    return false
  },

  // Get person count
  getPersonCount() {
    return state.persons.length
  }
}