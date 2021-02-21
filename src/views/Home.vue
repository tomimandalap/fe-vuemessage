<template>
  <div class="container d-flex flex-wrap justify-content-center">
    <section class="font-rubik p-5 box-body">
      <h2 class="text-center f-scope cf-second font-weight-bold">
        Welcome to Telegram-Vue
      </h2>
      <div class="text-center mt-3">
        <router-link
          class="font-weight-bold cf-second tx-none text-center mt-5"
          to="/login"
        >
          Login
        </router-link>
        ||
        <router-link
          class="font-weight-bold cf-second tx-none text-center mt-3"
          to="/register"
        >
          Register
        </router-link>
        ||
        <a
          class="font-weight-bold cf-second tx-none text-center mt-3"
          href="https://github.com/tomimandalap"
          >gitHub</a
        >
      </div>
      <footer class="font-rubik f-size text-center colorLabel mt-5">
        <p>&copy; created by Tomi Mandala Putra (2021)</p>
      </footer>
    </section>
  </div>
</template>
<style scoped>
.f-scope {
  font-size: 25px;
}

section.box-body {
  width: 50%;
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
