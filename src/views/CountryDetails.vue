<template>
  <div class="overallCountry flex flex-col items-center">
    <div class="countryName w-80 mt-6">
      <p :class="{favoriteClass: isFavorite}" class="text-2xl flex justify-center">Welcome to {{ getCountryDetails.name }} </p>
    </div>
    <div class="countryImage flex justify-center mt-6">
      <img class="min-w-full" :src="require(`../assets/${getCountryDetails.image}`)" :alt="getCountryDetails.name">
    </div>
    <div class="countryDetails flex content-center mt-6">
      <p class="text-center">{{ getCountryDetails.description }}</p>
    </div>
    <div class="favoriteCountry w-52 flex justify-center mt-6">
        <button type="button" @click="emitAction(isFavorite)" class="text-2xl">Add to favorites</button>
    </div>
  </div>
</template>

<script>
import vuexStore from "../store/index";
import store from "./store";

export default {

  name: "CountryDetails",
  data() {
    return {
      countryId: this.$route.params.id,
      countryDetails: store.destinations,
      favouriteCountry: store.destinations.isFavorite,
      isActive: vuexStore.state.isActive,
      isFavorite: store.destinations.isFavorite,
    }
  },
  methods: {
    emitAction(isFavorite) {
      this.$emit('emit-action', isFavorite);
      isFavorite = !isFavorite;
      console.log(isFavorite)
    },
    changeStatus() {
      this.$store.dispatch('changeStatus');
    }
  },
  computed: {
    getCountryDetails() {
      if (this.countryDetails.length === 0) {
        return
      }
      let x = this.countryDetails.filter((country) => {
        return country.id.toString() === this.countryId.toString()
      })
      return x[0]
    },
  },


};
</script>


<style scoped>

.favoriteClass {
  background-color: red;
}


</style>