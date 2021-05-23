<template>
  <div class="secondWrapper grid justify-center">
    <div class="backButton hover:shadow-lg">
      <button class="text-2xl" @click="showAgain" v-if="showIndividualCountry">
        <router-link to="/">
          Back
        </router-link>
      </button>
    </div>
    <div v-if="showIndividualCountry" class="routerViewContainer ">
      <div>
        <router-view @emit-action="addFavourite">
        </router-view>
      </div>
    </div>
  <div v-if="!showIndividualCountry" class="mainContainer md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-28 justify-center h-4/6 md:h-5/6 md:w-full">
    <div  class="card" v-for="(destination, index) in destinations || []" :key="index">
      <div class="countryName flex justify-center">
        <p :class="{favoriteClass: destination.isFavorite}" class="text-2xl">{{ destination.name }}</p>
      </div>
      <img class="imageStyle h-48" :src="require(`../assets/${destination.image}`)" :alt="destination.name">
      <p class="ml-1 truncate">{{ destination.description }}</p>
      <div class="imageButtonContainer flex justify-around mt-3">
        <button @click="deleteCountry(index)" class="text-2xl hover:shadow-lg ">Delete</button>
        <router-link :to="`/countries/${destination.id}`">
          <button class="text-2xl hover:shadow-lg" @click="toggleShowIndividual">View</button>
        </router-link>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import store from '../views/store'

export default {
  name: "CountryList",
  data() {
    return {
      destinations: store.destinations,
      showIndividualCountry: false,
      // isFavorite: store.destinations.isFavorite
    }
  },
  computed: {
    // destination() {
    //   return store.destinations.find(
    //       destination => destination.id === this.destinationId
    //   )
    // },

  },
  methods: {
    addFavourite() {
      this.isFavorite = !this.isFavorite;
    },
    deleteCountry(index) {
      this.destinations.splice(index, 1)
    },
    toggleShowIndividual() {
      this.showIndividualCountry = !this.showIndividualCountry;
    },
    showAgain() {
      this.showIndividualCountry = !this.showIndividualCountry;
    },
    createFavorite(destinations) {
      destinations.isFavorite = !destinations.isFavorite;
      console.log(destinations.isFavorite)
    }
  },


}
</script>

<style scoped>


.card {
  margin-top: 3rem;
  border: red 5px solid;
  height: 20rem;
  width: 14rem;
}

.favoriteClass {
  background-color: red;
}

.backButton {
  height: 2rem;
  position: absolute;
  left: 0;
  top: 0;
  margin: 15px 0px 0px 8px;
}

.secondWrapper {
  border: 1px white solid;
}
</style>