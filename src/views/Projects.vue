<template>
  <div class="black-bg">
    <section class="hero is-medium" v-scroll-reveal.reset="{ delay: 250 }">
      <div class="hero-body parallax-container">
        <div class="parallax">
          <h1 class="title is-2 para-title">Projects I have built</h1>
        </div>
      </div>
    </section>

   
    <section v-scroll-reveal.reset="{ delay: 250 }">
       <!-- <center v-scroll-reveal.reset="{ delay: 250 }" class="mb-4">
      <div class="columns is-centered uihead">
        <h5>
          <strong>Proj</strong>
        </h5>
      </div>
    </center> -->
      <div class="post-card flex-container columns  is-multiline">
        <div class="grid-item col-lg-2 column is-one-quarter">
          <a  target="__blank" href="https://gardenacademy.io/">
            <div class="card">
              <div class="card-image">
                <figure class="image is-square" style="text-align:center">
                  <img
                    src="../assets/garden-logo.svg"
                    alt="Placeholder image"
                    style="object-fit:contain"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Garden Academy</p>
                  </div>
                </div>
                <div class="content">
                  <p>.</p>
                  <button class="button is-primary is-outlined is-fullwidth"  data-cursor-hover>View Project</button>
                </div>
              </div>
            </div>
          </a>
        </div>
          <div class="grid-item col-lg-2 column is-one-quarter">
          <a target="__blank" href="https://iisysgroup.com/">
            <div class="card">
              <div class="card-image">
                <figure class="image is-square" style="text-align:center">
                  <img
                    src="../assets/itex.png"
                    alt="Placeholder image"
                    style="object-fit:contain"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Itex</p>
                  </div>
                </div>
                <div class="content">
                  <p>React</p>
                  <button class="button is-primary is-outlined is-fullwidth"  data-cursor-hover>View Project</button>
                </div>
              </div>
            </div>
          </a>
        </div>
           <div class="grid-item col-lg-2 column is-one-quarter">
          <a target="__blank" href="https://www.payvice.com/">
            <div class="card">
              <div class="card-image">
                <figure class="image is-square" style="text-align:center">
                  <img
                    src="../assets/payvice.png"
                    alt="Placeholder image"
                    style="object-fit:contain"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Payvice</p>
                  </div>
                </div>
                <div class="content">
                  <p>.</p>
                  <button class="button is-primary is-outlined is-fullwidth"  data-cursor-hover>View Project</button>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="grid-item col-lg-2 column is-one-quarter">
          <a target="__blank" href="https://www.edutech.global/">
            <div class="card">
              <div class="card-image">
                <figure class="image is-square" style="text-align:center">
                  <img
                    src="../assets/edutech_logo.svg"
                    alt="Placeholder image"
                    style="object-fit:contain"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">EduTech</p>
                  </div>
                </div>
                <div class="content">
                  <p>React</p>
                  <button class="button is-primary is-outlined is-fullwidth"  data-cursor-hover>View Project</button>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="grid-item column is-one-quarter">
          <a target="__blank" href="https://michara.herokuapp.com">
            <div class="card">
              <div class="card-image">
                <figure class="image is-square">
                  <img src="../assets/michara.png" alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Michara Food</p>
                  </div>
                </div>
                <div class="content">
                  <p>Vue</p>
                  <button class="button is-primary is-outlined is-fullwidth"  data-cursor-hover>View Project</button>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="grid-item column is-one-quarter">
          <a target="__blank" href="http://aries-f21cb.firebaseapp.com">
            <div class="card">
              <div class="card-image">
                <figure class="image is-square">
                  <img src="../assets/sales.gif" alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Aries</p>
                  </div>
                </div>
                <div class="content">
                  <p>Vue</p>
                  <button class="button is-primary is-outlined is-fullwidth"  data-cursor-hover>View Project</button>
                </div>
              </div>
            </div>
          </a>
        </div>  
         <div class="grid-item column is-one-quarter">
          <a target="__blank" href="https://paysure.netlify.app/">
            <div class="card">
              <div class="card-image">
                <figure class="image is-square">
                  <img src="../assets/paysure.png" alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">PaySure</p>
                  </div>
                </div>
                <div class="content">
                  <p>Nuxt</p>
                  <button class="button is-primary is-outlined is-fullwidth"  data-cursor-hover>View Project</button>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="grid-item col-lg-2 column is-one-quarter">
          <a
            target="__blank"
            href="https://tcrypto-list.netlify.app/"
          >
            <div class="card">
              <div class="card-image">
                <figure class="image is-square" style="text-align:center">
                  <img
                    src="../assets/crypto.jpeg"
                    alt="Placeholder image"
                    style="object-fit:contain"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Crypto List</p>
                  </div>
                </div>
                <div class="content">
                  <p>Next</p>
                  <button class="button is-primary is-outlined is-fullwidth"  data-cursor-hover>View Project</button>
                </div>
              </div>
            </div>
          </a>
        </div>

        <!-- <div class="grid-item column is-one-quarter">
          <a
            target="__blank"
            href="https://www.figma.com/proto/uWD18uoW0kvnfgrUDJTEtA/Untitled?node-id=7%3A2&scaling=containSent"
          >
            <div class="card">
              <div class="card-image">
                <figure class="image is-square">
                  <img src="../assets/ryder.png" alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Ryder Scott</p>
                  </div>
                </div>
                <div class="content">
                  <p>UI</p>
                  <button class="button is-primary is-outlined is-fullwidth"  data-cursor-hover>View Project</button>
                </div>
              </div>
            </div>
          </a>
        </div> -->
