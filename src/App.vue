<template>
  <div id="nav">
    <div class="overallContainer flex justify-center min-h-screen bg-yellow-300 p-10">

      <div class="navContainer h-44 md:space-y-0 md:w-3/4">
        <div class="wrapper">
          <div class="inputContainer md:flex md:flex-col md:w-1/2 h-24 ">
            <p>Favorites here</p>
          </div>
          <div class="topRightTab md:w-1/2 h-32 relative">
            <div class="favButtonCont md:w-1/2 md:absolute">
              <button>Favorites</button>
            </div>
            <div class="newButtonCont md:w-1/2 md:absolute">
              <button>New</button>
            </div>
          </div>
        </div>

        <div class="mainContainer h-4/5 md:space-y-0 md:w-3/4">

        </div>
      </div>

    </div>
  </div>
</template>

<style>
.overallContainer {
  border: green solid 5px;
}

.navContainer {
 border: solid red 5px;
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
  border: red 1px solid;
}

</style>
