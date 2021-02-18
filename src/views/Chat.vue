<template>
  <div class="row">
    <div class="col-8 col-sm-7 col-md-6 col-lg-3">
      <div class="card border-none">
        <div class="card-header border-none bg-white">
          <div class="row mt-2">
            <div class="col-6">
              <h6 class="font-rubik cf-second font-weight-bold mt-1">
                Vue Message
              </h6>
            </div>
            <div class="col-6">
              <span
                v-show="state === true"
                @click="signout()"
                class="checkout cf-second ml-5"
                ><i class="fas fa-sign-out-alt"></i
              ></span>
              <span @click="btnMenuBar()" class="cf-second float-right bt-bars"
                ><i class="fas fa-bars"></i
              ></span>
            </div>
          </div>
          <!-- profile -->
          <div v-show="state === true" class="row text-center mt-4">
            <div class="col-12">
              <div v-if="detailUser.image === undefined">
                <img
                  @click="cProfile()"
                  class="img-profile"
                  :src="`${webURL}/image/default.png`"
                  alt="profile"
                />
              </div>
              <div v-else>
                <img
                  @click="cProfile()"
                  class="img-profile"
                  :src="`${webURL}/image/${detailUser.image}`"
                  alt="profile"
                />
              </div>
              <!-- modal -->
              <b-modal ref="my-modal" hide-footer title="Update Profile">
                <div class="d-block text-left">
                  <form action="" @submit.prevent="btnUpdate()">
                    <label for="form-name" class="font-rubik colorLabel"
                      >Name</label
                    >
                    <input
                      v-model="formUser.name"
                      class="font-rubik inputBorder p-1 w-100"
                      type="text"
                      placeholder="Name"
                      id="form-name"
                      required
                    />
                    <label for="form-email" class="font-rubik colorLabel mt-3"
                      >Email</label
                    >
                    <input
                      v-model="formUser.email"
                      class="font-rubik inputBorder p-1 w-100"
                      type="email"
                      placeholder="Email"
                      id="form-email"
                      required
                    />
                    <input
                      @change="processFile($event)"
                      class="font-rubik mt-3 p-1 w-100"
                      type="file"
                    />
                    <button
                      type="submit"
                      class="btn-custom cf-white font-rubik w-100 p-2 mt-4"
                    >
                      Update
                    </button>
                  </form>
                </div>
                <button
                  @click="btnCancel()"
                  class="btn-outcustom font-rubik w-100 p-2 mt-4"
                >
                  Cancel
                </button>
              </b-modal>
              <!-- end modal -->
            </div>
            <div class="col-12 font-rubik">
              <h5 class="font-weight-bolder mt-4">{{ formUser.name }}</h5>
            </div>
            <div class="col-12 font-rubik">
              <p class="f-normal colorLabel">{{ formUser.email }}</p>
            </div>
          </div>
          <!-- search -->
          <div class="row mt-4">
            <div class="col-10 input-group-prepend">
              <span
                @click="btnSearch()"
                class="bg-second border-style colorLabel p-2 pl-3"
                ><i class="fas fa-search"></i
              ></span>
              <input
                type="text"
                class="input-border bg-second f-size w-100 p-2"
                placeholder="Type your message..."
                required
              />
            </div>
            <div class="col-2">
              <span @click="btnPlus()" class="cf-second float-right mt-2"
                ><i class="fas fa-plus"></i
              ></span>
            </div>
          </div>
          <!-- sort -->
          <div class="row font-rubik font-weight-bold mt-4">
            <div class="col-3">
              <span class="f-normal">All</span>
            </div>
            <div class="col-5">
              <span class="f-normal aciteve">Important</span>
            </div>
            <div class="col-4">
              <span class="f-normal">Unread</span>
            </div>
          </div>
        </div>
        <!-- conten -->
        <div class="card-body cs-card">
          <div
            v-for="(e, i) in users"
            :key="i"
            class="row box-list mb-2"
            @click="getListChat(e)"
          >
            <div class="col-3 mt-2">
              <img
                class="img-profile-list"
                :src="`${webURL}/image/${e.image}`"
                alt="profile"
              />
            </div>
            <div class="col-6 mt-3 font-rubik">
              <p class="f-normal font-weight-bold">{{ e.name }}</p>
              <p class="f-normal font-font-weight-normal cf-second mt-n2">
                Hai, apa kabar?
              </p>
            </div>
            <div class="col-3 mt-3 font-rubik text-right">
              <p class="colorLabel">15:20</p>
              <p class="notif cf-white mt-n3 float-right">09</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- chating header -->
    <div v-if="to.length > 0" class="col-4 col-sm-5 col-md-6 col-lg-9">
      <div class="card-body bg-white box-header">
        <div class="container row">
          <div class="col-1">
            <img
              class="img-profile-list"
              :src="`${webURL}/image/${to_img}`"
              :alt="{ to_img }"
            />
          </div>
          <div class="col-9 text-left font-rubik">
            <p class="font-weight-bolder mt-2">{{ to }}</p>
            <p class="f-size cf-second mt-n2">Online</p>
          </div>
          <div class="col-2 text-right">
            <span class="cf-second f-icon"
              ><i class="fas fa-th-large"></i
            ></span>
          </div>
        </div>
      </div>
      <!-- chating body -->
      <div v-if="chat.length > 0" class="card-body box-chat">
        <div v-for="(el, idx) in chat" :key="idx" class="mt-4 mb-5">
          <div v-if="el.from_name !== formUser.name" class="row">
            <div class="col-1">
              <img
                class="img-profile-list"
                :src="`${webURL}/image/${el.from_image}`"
                :alt="{ to_img }"
              />
            </div>
            <div class="col-5">
              <p class="font-rubik f-normal cf-white bg-you">
                {{ el.message }}
              </p>
              <small class="font-rubik f-normal font-weight-bold float-right">{{
                el.date.substring(11, 16)
              }}</small>
            </div>
            <div class="col-6"></div>
          </div>
          <div v-else class="row">
            <div class="col-6"></div>
            <div class="col-1">
              <img
                class="img-profile-list"
                :src="`${webURL}/image/${el.from_image}`"
                :alt="{ to_img }"
              />
            </div>
            <div class="col-5">
              <p class="font-rubik f-normal cf-white bg-you">
                {{ el.message }}
              </p>
              <small class="font-rubik f-normal font-weight-bold float-right">{{
                el.date.substring(11, 16)
              }}</small>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="card-body box-chat">
        <p class="font-rubik colorLabel text-center t-blank">
          Please select a chat to start messaging
        </p>
      </div>
      <!-- chating footer -->
      <div class="card-footer bg-white box-footer">
        <div class="container row p-2">
          <div class="col-10">
            <form action="" @submit.prevent="sendChat()">
              <input
                v-model="msg"
                class="font-rubik f-normal bg-custom border-custom p-2 w-100"
                type="text"
                placeholder="Type your message"
              />
            </form>
          </div>
          <div class="col-2 bg-custom border-custom text-center cf-second p-1">
            <span @click="addChat()" class="f-icon-chat"
              ><i class="fas fa-plus"></i
            ></span>
            <span @click="addEmot()" class="f-icon-chat ml-3 mr-3"
              ><i class="fas fa-surprise"></i
            ></span>
            <span @click="addImage()" class="f-icon-chat"
              ><i class="fas fa-camera"></i
            ></span>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="col-4 col-sm-5 col-md-6 col-lg-9 overflow-auto">
      <p class="font-rubik colorLabel text-center t-blank">
        Please select a chat to start messaging
      </p>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
