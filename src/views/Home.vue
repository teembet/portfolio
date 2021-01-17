<template>
  <div>
    <section v-scroll-reveal.reset="{ delay: 250 }">
      <div class="hero-home is-cover is-relative is-fullheight-with-navbar">
        <div class="hero-body">
          <div class="container">
            <h1 class="title head-anim1 is-1">
              Hello, I'm <span style="color: teal">Timbet,</span>
            </h1>
            <h2 class="subtitle is-3 head-anim2">
              A customer focused, entrepreneurially minded Software Developer.
            </h2>
            <a
              class="button is-primary is-medium is-outlined"
              href="https://drive.google.com/file/d/16dezs-yCo9TtXyCnI7TyyA7eTpJMXcvn/view?usp=sharing"
              target="_blank"
              download
              >Download CV <i class="anim-icon fas fa-angle-double-down"></i
            ></a>
            <div class="social-links social-networks bounce">
              <h2 style="padding: 10px">Get In Touch</h2>
              <a href="timbetekanem@yahoo.com"><i class="fab fa-email"></i></a>
              <a href="https://linkedin.com/in/timbet-ekanem"
                ><i class="fab fa-linkedin-in"></i
              ></a>

              <a href="https://github.com/teembet"
                ><i class="fab fa-github"></i
              ></a>
              <a href="https://twitter.com/teem2016"
                ><i class="fab fa-twitter"></i
              ></a>
            </div>
          </div>
          <figure
            class="img-box is-hidden-mobile is-hidden-tablet-only is-fullwidth"
          >
            <img class="img-fluid back-img" src="../assets/pattern.png" />
            <img class="img-fluid main-img" src="../assets/timbet 2.png" />
          </figure>
          <div id="section10" class="demo is-hidden-mobile">
            <a href="#about" v-smooth-scroll="{ duration: 2000, offset: -50 }"
              ><span></span>Scroll</a
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>
<style lang="scss" scoped>
.container {
  backface-visibility: hidden;
}
.anim-icon {
  padding: 10px;
  animation: downloadIcon 2s infinite !important;
}
@keyframes downloadIcon {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    transform: translate(0, 5px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.head-anim1 {
  animation-name: slideLeft;
  animation-duration: 1s;
  animation-timing-function: ease-in;
}

@keyframes slideLeft {
  0% {
    transform: translateX(-2rem);
    opacity: 0;
  }

  80% {
    transform: translateX(1rem);
  }

  100% {
    transform: translate(0);
    opacity: 1;
  }
}
.head-anim2 {
  animation-name: slideRight;
  animation-duration: 1s;
  animation-timing-function: ease-in;
}
@keyframes slideRight {
  0% {
    transform: translateX(2rem);
    opacity: 0;
  }

  80% {
    transform: translateX(-1rem);
  }

  100% {
    transform: translate(0);
    opacity: 1;
  }
}

.social-networks {
  margin: 0 0 35px;
  padding: 0;

  li {
    display: inline-block;
  }

  a {
    display: inline-block;
    position: relative;
    margin: 0 7px;
    width: 68px;
    height: 68px;
    font-size: 0;

    text-align: center;
    text-decoration: none;

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      margin-top: -50%;
      margin-left: -50%;
      border-radius: 100px;

      transition: all 400ms;
    }

    &:after {
      position: relative;
      display: block;
      font-family: "icomoon";

      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
      color: #fff;
      font-size: 26px;
      line-height: 66px;
    }

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }

  &.spin-icon a:hover:after,
  &.spin-icon a:focus:after {
    transition: transform 0.4s ease-out;
    transform: rotateZ(360deg);
  }

  &.square a:hover:before,
  &.square a:focus:before {
    border-radius: 0;
  }

  &.bounce a:hover,
  &.bounce a:focus {
    animation: bounce 1s;
  }

  $networks: linkedin "\eac9"#0077b5, facebook "\e603"#3b5998,
    twitter "\e618"#00b0ed, github "\eab1"#4183c4, instagram "\e604"#3f729b,
    vimeo "\ea9c"#1ab7ea, twitch "\ea9b"#6441a5, pinterest "\e605"#cc2127;

  @each $network in $networks {
    .icon-#{nth($network, 1)} {
      &:after {
        content: "#{nth($network, 2)}";
      }

      &:hover:before,
      &:focus:before {
        background: nth($network, 3);
      }
    }
  }
}
@keyframes bounce {
  0%,
  20%,
  53%,
  80%,
  100% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40% {
    transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -6px, 0);
  }

  70% {
    transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -4px, 0);
  }

  90% {
    transform: translate3d(0, -2px, 0);
  }
}
</style>
<style scoped>
.parallaxx {
  background-color: white;
  /* Set a specific height */
  height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.container {
  z-index: 1;
}
.img-box {
  width: 45%;
  height: 80%;
  position: absolute;
  bottom: 0;
  right: 0px;
}
.img-box img {
  height: 100%;
  position: absolute;
  left: 50%;
  bottom: 0;

  transform: translate(-50%);
  transition: bottom 1s, left 1s;
}
.img-box:hover .back-img {
  bottom: 40px;
}
.img-box:hover .main-img {
  left: 54%;
}
.social-links {
  margin-top: 100px;
}
.social-links a {
  font-size: 30px;
  color: #606163;
  margin-right: 20px;
}
.social-links a:hover {
  color: teal;
  transition: ease-out 1s;
  transform: scale(1.5);
}
/* .hero.is-fullheight-with-navbar, .is-fullheight-with-navbar.hero-home {
    min-height: calc(79vh - 3.25rem) !important;
} */

#section10 a {
  padding-top: 60px;
}
#section10 a span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 30px;
  height: 50px;
  margin-left: -15px;
  border: 2px solid black;
  border-radius: 50px;
  box-sizing: border-box;
}
#section10 a span::before {
  position: absolute;
  top: 10px;
  left: 50%;
  content: "";
  width: 6px;
  height: 6px;
  margin-left: -3px;
  background-color: black;
  border-radius: 100%;
  -webkit-animation: sdb10 2s infinite;
  animation: sdb10 2s infinite;
  box-sizing: border-box;
}
@-webkit-keyframes sdb10 {
  0% {
    -webkit-transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    -webkit-transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sdb10 {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
.demo a {
  position: absolute;
  bottom: 20px;
  left: 50%;
  z-index: 2;
  display: inline-block;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: black;
  font: normal 400 20px/1 "Josefin Sans", sans-serif;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: opacity 0.3s;
}
.demo a:hover {
  opacity: 0.5;
}

/* Download box shape  */
.buttonDownload:before {
  width: 10px;
  height: 2px;
  border-style: solid;
  border-width: 0 2px 2px;
}
</style>
