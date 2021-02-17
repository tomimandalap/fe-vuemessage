<template>
  <div class="container">
    <h3>Room ID : {{ roomID }}</h3>
    <h3>Name : {{ userName }}</h3>
    <h3>ID : {{ userID }}</h3>
    <h3>token: {{ token }}</h3>
  </div>
</template>

<script>
// import io from 'socket.io-client'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      roomID: 'users/getRoomID',
      userName: 'users/getName',
      userID: 'users/getIDUser',
      token: 'users/getToken'
    })
  }
}
</script>