import { mapGetters, mapActions } from 'vuex'
import mixins from '../helpers/mixin'
export default {
  mixins: [mixins],
  data () {
    return {
      state: false,
      socket: io('http://localhost:4000'),
      users: [],
      from: '',
      to: '',
      to_id: '',
      to_img: '',
      chat: [],
      msg: ''
    }
  },
  computed: {
    ...mapGetters({
      detailUser: 'users/getUserDetail',
      RoomID: 'users/getRoomID',
      nameUser: 'users/getName',
      idUser : 'users/getIDUser'
    })
  },
  methods: {
    ...mapActions({
      actionDetailUser: 'users/detailUser',
      updateUser: 'users/updateUser',
      logout: 'users/logoutUser'
    }),
    joinRoom () {
      this.socket.emit('join-room', this.RoomID)
    },
    getListUsers () {
      const data = {
        id: this.idUser,
        room_id: this.RoomID
      }
      this.socket.emit('get-list-users', data)
    },
    resGetListUsers () {
      this.socket.on('res-get-list-users', (users) => {
        users.forEach((e) => {
          this.users.push({
            id: e.id,
            name: e.name,
            room_id: e.room_id,
            image: e.image,
            status: e.status
          })
        })
      })
    },
    getListChat (data) {
      this.from = this.idUser
      this.to = data.name
      this.to_img = data.image
      this.to_id = data.id
      this.socket.emit('get-list-chat', {from: this.idUser, to: data.id, room_id: this.RoomID})
    },
    resGetListChat () {
      this.socket.on('res-get-list-chat', (chat) => {
        // console.log(chat)
        this.chat = chat
      })
    },
    sendChat () {
      const data = {
        from: this.idUser,
        to: this.to_id,
        msg: this.msg
      }
      this.socket.emit('send-message', data)
      this.msg = ''
    },
    addChat () {
      alert('add Items chat')
    },
    addEmot () {
      alert('add Emot')
    },
    addImage () {
      alert('add Images')
    },
    btnMenuBar () {
      this.state = !this.state
    },
    cProfile () {
      this.$refs['my-modal'].show()
    },
    processFile (el) {
      this.formUser.image = el.target.files[0]
    },
    btnUpdate () {
      // console.log(this.formUser)
      this.swalLoading('Update')
      const fd = new FormData()
      fd.append('name', this.formUser.name)
      fd.append('email', this.formUser.email)
      fd.append('image', this.formUser.image)
      // console.log(fd)
      this.updateUser(fd).then((response) => {
        this.$refs['my-modal'].hide()
        if (response == 'Please select an image to upload') {
          this.swalLoadingClose()
          this.alertModif('warning', 'Please select an image to upload!')
        } else if (response == 'Wrong type extention! Please upload like png or jpg') {
          this.swalLoadingClose()
          this.alertModif('warning', 'Please upload like png or jpg')
        } else if (response == 'File size exceeds the 1 Mb limit') {
          this.swalLoadingClose()
          this.alertModif('warning', 'Oops, maximum size 1 Mb')
        } else {
          this.swalLoadingClose()
          this.actionDetailUser()
          this.alertModif('success', response)
        }
      }).catch((err) => {
        this.swalLoadingClose()
        console.log(err)
      })
    },
    btnCancel () {
      this.$refs['my-modal'].hide()
      this.actionDetailUser().then((response) => {
        this.formUser.name = response.name
        this.formUser.email = response.email
        this.formUser.image = response.image
      })
    },
    signout () {
      this.state = false
      this.logout().then((response) => {
        this.alertModif('success', 'Logout Success')
        if (response) {
          this.$router.push('/login')
        }
      })
    },
    btnSearch () {
      this.alertModif('info', 'SEARCH')
    },
    btnPlus () {
      this.alertModif('info', 'Plus')
    }
  },
  mounted () {
    this.joinRoom()
    this.getListUsers()
    this.resGetListUsers()
    this.resGetListChat()
    this.actionDetailUser().then((response) => {
      this.formUser.name = response.name
      this.formUser.email = response.email
      this.formUser.image = response.image
    })
  }
}
</script>
<style scoped>
div.cs-card {
  width: 100%;
  height: 78vh;
  /* overflow-x: hidden !important;
  overflow: scroll; */
}

span.bt-bars {
  cursor: pointer;
}

span.checkout {
  font-size: 14px;
  border: none;
  cursor: pointer;
}

.f-normal {
  font-size: 14px;
}

span.aciteve {
  padding: 8px 10px;
  color: #fff;
  background: #7e98df;
  border: none;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

div.box-list {
  height: 15%;
  border-top: 1px solid #eee;
  cursor: pointer;
}

div.box-header {
  height: 6rem;
  margin-left: -1.9em;
}

div.box-chat {
  height: 77vh;
  overflow-x: hidden !important;
  overflow: scroll;
}

div.box-footer {
  height: 5rem;
  margin-left: -1.9em;
}
</style>
