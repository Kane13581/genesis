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
              <AddCountry @add-new-country="addNewCountry" v-if="showInputCountry"/>
            </div>
          </div>
        </div>
        <CountryList />
      </div>
    </div>

  </div>
</template>

<script>
import store from "./views/store";
import AddCountry from "@/components/AddCountry";
import CountryList from "@/components/CountryList";

export default {
  name: "App",
  components: {
    AddCountry,
    CountryList,
  },
  data() {
    return {
      showInputCountry: false,
      destinations: store.destinations,
      isFavorite: store.destinations.isFavorite,
    }
  },
  computed: {
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

.favoriteClass {
  background-color: red;
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