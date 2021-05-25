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
    <div class="favoriteCountry w-72 flex justify-center mt-6">
      <button type="button" @click="addToFavourite(countryId); displayMessage(); toggleText()" class="mt-16 font-bold">
        {{ messageText ? 'Add to favourites.' : 'Remove from favourites.' }}
      </button>
    </div>
    <div v-if="favMessage" class="hidingDiv w-64 md:ml-96 h-24 md:h-44 md:absolute top-0">
      <p class="flex justify-center mt-6 md:absolute text-center md:mt-0 md:top-0 md:right-0">{{ messageText ? 'Country removed from favourites.' : 'Country added to favourites.' }}</p>
    </div>
  </div>
</template>

<script>
import vuexStore from "../store/index";
import store from "./store";
export default {
  name: "CountryDetails",
  props: {
    messageText: Boolean,
  },
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
      favMessage: false,
    }
  },
  methods: {
    toggleText() {
      this.$emit('emit-toggleButton');
    },
    emitSaveAction(countryId) {
      const newEditedCountry = {
        name: this.newCountryName,
        slug: 'brazil',
        image: 'brazil.jpg',
        id: this.countryDetails.length + 1,
        description: this.newCountryDetails,
        experiences: [{
          name: 'New Country new Experiences',
          slug: 'Eden',
          image: '',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }]
      }
      this.$emit('emit-save-action', countryId, newEditedCountry);
      this.showEditContent = !this.showEditContent;
      console.log(countryId, newEditedCountry);
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
    },
    displayMessage() {
      this.favMessage = true;
      setTimeout(() => {
        this.favMessage = false;
      }, 2000)
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
  /*background-color: red;*/
}
.hidingDiv {
  /*border: 1px red solid;*/
}
</style>