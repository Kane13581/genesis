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
      <NavComponent />
    </div>
    <div v-if="!showIndividualCountry"
         class="mainContainer md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-28 justify-center h-4/6 md:h-5/6 md:w-full">
      <div class="card" v-for="(destination, index) in destinations || []" :key="index">
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
          <button v-if="!showIndividualCountry" @click="turnThisFav(destination)">Favourite</button>
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
  computed: {
  },
  methods: {
    turnThisFav(destination) {
      destination.isFavorite = !destination.isFavorite;
      console.log(destination)
    },
    addFavourite(countryId) {
     let x = this.destinations.filter(({ id } ) => {
       return id.toString() === countryId.toString();
      })
      x[0].isFavorite = true;
      console.log(x, countryId)
      },


    saveFunction(countryId, newEditedCountry) {
      this.destinations.splice(countryId, 1, newEditedCountry)

    },
    // addFavourite(countryId) {
    //   let favouriteCountry = this.destinations.filter((destination) => {
    //     return destination.id.toString() === countryId.toString()
    //   })
    //   return favouriteCountry[0];
    // },
    // addFavourite() {
    //   console.log(this.destinationId, this.isFavorite)
      // let x = this.countryDetails.filter((country) => {
      //   return country.id.toString() === this.countryId.toString()
      // })
      // return x[0]
      // if (countryId === this.destinations.id) {
      //   this.isFavorite = true;
      // }
      // console.log(countryId,  this.isFavorite)
    // },

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
  /*border: red 5px solid;*/
  box-shadow: 3px 4px 5px 4px #918b8b;
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

}
</style>