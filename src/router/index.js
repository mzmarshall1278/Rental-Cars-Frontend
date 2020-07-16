import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import cars from '../views/Cars.vue'
import singleCar from '../views/SingleCar.vue'
import singleCompany from '../views/SingleCompany.vue'
import login from '../views/Login.vue'
import signup from '../views/Signup.vue'
import bookings from '../views/Bookings.vue'
import booking from '../views/SingleBooking.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cars',
    name: 'cars',
    component: cars
  },
  {
    path: '/cars/:comp',
    name: 'company',
    component: singleCompany,
    props: true
  },
  {
    path: '/cars/:comp/:id',
    name: 'car',
    component: singleCar,
    props: true
  },
  {
    path: '/auth/login',
    name: 'login',
    component: login,
  },
  {
    path: '/auth/signup',
    name: 'signup',
    component: signup,
  },
  {
    path: '/bookings/',
    name: 'bookings',
    component: bookings,
  },
  {
    path: '/bookings/:id',
    name: 'booking',
    component: booking,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
