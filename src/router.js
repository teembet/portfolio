import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue"
import About from "./views/About.vue"
import Contact from "./views/Contact.vue"
import Projects from "./views/Projects.vue"
Vue.use(Router);

export default new Router({
    mode:"hash",
    routes:[
        {
            path: "/",
            name:"home",
            component:Home
        },

        {
            path:"/about",
            name:"about",
            component:About
        },
        {
            path:"/contact",
            name:"contact",
            component:Contact
        },
        {
            path:"/projects",
            name:"projects",
            component:Projects
        }
        
    ]
});