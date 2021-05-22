<template>
  <div class="mainContainer">
    <form @submit.prevent="sendCountryInfo">
      <input v-model="name" class="inputStyle">
<!--      <input v-model="description" class="inputStyle">-->
      <button>Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddCountry",
  data() {
    return {
      name: "",
      description: "",
    }
  },
  methods: {
    sendCountryInfo: function() {
      const newCountry = {
        name: this.name.toString(),

      };
      this.$emit("add-new-country", newCountry);
      this.name = "";

    }
  }
}
</script>

<style scoped>

</style>