<!-- 
        <div class="grid-item column is-one-quarter">
          <a
            href="https://www.figma.com/proto/BYpvqSTsNKCqVLBTsRGEkD/Untitled?node-id=8%3A474&viewport=750%2C540%2C0.08195904642343521&scaling=min-zoom"
            target="__blank"
          >
            <div class="card">
              <div class="card-image">
                <figure class="image is-square">
                  <img src="../assets/afrimart.svg" alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">AfriMart</p>
                  </div>
                </div>
                <div class="content">
                  <p>UI</p>
                  <button class="button is-primary is-outlined is-fullwidth"  data-cursor-hover>View Project</button>
                </div>
              </div>
            </div>
          </a>
        </div>        -->
         <!-- <div class="grid-item column is-one-quarter">
          <a
            href="https://xd.adobe.com/view/81ef51c4-87ec-46e5-832f-a9fb7971436e-d4bc/screen/3a9992d3-edc9-42e1-9445-6e050fcb0d2c"
            target="__blank"
          >
            <div class="card">
              <div class="card-image">
                <figure class="image is-square">
                  <img src="../assets/temple.png"  class="img-fluid" alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Temple Company</p>
                  </div>
                </div>
                <div class="content">
                  <p>UI</p>
                  <button class="button is-primary is-outlined is-fullwidth"  data-cursor-hover>View Project</button>
                </div>
              </div>
            </div>
          </a>
        </div> -->

        <!-- <div class="grid-item column is-one-fifth">
          <a
            target="__blank"
            href="https://xd.adobe.com/view/a335215a-375d-43cd-6016-04f23411227f-d504/"
          >
            <div class="card">
              <div class="card-image">
                <figure class="image is-square">
                  <img src="../assets/medihub.png" alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">MediHub App</p>
                  </div>
                </div>
                <div class="content">
                  <p>UI Design</p>
                  <button class="button is-fullwidth">View Project</button>
                </div>
              </div>
            </div>
          </a>
        </div> -->

        <!-- <div class="grid-item column is-one-fifth">
          <a
            href="https://xd.adobe.com/view/54fea695-808d-4675-5256-8ebdd7f3630c-22cf/"
          >
            <div class="card">
              <div class="card-image">
                <figure class="image is-square">
                  <img src="../assets/UBA-Logo.svg" alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">UBA Agency Banking</p>
                  </div>
                </div>
                <div class="content">
                  <p>UI </p>
                  <button class="button is-fullwidth">View Project</button>
                </div>
              </div>
            </div>
          </a>
        </div> -->
