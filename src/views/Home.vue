<template>
  <div class="home">
    <div>

        <button class="text-2xl hover:shadow-lg">View</button>

    </div>
    <router-view/>
  </div>
</template>

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
