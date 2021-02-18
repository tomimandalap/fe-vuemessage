<template>
  <div class="container d-flex flex-wrap justify-content-center">
    <section class="font-rubik p-5 box-body" style="background: #fff">
      <div class="row">
        <div class="col-1">
          <span @click="btnBack()" class="arrow-back"
            ><i class="fas fa-chevron-left"></i
          ></span>
        </div>
        <div class="col-10">
          <h5 class="text-center cf-second">Register</h5>
        </div>
      </div>
      <p class="mt-4">Let’s create your account!</p>
      <form
        action=""
        class="row justify-content-center"
        @submit.prevent="btnRegister()"
      >
        <label for="form-name" class="col-12 colorLabel mt-2">Name</label>
        <input
          v-model="formRegister.name"
          type="text"
          class="col-12 inputBorder pt-2 pb-2"
          id="form-name"
          placeholder="Name"
          required
        />
        <label for="form-email" class="col-12 colorLabel mt-4">Email</label>
        <input
          v-model="formRegister.email"
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
          v-model="formRegister.password"
          type="password"
          class="col-12 inputBorder pt-2 pb-2"
          id="form-password"
          placeholder="Password"
          minlength="8"
          required
        />
        <button type="submit" class="btn-custom cf-white w-100 p-3 mt-5">
          Register
        </button>
      </form>
      <div class="row justify-content-center">
        <div class="col-12">
          <p class="colorLabel text-center mt-4">Register with</p>
        </div>
        <button
          @click="btnGoogle()"
          class="btn-outcustom cf-second w-100 p-3 mt-2"
        >
          <i class="fab fa-google"></i> Google
        </button>
      </div>
    </section>
  </div>
</template>
<script>
import mixins from '../helpers/mixin'
import { mapActions } from 'vuex'
export default {
  name: 'Register',
  mixins: [mixins],
  data () {
    return {
    }
  },
  methods: {
    ...mapActions({
      registerUsers: 'users/registerUsers'
    }),
    btnRegister () {
      this.swalLoading('Register')
      this.registerUsers(this.formRegister).then((response) =>{
        if (response === 'Email registered') {
          this.swalLoadingClose()
          this.alertModif('info', response)
        } else {
          this.swalLoadingClose()
          this.alertModif('success', response)
          this.$router.push('/login')
        }
      }).catch((err) => {
        this.swalLoadingClose()
        this.alertModif('error', err)
      })
    },
    btnGoogle () {
      this.alertModif('info', 'Register with Google')
    },
    btnBack () {
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
span.arrow-back {
  color: #2675ec;
  cursor: pointer;
}

section.box-body {
  width: 50%;
  height: 730px;
  background: #fff;
  margin: 80px 0;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
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
