import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Forgot from '../views/ForgotPassword.vue'
import store from '../store/index'
import Swal from 'sweetalert2'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {auth: true}
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {auth: false}
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {auth: false}
  },
  {
    path: '/forgotpassword',
    name: 'Forgot',
    component: Forgot,
    meta: {auth: false}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(to.matched[0].meta.auth)
  // console.log(store.getters['users/getToken'])
  if (to.matched[0].meta.auth === true) {
    if (store.getters['users/getToken']) {
      next()
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'warning',
        title: 'You are not logged in!'
      })
      // goto page login
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router
