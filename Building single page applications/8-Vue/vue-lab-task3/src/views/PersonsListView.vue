<template>
  <div class="persons-list-view">
    <h1>{{ title }}</h1>
    
    <div class="list-container">
      <div v-if="persons.length > 0" class="persons-list">
        <div class="person-card" v-for="person in persons" :key="person.id">
          <div class="person-name">
            {{ person.firstName }} {{ person.lastName }}
          </div>
        </div>
      </div>
      
      <div v-else class="empty-state">
        <p>No persons added yet.</p>
        <router-link to="/new-person" class="add-first-btn">
          Add First Person
        </router-link>
      </div>
      
      <div class="summary">
        <p class="count">Total persons: <strong>{{ personCount }}</strong></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { store } from '../store.js'

// Props
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

// Computed properties using the store
const persons = computed(() => store.getPersons())
const personCount = computed(() => store.getPersonCount())
</script>

<style scoped>
.persons-list-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.list-container {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.persons-list {
  margin-bottom: 30px;
}

.person-card {
  background: white;
  padding: 15px 20px;
  margin-bottom: 10px;
  border-radius: 6px;
  border-left: 4px solid #42b883;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.person-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
}

.person-name {
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.empty-state {
  text-align: center;
  padding: 40px 20px;
  color: #666;
}

.empty-state p {
  font-size: 18px;
  margin-bottom: 20px;
}

.add-first-btn {
  display: inline-block;
  background-color: #42b883;
  color: white;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.add-first-btn:hover {
  background-color: #369970;
}

.summary {
  border-top: 2px solid #e9ecef;
  padding-top: 20px;
  text-align: center;
}

.count {
  font-size: 18px;
  color: #333;
  margin: 0;
}

.count strong {
  color: #42b883;
  font-size: 20px;
}
</style>