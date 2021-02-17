<template>
  <div class="container d-flex flex-wrap justify-content-center">
    <section class="font-rubik p-5 box-body">
      <h5 class="text-center cf-second">Login</h5>
      <p class="mt-4">Hi, Welcome back!</p>
      <form
        action=""
        class="row justify-content-center"
        @submit.prevent="btnLogin()"
      >
        <label for="form-email" class="col-12 colorLabel mt-4">Email</label>
        <input
          v-model="formLogin.email"
          type="email"
          class="col-12 inputBorder pt-2 pb-2"
          id="form-email"
          placeholder="Email"
          required
        />
        <label for="form-password" class="col-12 colorLabel mt-4"
          >Password</label
        >
        <input
          v-model="formLogin.password"
          type="password"
          class="col-12 inputBorder pt-2 pb-2"
          id="form-password"
          placeholder="Password"
          minlength="8"
          required
        />
        <router-link
          class="col-12 cf-second tx-none text-right mt-5"
          to="/forgotpassword"
          >Forgot password?</router-link
        >
        <button type="submit" class="btn-custom cf-white w-100 p-3 mt-5">
          Login
        </button>
      </form>
      <div class="row justify-content-center">
        <div class="col-12">
          <p class="colorLabel text-center mt-4">Login with</p>
        </div>
        <button
          @click="btnGoogle()"
          class="btn-outcustom cf-second w-100 p-3 mt-2"
        >
          <i class="fab fa-google"></i> Google
        </button>
        <div class="col-12 mt-4">
          <p class="text-center">
            Don’t have an account?
            <router-link class="cf-second tx-none" to="/register"
              >Sign Up</router-link
            >
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import mixins from '../helpers/mixin'
import { mapActions } from 'vuex'
export default {
  mixins: [mixins],
  data () {
    return {
    }
  },
  methods: {
    ...mapActions({
      loginUsers: 'users/loginUsers'
    }),
    btnLogin () {
      this.swalLoading('Login')
      this.loginUsers(this.formLogin).then((response) => {
        if (response === 'Email not found!') {
          this.swalLoadingClose()
          this.alertModif('warning', response)
        } else if (response === 'Login failed, password wrong!') {
          this.swalLoadingClose()
          this.alertModif('info', response)
        } else {
          this.swalLoadingClose()
          this.alertModif('success', response)
          this.$router.push('/')
        }
      }).catch((err) => {
        this.swalLoadingClose()
        this.alertModif('error', err)
      })
    },
    btnGoogle () {
      this.alertModif('info', 'Login with Google')
    }
  }
}
</script>
<style scoped>
section.box-body {
  width: 50%;
  height: 730px;
  background: #fff;
  margin: 80px 0;
}

@media (min-width: 768px) and (max-width: 991px) {
  section.box-body {
    width: 60%;
  }
}

@media (min-width: 577px) and (max-width: 767px) {
  section.box-body {
    width: 85%;
    font-size: 14px;
  }
}

@media (max-width: 576px) {
  section.box-body {
    width: 85%;
    font-size: 14px;
  }
}
</style>
