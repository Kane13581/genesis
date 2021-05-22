<template>
  <div class="mainContainer">
    <form @submit.prevent="sendCountryInfo">
      <input placeholder="Country Name" v-model="name" class="inputStyle">
      <input placeholder="Country Description" v-model="description" class="inputStyle">
      <button>Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddCountry",
  data() {
    return {
      name: '',
      description: ''
    }
  },
  methods: {
    sendCountryInfo: function() {
      const newCountry = {
        name: this.name,
        description: this.description,
      };
      this.$emit("add-new-country", newCountry);
      this.name = "";
      this.description = "";
    }
  }
}
</script>

<style scoped>

</style>