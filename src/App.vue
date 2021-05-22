<template>
  <div id="app">
    <div class="overallContainer flex justify-center min-h-screen bg-yellow-300 p-10">

      <div class="navContainer md:relative flex-grow h-11/12 md:w-3/4">
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
              <AddCountry @add-new-country="addNewCountry" v-if="showInputCountry" />
            </div>
          </div>
        </div>
        <div class="secondWrapper grid justify-center">
        <div class="mainContainer md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-28 justify-center h-4/6 md:h-5/6 md:w-full">
          <div class="card" v-for="(destination, index) in destinations || []" :key="index">
            <div class="countryName flex justify-center">
              <p class="text-2xl">{{ destination.name }}</p>
            </div>
            <img class="imageStyle h-48" :src="require(`./assets/${destination.image}`)" :alt="destination.name">
            <p class="ml-1 truncate">{{ destination.description }}</p>
              <div class="imageButtonContainer flex justify-around mt-3">
                <button class="text-2xl hover:shadow-lg ">Delete</button>
                <button class="text-2xl hover:shadow-lg">View</button>
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

    newList: store.destinations,
    newListName: store.destinations,
    newListSlug: store.destinations,
  }
},
  computed: {
  destination() {
    return store.destinations.find(
        destination => destination.id === this.destinationId
    )
  }
  },
  methods: {

    toggleNewCountry() {
      this.showInputCountry = !this.showInputCountry;
    },
    addNewCountry() {
      this.destinations.push({
      name: 'Brazil',
      slug: 'brazil',
      image: 'brazil.jpg',
        id: this.newList.length - 1 + 1,
        description: 'Alasda',
        experiences: [{
        name: 'new',
          slug: 'som',
          image: 'sadas',
          description: 'asdads'
        }]
      })
      console.log(this.newListName)
    }
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