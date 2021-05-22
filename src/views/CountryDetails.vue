<template>
  <div>
    {{ countryId }}
    {{ getContryDetails.name}}
    <br>
    {{getContryDetails.description}}
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
  methods: {},
  computed: {
    getContryDetails() {
      if(this.countryDetails.length === 0) {
        return
      }
      let x = this.countryDetails.filter((country) => {
        return  country.id.toString() === this.countryId.toString()
      })
      return x[0]
    }
  }

};
</script>



<style scoped>

</style>