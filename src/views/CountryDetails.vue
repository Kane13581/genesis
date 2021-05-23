<template>
  <div class="overallCountry grid grid-cols-1 justify-center">
    <div class="countryName flex justify-center mt-6">
      <p :class="{favoriteClass: favouriteCountry}"  class="text-2xl">Welcome to {{ getCountryDetails.name }} </p>
    </div>
    <div class="countryImage flex justify-center mt-6">
      <img :src="require(`../assets/${getCountryDetails.image}`)" :alt="getCountryDetails.name">
    </div>
    <div class="countryDetails flex justify-center mt-6">
      <p flex text-center>{{ getCountryDetails.description }}</p>
    </div>
    <div class="favoriteCountry mt-6">
      <form @submit.prevent="changeFavourite">
        <button type="checkbox" class="text-2xl">Add to favorites</button>
      </form>
    </div>
  </div>
</template>

<script>

import store from "./store";

export default {

  name: "CountryDetails",
  data() {
    return {
      countryId: this.$route.params.id,
      countryDetails: store.destinations,
      favouriteCountry: store.destinations.isFavorite,
    }
  },
  methods: {
    changeFavourite() {
      this.favouriteCountry = !this.favouriteCountry;
      console.log(this.favouriteCountry)
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