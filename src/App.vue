<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#home" v-smooth-scroll="{ duration: 1000, offset: -50 }">
          <img src="./assets/headertim.jpg" class="logo" width="200" height="50">
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" :class="{ 'is-active': showNav }" @click="showNav = !showNav">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNav }">
        <!-- <div class="navbar-start">

        </div> -->

        <div class="navbar-end">
          <a href="#home" v-smooth-scroll="{ duration: 2000, offset: -50 }"  class="navbar-item">
            Home
          </a>
          <a href="#about" v-smooth-scroll="{ duration: 2000, offset: -50 }" class="navbar-item">
           About
          </a>
          <a href="#projects" v-smooth-scroll="{ duration: 2000, offset: -50 }" class="navbar-item">
           Projects
          </a>
          <!-- <router-link to="/contact" class="navbar-item">
           Contact
          </router-link> -->
       </div>
     </div>
   </nav>
   <div data-bs-spy="scroll" data-bs-target="#navbarBasicExample" data-bs-offset="0" tabindex="0">

  
<home id="home"/>
  <about id="about"/>
  <projects id="projects"/>
   </div>
   <footer class="footer">
    <div class="content has-text-centered">
      <p>
        Built by Timbet Ekanem with Vue.js, Bulma, and Mongo DB.
      </p>
     
    </div>
  </footer>
</div>
</template>

<script>

import About from './views/About.vue';

import Projects from './views/Projects.vue';
import Home from './views/Home.vue';
export default {
  components: { About,Projects,Home },
    name: "App",
    data() {
      return{
        showNav: false
      }
    },
  };
</script>

<style type="text/css">
#app {
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 210px; /* height of your footer */
}
footer {
 position: absolute;
 bottom: 0;
 width: 100%;
}
.logo:hover{
  transition: ease-out 1s;
  transform: scale(1.2);
}
</style>

<style lang="sass">

$navbar-item-hover-color: teal
$primary: teal


.hero-home
  @extend .hero
  


@import "~bulma/bulma.sass"

</style>
