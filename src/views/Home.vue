<template>
  <div class="container d-flex flex-wrap justify-content-center">
    <section class="font-rubik p-5 box-body">
      <h2 class="text-center cf-second font-weight-bold">
        Welcome to Vue Messager
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
section.box-body {
  width: 50%;
  background: #fff;
  margin: 80px 0;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
}
</style>