<!-- 
        <div class="grid-item column is-one-fifth">
          <a target="__blank" href="https://teembet-weather-app.netlify.app/">
            <div class="card">
              <div class="card-image">
                <figure class="image is-square">
                  <img
                    src="../assets/weather.png"
                    alt="Placeholder image"
                    style="object-fit:contain"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Weather App</p>
                  </div>
                </div>
                <div class="content">
                  <p>Vue Design</p>
                  <button class="button is-fullwidth">View Project</button>
                </div>
              </div>
            </div>
          </a>
        </div> -->

        <div class="grid-item column is-one-quarter">
          <a target="__blank" href="https://coursesgram.firebaseapp.com">
            <div class="card">
              <div class="card-image">
                <figure class="image is-square">
                  <img src="../assets/course.png" alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">CourseGram</p>
                  </div>
                </div>
                <div class="content">
                  <p>Vue</p>
                  <button class="button is-primary is-outlined is-fullwidth"  data-cursor-hover>View Project</button>
                </div>
              </div>
            </div>
          </a>
        </div>

        <!-- <div class="grid-item column is-one-fifth">
          <a target="__blank" href="https://timbet-portfolio.herokuapp.com">
            <div class="card">
              <div class="card-image">
                <figure class="image is-square">
                  <img src="../assets/vue-logo.png" alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Portfolio</p>
                  </div>
                </div>
                <div class="content">
                  <p>Vue</p>
                  <button class="button is-fullwidth">View Project</button>
                </div>
              </div>
            </div>
          </a>
        </div> -->

        <!-- <div class="grid-item column is-one-fifth">
          <a
            target="__blank"
            href="https://xd.adobe.com/view/9e0d0877-c821-44ea-ba7a-5f8c91f082dd-cb5e/"
          >
            <div class="card">
              <div class="card-image">
                <figure class="image is-square">
                  <img src="../assets/paysure.jpeg" alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Agency Banking Dashboard</p>
                  </div>
                </div>
                <div class="content">
                  <p>Angular & UI Design</p>
                  <button class="button is-fullwidth">View Project</button>
                </div>
              </div>
            </div>
          </a>
        </div> -->
        <div class="grid-item column is-one-quarter">
          <a target="__blank" href="https://www.nextdreamluxurytravels.com/">
            <div class="card">
              <div class="card-image">
                <figure class="image is-square">
                  <img src="../assets/next.png" alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Next Dream Luxury</p>
                  </div>
                </div>
                <div class="content">
                  <p>Vue</p>
                  <button class="button is-primary is-outlined is-fullwidth"  data-cursor-hover>View Project</button>
                </div>
              </div>
            </div>
          </a>
        </div>
        <!-- <div class="grid-item column is-one-fifth">
          <a target="__blank" href="https://olaniyanestate.com.ng/">
            <div class="card">
              <div class="card-image">
                <figure class="image is-square">
                  <img src="../assets/ola.png" alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Olaniyan Estate</p>
                  </div>
                </div>
                <div class="content">
                  <p>Vue Design</p>
                  <button class="button is-fullwidth">View Project</button>
                </div>
              </div>
            </div>
          </a>
        </div> -->
        <!-- <div class="grid-item column is-one-quarter">
          <a
            target="__blank"
            href="https://www.figma.com/proto/e3FQxbLJkYeIFdNSJ1xPiC/UBA-Omnichannel?node-id=2420%3A15516&scaling=scale-down"
          >
            <div class="card">
              <div class="card-image">
                <figure class="image is-square">
                  <img src="../assets/UBA-Logo.svg" alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Omnichannel</p>
                  </div>
                </div>
                <div class="content">
                  <p>UI</p>
                  <button class="button is-primary is-outlined is-fullwidth"  data-cursor-hover>View Project</button>
                </div>
              </div>
            </div>
          </a>
        </div> -->
        <!-- <div class="grid-item column is-one-quarter">
          <a
            target="__blank"
            href="https://www.figma.com/proto/1gl9pARFZP4dcUf235FAsz/Zenith-Mobile?node-id=75%3A5&scaling=scale-down"
          >
            <div class="card">
              <div class="card-image">
                <figure class="image is-square">
                  <img src="../assets/zenith.png" alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Zenith Bank</p>
                  </div>
                </div>
                <div class="content">
                  <p>UI Design</p>
                  <button class="button is-primary is-outlined is-fullwidth"  data-cursor-hover>View Project</button>
                </div>
              </div>
            </div>
          </a>
        </div> -->
      </div>
    </section>
  </div>
</template>

<style type="text/css" scoped>
.parallax {
  background-image: url("../assets/splash4.jpg");
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
/* .grid-item {
  padding: 20px;
}
.uihead {
  margin-left: auto;
  font-size: 20px;
}

.flex-container {
  display: flex;

  flex-wrap: wrap;
}

@media (max-width: 1200px) {
  .flex-container {
    flex-direction: column;
  }
  .grid-item {
    padding: 20px;
    width: 100%;
  }
} */
.card {
  border-radius: 6px;
}
</style>

<script>
export default {
  name: "projects",
};
</script>
