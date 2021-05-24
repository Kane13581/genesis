<template>
  <div id="app">
    <div class="overallContainer flex justify-center min-h-screen bg-blue-100 p-10">
      <div class="navContainer md:relative flex-grow h-11/12 md:w-3/4">
        <CountryList />
      </div>
    </div>
  </div>
</template>

<script>
import store from "./views/store";
import CountryList from "@/components/CountryList";


export default {
  name: "App",
  components: {
    CountryList,
  },
  data() {
    return {
      showInputCountry: false,
      destinations: store.destinations,
      isFavorite: store.destinations.isFavorite,
    }
  },
  computed: {
  },
  methods: {
    toggleNewCountry() {
      this.showInputCountry = !this.showInputCountry;
    },
  },
  created() {
    this.destinations.forEach(function (element) {
      element.isFavorite = false;
    })
    console.log(this.destinations)
  }
}


</script>

<style>
.overallContainer {

}

</style>
