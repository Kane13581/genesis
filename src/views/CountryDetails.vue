<template>
  <div class="overallCountry grid grid-cols-1 justify-center">
    <div class="countryName">
      <p class="text-2xl">Welcome to {{ getCountryDetails.name }} </p>
    </div>
    <div class="countryImage">
      <img :src="require(`../assets/${getCountryDetails.image}`)" :alt="getCountryDetails.name">
    </div>
    <div class="countryDetails">
      {{ getCountryDetails.description }}
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
    }
  },
  methods: {
    emitBackAction() {
      this.$emit("emit-back-action")
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

</style>