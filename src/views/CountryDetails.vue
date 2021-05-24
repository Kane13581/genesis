<template>
  <div class="overallCountry flex flex-col items-center">
    <div class="countryName w-80 mt-6">
      <p v-if="!showEditContent" :class="{favoriteClass: isFavorite}" class="text-2xl flex justify-center">Welcome to {{ getCountryDetails.name }} </p>
      <input v-model="newCountryName" class="text-2xl flex justify-center" v-else placeholder="Country Name">
    </div>
    <div class="countryImage flex justify-center mt-6">
      <img class="min-w-full" :src="require(`../assets/${getCountryDetails.image}`)" :alt="getCountryDetails.name">
    </div>
    <div class="countryDetails flex content-center mt-6">
      <p v-if="!showEditContent" class="text-center">{{ getCountryDetails.description }}</p>
      <input v-model="newCountryDetails" class="text-2xl flex justify-center" v-else placeholder="Country Description">
    </div>
    <div class="countryExperiences">
      <p class="text-center">{{ getCountryDetails.experiences.name }}</p>
    </div>
    <div class="editAction">
      <button class="absolute left-0 text-2xl mt-5" @click="emitEditAction">Edit</button>
      <div v-if="showEditContent">
      <button class="text-2xl mt-6 mr-16" @click="emitSaveAction(countryId)">Save</button>
      <button class="text-2xl" @click="cancelEdit">Cancel</button>
      </div>
    </div>
    <div class="favoriteCountry w-52 flex justify-center mt-6">
        <button type="button" @click="addToFavourite(countryId)" class="text-2xl mt-16 font-bold">Add to favorites</button>
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
      isActive: vuexStore.state.isActive,
      isFavorite: store.destinations.isFavorite,
      showEditContent: false,
      newCountryName: '',
      newCountryDetails: '',
      destinationId: store.destinations.id,
    }
  },
  methods: {
    emitSaveAction(countryId) {
      const newEditedCountry = {
        ...this.destinations,
        name: this.newCountryName,
        description: this.newCountryDetails,
      }
      this.$emit('emit-save-action', countryId, newEditedCountry);
      this.showEditContent = !this.showEditContent;
      console.log(countryId, newEditedCountry)
    },
    cancelEdit() {
      this.showEditContent = !this.showEditContent;
    },
    emitEditAction() {
      this.showEditContent = !this.showEditContent;
    },
    addToFavourite(countryId) {
      this.$emit('emit-action', countryId);
      this.isFavorite = !this.isFavorite;
      // console.log(this.isFavorite, countryId)
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

.editAction {

}

.favoriteClass {
  background-color: red;
}


</style>