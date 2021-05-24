<template>
  <div class="mainContainer w-64 h-24 md:absolute md:right-0">
    <form class="" @submit.prevent="sendCountryInfo">
      <input placeholder="Country Name" v-model="name" class="inputStyle bg-gray-200 text-black">
      <button>Add</button>
      <input placeholder="Country Description" v-model="description" class="inputStyle bg-gray-200 text-black">
      <button @click="closeInput">Close</button>
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
    },
    closeInput() {
      this.$emit('emit-close-input');
    }
  }
}
</script>

<style scoped>

.mainContainer {

}

</style>