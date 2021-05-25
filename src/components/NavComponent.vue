<template>
  <div class="wrapper md:flex">
    <div class="inputContainer relative md:flex md:flex-col md:w-1/2 h-32 ">
      <p></p>
    </div>
    <div class="topRightTab md:w-1/2 h-32 relative grid justify-center">
      <div class="favButtonCont h-10 mt-1 md:w-1/5 ">
        <button @click="toggleFavoriteCountry" class="buttonStyle border-none md:absolute md:right-0 rounded-3xl bg-gray-400 w-20">{{ toggleFavourite ? 'Favourites' : 'Back to list' }}</button>
      </div>
      <div class="newButtonCont h-10 md:w-1/5 ">
        <button v-if="!showInputCountry" class="buttonStyle border-none md:absolute md:right-0 rounded-3xl bg-gray-400 w-20" @click="toggleNewCountry">New</button>
        <AddCountry @emit-close-input="closeInput" @add-new-country="addNewCountry" v-else/>
      </div>
    </div>
  </div>
</template>

<script>
import AddCountry from "@/components/AddCountry";
import store from "@/views/store";

export default {
  name: "NavComponent",
  components: {
    AddCountry
  },
  props: {
    toggleFavourite: Boolean,
  },
  data() {
    return {
      showInputCountry: false,
      destinations: store.destinations,
    }
  },
  methods: {
    toggleFavoriteCountry() {
      this.$emit('emit-toggle-favourite')
    },
    toggleNewCountry() {
      this.showInputCountry = !this.showInputCountry;
    },
    addNewCountry(newCountry) {
      this.destinations.unshift({
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
    closeInput() {
      this.showInputCountry = !this.showInputCountry;
    },
  }
}
</script>

<style scoped>

.buttonStyle {
  box-shadow: 3px 4px 5px 4px #918b8b;
}

.inputContainer {
  /*box-shadow: 0px 6px 8px 8px #918b8b;*/
}

.topRightTab {
  /*box-shadow: 0px 6px 8px 8px #918b8b;*/
}

.favButtonCont {
  right: 0;
}

.newButtonCont {

  right: 0;
  top: 4rem;
}

</style>