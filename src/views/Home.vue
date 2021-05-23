<template>
  <div class="home">
    This is the home page
    <div>
      <router-link :to="`/countries/${destination.id}`">
        <button class="text-2xl hover:shadow-lg">View</button>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>
// make home become new page for every country based on their id...
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import store from "./store"

export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      destinations: store.destinations
    }
  }
}
</script>
