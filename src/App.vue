<template>
  <div id="app">
    <div class="overallContainer flex justify-center min-h-screen bg-yellow-300 p-10">
      <div class="backButton hover:shadow-lg">
      <button class="text-2xl" @click="showAgain" v-if="showIndividualCountry">
        <router-link to="/">
          Back
        </router-link>
      </button>
      </div>

      <div v-if="showIndividualCountry" class="routerViewContainer">
        <router-view>
        </router-view>
      </div>
      <div v-else class="navContainer md:relative flex-grow h-11/12 md:w-3/4">
        <div class="wrapper md:flex">
          <div class="inputContainer relative md:flex md:flex-col md:w-1/2 h-32 ">
            <p>Favorites here</p>
          </div>
          <div class="topRightTab md:w-1/2 h-32 relative">
            <div class="favButtonCont md:w-1/5 md:absolute">
              <button>Favorites</button>
            </div>
            <div class="newButtonCont md:w-1/5 md:absolute">
              <button @click="toggleNewCountry">New</button>
              <AddCountry @add-new-country="addNewCountry" v-if="showInputCountry"/>
            </div>
          </div>
        </div>
        <div class="secondWrapper grid justify-center">
          <div
              class="mainContainer md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-28 justify-center h-4/6 md:h-5/6 md:w-full">
            <div class="card" v-for="(destination, index) in destinations || []" :key="index">
              <div class="countryName flex justify-center">
                <p class="text-2xl">{{ destination.name }}</p>
              </div>
              <img class="imageStyle h-48" :src="require(`./assets/${destination.image}`)" :alt="destination.name">
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
      </div>
    </div>

  </div>
</template>

<script>
import store from "./views/store";
import AddCountry from "@/components/AddCountry";



export default {
  name: "App",
  components: {
    AddCountry,
  },
  data() {
    return {
      showInputCountry: false,
      destinations: store.destinations,
      destinationId: this.$route.params.id,
      showIndividualCountry: false,
      neverShow: false,
    }
  },
  computed: {
    destination() {
      return store.destinations.find(
          destination => destination.id === this.destinationId
      )
    },

  },
  methods: {

    toggleNewCountry() {
      this.showInputCountry = !this.showInputCountry;
    },
    addNewCountry(newCountry) {
      this.destinations.push({
        name: newCountry.name,
        slug: 'brazil',
        image: 'brazil.jpg',
        id: this.destinations.length + 1,
        description: newCountry.description,
        experiences: [{
          name: 'New Country new Experiences',
          slug: 'Eden',
          image: '',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }]
      })
      this.showInputCountry = !this.showInputCountry;
      console.log(this.destinations)
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
  created() {
    this.destinations.forEach(function (element) {
      element.isFavorite = false;
    })
    console.log(this.destinations)
  }
}


</script>

<style>
.overallContainer {
  border: green solid 5px;
}

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
  margin: 5px 0px 0px 8px;
}

.secondWrapper {
  border: 1px white solid;
}

.navContainer {
  /*border: solid red 5px;*/
}

.inputContainer {
  border: white solid 1px;
}

.topRightTab {
  border: blue solid 1px;
}

.favButtonCont {
  border: 1px white solid;
  right: 0;
}

.newButtonCont {
  border: 1px white solid;
  right: 0;
  top: 4rem;
}

.mainContainer {
  /*border: red 1px solid;*/
}

</style>

<!--<router-link :to="`/countries/${destination.id}`">&ndash;&gt;-->
<!--            </router-link>&ndash;&gt;-->