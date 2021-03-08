<template>
  <div class="card-body cs-card mobile">
    <div
      v-b-toggle.display-chating
      v-for="(e, i) in users"
      :key="i"
      class="row box-list mb-2"
      @click="getListChat(e)"
    >
      <div class="col-3 col-sm-3 col-md-3 col-lg-3 mt-2">
        <img
          class="img-profile-list"
          :src="`${webURL}/image/${e.image}`"
          alt="profile"
        />
      </div>
      <div class="col-5 col-sm-5 col-md-5 col-lg-5 mt-3 font-rubik float-left">
        <p class="f-normal font-weight-bold">{{ e.name }}</p>
        <p class="f-normal font-font-weight-normal cf-second mt-n2">Hai?</p>
      </div>
      <div class="col-4 col-sm-4 col-md-4 col-lg-4 mt-3 font-rubik text-right">
        <p class="colorLabel f-normal">4:20</p>
        <p class="notif cf-white mt-n3 float-right">10</p>
      </div>
    </div>
  </div>
</template>
