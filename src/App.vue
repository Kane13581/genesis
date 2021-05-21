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
              <button>New</button>
            </div>
          </div>
        </div>
        <div class="secondWrapper grid justify-center">
        <div class="mainContainer md:grid grid-cols-4 gap-28 justify-center h-4/6 md:h-5/6 md:w-full">
          <div class="card flex justify-center" v-for="(destination, index) in destinations" :key="index">
            <router-link to="`/countries/${destination.id}`">
              {{ destination.name }}
            </router-link>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "./views/store";

export default {
name: "App",
data() {
  return {
    destinations: store.destinations
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
