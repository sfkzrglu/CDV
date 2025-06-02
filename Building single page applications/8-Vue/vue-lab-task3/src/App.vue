<script setup>
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <h1>Vue Lab - Task 3</h1>
    </div>
  </header>

  <nav>
    <router-link to="/persons" class="nav-link">List of Persons</router-link>
    <router-link to="/new-person" class="nav-link">New Person</router-link>
  </nav>

  <main>
    <router-view />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  padding-bottom: 2rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.wrapper h1 {
  text-align: center;
  color: #42b883;
  margin: 0;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 1rem 0;
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
  border-bottom: 1px solid #e9ecef;
}

nav .nav-link {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  margin: 0 0.5rem;
  border-left: 1px solid #e9ecef;
  color: #42b883;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  transition: color 0.3s ease;
}

nav .nav-link:first-of-type {
  border: 0;
}

nav .nav-link:hover {
  color: #369970;
}

nav .nav-link.router-link-active {
  color: #369970;
  background-color: #e8f5e8;
  border-radius: 4px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
