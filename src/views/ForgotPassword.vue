<template>
  <div class="container d-flex flex-wrap justify-content-center">
    <section class="font-rubik p-5 box-body">
      <div class="row">
        <div class="col-1">
          <span @click="btnBack()" class="arrow-back"
            ><i class="fas fa-chevron-left"></i
          ></span>
        </div>
        <div class="col-10">
          <h5 class="text-center cf-second">Forgot Password</h5>
        </div>
      </div>
      <p class="mt-4">You’ll get messages soon on your e-mail</p>
      <form
        action=""
        class="row justify-content-center"
        @submit.prevent="btnForgot()"
      >
        <label for="form-email" class="col-12 colorLabel mt-4">Email</label>
        <input
          v-model="formForgot.email"
          type="email"
          class="col-12 inputBorder pt-2 pb-2"
          id="form-email"
          placeholder="Email"
          required
        />
        <button type="submit" class="btn-custom cf-white w-100 p-3 mt-5">
          Send
        </button>
      </form>
    </section>
  </div>
</template>
<script>
import mixins from '../helpers/mixin'
export default {
  mixins: [mixins],
  methods: {
    btnForgot () {
      // console.log(this.formForgot)
      this.alertPopUp('info', '', 'This page is not yet available')
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
