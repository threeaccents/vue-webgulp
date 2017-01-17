<script>
  import Navbar from './Navbar.vue'

  export default {
    name: "app",

    components: {
      Navbar
    }
  }
</script>

<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>