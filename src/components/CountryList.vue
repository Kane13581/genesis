<template>
  <div class="secondWrapper grid justify-center">
    <div class="backButton hover:shadow-lg">
      <button class="text-2xl border-blue-200" @click="showAgain" v-if="showIndividualCountry">
        <router-link to="/">
          Back
        </router-link>
      </button>
    </div>
    <div v-if="showIndividualCountry" class="routerViewContainer ">
      <div>
        <router-view @emit-action="addFavourite" @emit-save-action="saveFunction">
        </router-view>
      </div>
    </div>
    <div v-if="!showIndividualCountry" class="navC">
      <NavComponent/>
    </div>
    <div v-if="!showIndividualCountry"
         class="mainContainer md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-28 justify-center h-4/6 md:h-5/6 md:w-full">
      <div class="card sm:w-60 md:w-56" v-for="(destination, index) in destinations || []" :key="index">
        <div :class="{favoriteClass: destination.isFavorite}">
          <div class="countryName flex justify-center">
            <p  class="text-2xl">{{ destination.name }}</p>
          </div>
          <div class="imageContainer flex justify-center">
            <img class="imageStyle h-64 md:h-48 p-2" :src="require(`../assets/${destination.image}`)"
                 :alt="destination.name">
          </div>
          <div class="h-3">
            <p class="ml-4 descriptionStyle ml-1 text-center text-xs">{{ destination.description }}</p>
          </div>
          <div class="imageButtonContainer flex justify-around mt-3">
            <button @click="deleteCountry(index)" class="mt-11 mb-3 w-12 hover:bg-red-400 rounded hover:shadow-lg ">
              Delete
            </button>
            <router-link :to="`/countries/${destination.id}`">
              <button class="mt-11 w-12 mb-3 hover:shadow-lg rounded hover:bg-green-400" @click="toggleShowIndividual">
                View
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../views/store';
import NavComponent from "@/components/NavComponent";

export default {
  name: "CountryList",
  components: {
    NavComponent
  },
  data() {
    return {
      destinations: store.destinations,
      showIndividualCountry: false,
      isFavorite: store.destinations.isFavorite,
      destinationId: store.destinations.id,
    }
  },
  computed: {},
  methods: {
    addFavourite(countryId) {
      let x = this.destinations.filter(({id}) => {
        return id.toString() === countryId.toString();
      })
      x[0].isFavorite = !x[0].isFavorite;
      console.log(x, countryId)
    },

    saveFunction(countryId, newEditedCountry) {
      this.destinations.splice(countryId - 1, 1, newEditedCountry)
      console.log(newEditedCountry)
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

html {
  --1h: 1.4rem;
  line-height: var(--1h);
}

.descriptionStyle {
  --max-lines: 2;
  position: relative;
  max-height: 4.1rem;
  overflow: hidden;
  padding-right: 1rem; /* space for ellipsis */
}

.imageContainer {

}

.card {
  margin-top: 3rem;
  /*border: red 1px solid;*/
  box-shadow: 3px 4px 5px 4px #918b8b;
  /*height: 20rem;*/
  /*width: 14rem;*/
}

.favoriteClass {
  background-color: goldenrod;
}

.backButton {
  height: 2rem;
  position: absolute;
  left: 0;
  top: 0;
  margin: 15px 0px 0px 8px;
}

.secondWrapper {

}
</style>