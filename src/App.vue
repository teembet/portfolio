<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <nav class="navbar is-fixed-top black-bg" role="navigation" aria-label="main navigation">
      <div class="navbar-brand black-bg">
        <a class="navbar-item" data-cursor-hover href="#home" v-smooth-scroll="{ duration: 1000, offset: -50 }">
         <h1 class="logo">TIMBET EKANEM</h1>
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" :class="{ 'is-active': showNav }" @click="showNav = !showNav">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu black-bg" :class="{ 'is-active': showNav }">
        <!-- <div class="navbar-start">

        </div> -->

        <div class="navbar-end black-bg">
          <a href="#home"  data-cursor-hover
          v-smooth-scroll="{ duration: 2000, offset: -50 }"  class="navbar-item white-text black-bg">
            Home
          </a>
          <a href="#about" data-cursor-hover v-smooth-scroll="{ duration: 2000, offset: -50 }" class="navbar-item white-text">
           About
          </a>
          <a href="#projects" data-cursor-hover v-smooth-scroll="{ duration: 2000, offset: -50 }" class="navbar-item white-text">
           Projects
          </a>
          <!-- <router-link to="/contact" class="navbar-item">
           Contact
          </router-link> -->
       </div>
     </div>
   </nav>
   <div id="scroll-progress"  data-cursor-hover></div>
   <div >

  
<home id="home"/>
  <about id="about"/>
  <projects id="projects"/>
   </div>
   <footer class="footer black-bg" v-scroll-reveal.reset="{ delay: 250 }" >
    <div class="content has-text-centered black-bg">
      <p class="white-text">
        Built by Timbet Ekanem with Vue.js & Bulma.
      </p>
     
    </div>
  </footer>

<!-- <div class="cursor-dot-outline"></div>
<div class="cursor-dot"></div> -->
 <cursor-fx ref="cursor" color="#008080" />
</div>
</template>

<script>

import About from './views/About.vue';
import { CursorFx } from '@luxdamore/vue-cursor-fx';
import Projects from './views/Projects.vue';
import Home from './views/Home.vue';
export default {
  components: { About,Projects,Home,
  'cursor-fx': CursorFx, },
    name: "App",
    data() {
      return{
        showNav: false,
        scrollProgress:''
      }
    },
    methods:{
 scrollMethod(){
   const scrollProgress = document.getElementById('scroll-progress');
const height =document.documentElement.scrollHeight - document.documentElement.clientHeight;
 const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
    },

    },

    mounted(){
window.addEventListener('scroll', this.scrollMethod);
this.$refs.cursor.start();

    },

    destroyed(){
   window.removeEventListener('scroll', this.scrollMethod);
    }
   
 

  };
</script>

<style type="text/css">


#scroll-progress {
  position: fixed;
  top: 0;
  width: 0%;
  height: 4px;
  background: teal;
  z-index: 10000;
}
.box,.grid-item,.card{
  background-color: #000 !important;
  /* border: 1px solid ; */
}
.logo{
  color: #4a4a4a;
}
.black-bg{
  background-color: #000 !important;
}
.white-text{
  color:#fff !important;
}
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
body{
  background-color: #000;
}
html,
html *,
body,
body * {
  cursor: none;
}
</style>

<style lang="scss">

$navbar-item-hover-color: #008080;
// $navbar-menu-color: teal;
$navbar-item-active-color: #008080;
$primary: teal;
 $navbar-item-hover-background-color:#000;
// $navbar-background-color:#000;

.hero-home{
  @extend .hero
  
}

@import "~bulma/bulma.sass"

</style>
