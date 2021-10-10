<template>
  <div class="black-bg">
    <section class="hero is-medium" v-scroll-reveal.reset="{ delay: 250 }">
      <div class="hero-body parallax-container">
        <div class="parallax">
          <h1 class="title is-2 para-title"><span class="white-text">Meet Timbet</span></h1>
        </div>
        <!-- <parallax :speed-factor="1.20" direction="down" >
         
            <img src="../assets/cloud-background.png"/>
             <h1 class="title is-2 para-title">Meet Timbet</h1>
              
          </parallax>
         -->
      </div>
    </section>

    <section class="section" v-scroll-reveal.reset="{ delay: 250 }">
      <h2 class="title is-3 has-text-weight-medium has-text-centered white-text">
      <span class="white-text">  What I Bring</span>
      </h2>
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="box">
              <h3 class="title is-4 has-text-weight-medium "><span class="white-text">Front End Focus</span></h3>
              <p class="white-text">
                Focused on building user interfaces with adobe XD, JS
                (Vue,ES6),Angular, HTML, and CSS that are well designed and
                functional.
              </p>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <h3 class="title is-4 has-text-weight-medium">
              <span class="white-text">  Full Stack Experience </span>
              </h3>
              <p class="white-text">
              Experience working across the application stack using APIs, Node,
              Mongo, and Firebase and Heroku to deliver production applications
              from design to deployment.</p>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <h3 class="title is-4 has-text-weight-medium">
              <span class="white-text"> Broad Business Exposure </span> 
              </h3>
              <p class="white-text">
                Production of User Interfaces that communicates with customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <section
      class="section has-background-light"
      v-scroll-reveal.reset="{ delay: 250 }"
    >
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-four-fifths">
            <p></p>
          </div>
        </div>
      </div> 
    </section> -->
    <section class="section" v-scroll-reveal.reset="{ delay: 250 }">
      <h2 class="title is-3 has-text-weight-medium has-text-centered">
       <span class="white-text">Technologies I've Worked With</span> 
      </h2>
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-fifth">
            <div class="box">
              <figure class="image is-square">
                <img src="../assets/vue-logo.png" alt="Placeholder image" />
              </figure>
              <h3
                class="tech-box-title title is-4 has-text-weight-medium has-text-centered"
              >
              <span class="white-text">
                
                 Vue.js </span>
              </h3>
              <p class="white-text">Full production applications written in Vue</p>
            </div>
          </div>
          <div class="column is-one-fifth">
            <div class="box">
              <figure class="image is-square">
                <img src="../assets/figma.svg" alt="Placeholder image" />
              </figure>
              <h3
                class="tech-box-title title is-4 has-text-weight-medium has-text-centered"
              >
               <span class="white-text">Figma</span> 
              </h3>
              <p class="white-text">Proficient in UI prototyping and wireframing</p>
            </div>
          </div>
          <div class="column is-one-fifth">
            <div class="box">
              <figure class="image is-square">
                <img src="../assets/angular.png" alt="Placeholder image" />
              </figure>
              <h3
                class="tech-box-title title is-4 has-text-weight-medium has-text-centered"
              >
              <span class="white-text">  Angular</span>
              </h3>
              <p class="white-text">Full production applications written in Angular</p>
            </div>
          </div>
          <div class="column is-one-fifth">
            <div class="box">
              <figure class="image is-square">
                <img src="../assets/node-logo.png" alt="Placeholder image" />
              </figure>
              <h3
                class="tech-box-title title is-4 has-text-weight-medium has-text-centered"
              >
               <span class="white-text"> Node.js </span>
              </h3>
              <p class="white-text">Back-ends written using Node and Express</p>
            </div>
          </div>
          <div class="column is-one-fifth">
            <div class="box">
              <figure class="image is-square">
                <img src="../assets/react.png" alt="Placeholder image" />
              </figure>
              <h3
                class="tech-box-title title is-4 has-text-weight-medium has-text-centered"
              >
         <span class="white-text">     React</span>  
              </h3>
              <p class="white-text">Full production applications written in React</p>
            </div>
          </div>
        </div>
        <p
          class="tech-box-title title is-4 has-text-weight-light has-text-centered"
        >
          Web API's • React • Vue • Angular • Wordpress • Firebase
        </p>
      </div>
    </section>
    <section
      class="section  black-bg"
      v-scroll-reveal.reset="{ delay: 250 }"
    >
      <h2 class="title is-3 has-text-weight-medium has-text-centered">
       <span class="white-text">What Drives Me </span> 
      </h2>
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half content">
            <ul>
              <li class="white-text"><Strong class="white-text">An innate desire to learn</Strong>.</li>
              <li class="white-text">
                <Strong class="white-text">Compassion for users:</Strong>I strive to make products
                that put users first.
              </li>
              <li class="white-text">
                <Strong class="white-text">A passion for justice:</Strong>I want to put my skills
                to work to make the world a better place for everyone.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style type="text/css" scoped>
.parallax {
  background-image: url("../assets/splash1.jpg");
  /* Set a specific height */
  height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
@media only screen and (max-device-width: 1366px) {
  .parallax {
    background-attachment: scroll;
  }
}
.box {
  height: 100%;
}
.tech-box-title {
  margin-top: 1.5rem;
}
.para-title {
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  padding: 20px;
  color: white;
  text-align: center;
}
.parallax-container {
  position: relative;
  width: auto;
}
</style>
<style lang="scss" scoped></style>
<script>
export default {
  name: "about",
};
</script>
