<template>
  <div class="row">
    <div class="col-sm-5 col-md-4 col-lg-3">
      <div class="card border-none">
        <div class="card-header border-none bg-white mb-n3">
          <!-- header -->
          <div class="row mt-2">
            <div class="col-6">
              <h6 class="font-rubik cf-second font-weight-bold mt-1">
                Telegram
              </h6>
            </div>
            <!-- web version -->
            <div class="col-6 web">
              <span
                @click="broadcast()"
                v-show="state === true"
                class="checkout cf-second fl-mobile ml-3 mr-3"
              >
                <i class="fas fa-bullhorn"></i>
              </span>
              <span
                v-show="state === true"
                @click="signout()"
                class="checkout cf-second"
                ><i class="fas fa-sign-out-alt"></i
              ></span>
              <!-- @click="btnMenuBar()" -->
              <span v-b-toggle.sidebar-1 class="cf-second float-right bt-bars"
                ><i class="fas fa-bars"></i
              ></span>
            </div>
            <!-- mobile version -->
            <div class="col-6 mobile text-right">
              <span
                @click="broadcast()"
                v-show="state === true"
                class="checkout cf-second ml-3 mr-3"
              >
                <i class="fas fa-bullhorn"></i>
              </span>
              <span
                v-show="state === true"
                @click="signout()"
                class="checkout cf-second mr-4"
                ><i class="fas fa-sign-out-alt"></i
              ></span>
              <!-- @click="btnMenuBar()" -->
              <span v-b-toggle.sidebar-1 class="cf-second float-right bt-bars"
                ><i class="fas fa-bars"></i
              ></span>
            </div>
          </div>
          <!-- modal broadcast -->
          <b-modal ref="my-modal" hide-footer title="Broadcast">
            <div class="row font-rubik text-left">
              <div class="col-12">
                <!-- <h5 class="f-title colorLabel">Message</h5> -->
                <label for="form-broadcast" class="f-title colorLabel"
                  >Message</label
                >
              </div>
              <div class="col-12">
                <form action="" @submit.prevent="sendBroadcast()">
                  <textarea
                    v-model="msgBroadcast"
                    name=""
                    id="form-broadcast"
                    cols="50"
                    rows="5"
                    placeholder="Send message"
                  ></textarea>
                  <button
                    type="submit"
                    class="btn-custom cf-white font-rubik w-100 p-2 mt-4"
                  >
                    Send Broadcast
                  </button>
                </form>
              </div>
            </div>
            <button
              @click="closeBroadcast()"
              type="submit"
              class="btn-outcustom font-rubik w-100 p-2 mt-3 mb-3"
            >
              Cancel
            </button>
          </b-modal>
          <!-- profile -->
          <!-- <div v-show="state === true" class="row text-center mt-4">
            <div class="col-12">
              <div v-if="detailUser.image === undefined">
                <img
                  v-b-toggle.sidebar-1
                  class="img-profile"
                  :src="`${webURL}/image/default.png`"
                  alt="profile"
                />
              </div>
              <div v-else>
                <img
                  v-b-toggle.sidebar-1
                  class="img-profile"
                  :src="`${webURL}/image/${detailUser.image}`"
                  alt="profile"
                />
              </div>
            </div>
            <div class="col-12 font-rubik">
              <h5 class="font-weight-bolder mt-4">{{ formUser.name }}</h5>
            </div>
            <div class="col-12 font-rubik">
              <p class="f-normal colorLabel">{{ formUser.email }}</p>
            </div>
          </div> -->
          <!-- side bar -->
          <b-sidebar id="sidebar-1" title="Profile" shadow bg-variant="white">
            <template #default="{ hide }">
              <div class="container">
                <!-- title -->
                <div class="row">
                  <div class="col-1">
                    <span @click="hide" class="arrow-back f-title"
                      ><i class="fas fa-chevron-left"></i
                    ></span>
                  </div>
                  <div class="col-10 font-rubik text-center">
                    <p class="f-title cf-second">{{ formUser.email }}</p>
                  </div>
                </div>
                <!-- profile -->
                <div class="row text-center">
                  <div class="col-12">
                    <div v-if="detailUser.image === undefined">
                      <img
                        class="img-profile-edit"
                        :src="`${webURL}/image/default.png`"
                        alt="profile"
                      />
                    </div>
                    <div v-else>
                      <img
                        class="img-profile-edit"
                        :src="`${webURL}/image/${detailUser.image}`"
                        alt="profile"
                      />
                    </div>
                  </div>
                  <div class="col-12 mt-2">
                    <small
                      v-b-toggle.sidebar-2
                      class="font-rubik pointer cf-second"
                      >Edit Profile</small
                    >
                  </div>
                  <div class="col-12 font-rubik">
                    <h5 class="font-weight-bolder mt-1">
                      {{ formUser.name }}
                    </h5>
                  </div>
                  <div class="col-12 font-rubik">
                    <p class="f-normal colorLabel">{{ formUser.email }}</p>
                  </div>
                </div>
                <!-- account -->
                <div class="row font-rubik text-left">
                  <div class="col-12">
                    <h5 class="f-custom font-weight-bolder">Account</h5>
                  </div>
                  <div class="col-12 mt-2">
                    <h6 class="f-normal">{{ formUser.account }}</h6>
                  </div>
                  <div class="col-12">
                    <small class="cf-second">Tap to change phone number</small>
                  </div>
                </div>
                <!-- username -->
                <div class="row line mt-3">
                  <div class="col-12 font-rubik mt-2">
                    <p class="f-normal font-weight-bold">
                      {{ formUser.email }}
                    </p>
                  </div>
                  <div class="col-12 font-rubik mt-n3 mb-n2">
                    <p class="f-normal colorLabel">username</p>
                  </div>
                </div>
                <!-- biodata -->
                <div class="row mt-3">
                  <div class="col-12">
                    <p class="f-normal font-weight-bold">
                      {{ formUser.biodata }}
                    </p>
                  </div>
                  <div class="col-12 font-rubik mt-n2">
                    <p class="f-normal colorLabel">Bio</p>
                  </div>
                </div>
                <!-- setting -->
                <div class="row mt-1">
                  <div class="col-12">
                    <p class="f-custom font-weight-bold">Settings</p>
                  </div>
                  <div class="col-1">
                    <span class="font-rubik f-title"
                      ><i class="far fa-bell"></i
                    ></span>
                  </div>
                  <div class="col-10">
                    <p class="f-normal font-rubik">Notification and Sounds</p>
                  </div>
                  <div class="col-1">
                    <span class="font-rubik f-title"
                      ><i class="fas fa-unlock-alt"></i
                    ></span>
                  </div>
                  <div class="col-10">
                    <p class="f-normal font-rubik">Privaty and Security</p>
                  </div>
                  <div class="col-1">
                    <span class="font-rubik f-title"
                      ><i class="fas fa-chart-line"></i
                    ></span>
                  </div>
                  <div class="col-10">
                    <p class="f-normal font-rubik">Data and Stronge</p>
                  </div>
                  <div class="col-1">
                    <span class="font-rubik f-title"
                      ><i class="far fa-file-alt"></i
                    ></span>
                  </div>
                  <div class="col-10">
                    <p class="f-normal font-rubik">Chat settings</p>
                  </div>
                  <div class="col-1">
                    <span class="font-rubik f-title"
                      ><i class="far fa-square"></i
                    ></span>
                  </div>
                  <div class="col-10">
                    <p class="f-normal font-rubik">Devices</p>
                  </div>
                </div>
              </div>
            </template>
          </b-sidebar>
          <!-- sidebar edit -->
          <b-sidebar id="sidebar-2" shadow bg-variant="white">
            <template #default="{ hide }">
              <div class="container">
                <div class="row">
                  <div class="col-1">
                    <span @click="hide" class="arrow-back f-title"
                      ><i class="fas fa-chevron-left"></i
                    ></span>
                  </div>
                  <div class="col-10 font-rubik text-center">
                    <p class="f-title cf-second">Edit Profile</p>
                  </div>
                </div>
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
                  <label for="form-account" class="font-rubik colorLabel mt-3"
                    >Phone number</label
                  >
                  <input
                    v-model="formUser.account"
                    class="font-rubik inputBorder p-1 w-100"
                    type="text"
                    placeholder="(+62)"
                    id="form-account"
                    required
                  />
                  <label for="form-biodata" class="font-rubik colorLabel mt-3"
                    >Biodata</label
                  >
                  <input
                    v-model="formUser.biodata"
                    class="font-rubik inputBorder p-1 w-100"
                    type="text"
                    placeholder="Biodata"
                    id="form-biodata"
                    required
                  />
                  <label for="form-lat" class="font-rubik colorLabel mt-3"
                    >Latitude</label
                  >
                  <input
                    v-model="formUser.latitude"
                    class="font-rubik inputBorder p-1 w-100"
                    type="text"
                    placeholder="-5.45"
                    id="form-lat"
                    required
                  />
                  <label for="form-long" class="font-rubik colorLabel mt-3"
                    >Longitude</label
                  >
                  <input
                    v-model="formUser.longitude"
                    class="font-rubik inputBorder p-1 w-100"
                    type="text"
                    placeholder="105.267"
                    id="form-long"
                    required
                  />
                  <label for="form-foto" class="font-rubik colorLabel mt-3"
                    >Image</label
                  >
                  <input
                    @change="processFile($event)"
                    class="font-rubik mt-1 p-1 w-100"
                    type="file"
                    id="form-foto"
                  />
                  <div class="row text-left font-rubik mt-3">
                    <div class="col-12">
                      <h5 class="f-custom font-weight-bolder">Location</h5>
                    </div>
                    <div class="col-12">
                      <GoogleMapMaps
                        :center="{
                          lat: formUser.latitude,
                          lng: formUser.longitude,
                        }"
                        :zoom="15"
                        map-type-id="terrain"
                        style="width: 275px; height: 200px"
                      >
                        <GoogleMapMarker
                          :position="{
                            lat: formUser.latitude,
                            lng: formUser.longitude,
                          }"
                        ></GoogleMapMarker>
                      </GoogleMapMaps>
                    </div>
                  </div>
                  <button
                    @click="hide"
                    type="submit"
                    class="btn-custom cf-white font-rubik w-100 p-2 mt-4"
                  >
                    Update
                  </button>
                </form>
                <button
                  @click="btnCancel()"
                  class="btn-outcustom font-rubik w-100 p-2 mt-2 mb-5"
                >
                  Cancel
                </button>
              </div>
            </template>
          </b-sidebar>
          <!-- search -->
          <div class="row mt-4">
            <div class="col-10 input-group-prepend">
              <span
                @click="btnSearch()"
                class="bg-second border-style colorLabel pointer p-2 pl-3"
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
              <span
                v-b-toggle.addFriends
                class="cf-second float-right pointer mt-2"
                ><i class="fas fa-plus"></i
              ></span>
            </div>
          </div>
          <!-- sidebar add friends -->
          <b-sidebar id="addFriends" title="" shadow bg-variant="white">
            <template #default="{ hide }">
              <div class="container">
                <div class="row">
                  <div class="col-1">
                    <span @click="hide" class="arrow-back f-title"
                      ><i class="fas fa-chevron-left"></i
                    ></span>
                  </div>
                  <div class="col-10 font-rubik text-center">
                    <p class="f-title font-weight-bold cf-second">Add Friend</p>
                  </div>
                </div>
                <!-- friend list -->
                <div v-for="(e, i) in users" :key="i" class="row line mb-2">
                  <div class="col-3 mt-1">
                    <img
                      class="img-profile-list"
                      :src="`${webURL}/image/${e.image}`"
                      alt="profile"
                    />
                  </div>
                  <div class="col-6 mt-4 font-rubik">
                    <p class="f-custom font-weight-bold">{{ e.name }}</p>
                  </div>
                  <div class="col-3 mt-3 font-rubik text-right">
                    <span
                      @click="getAddFriend(e)"
                      class="f-title cf-second float-right pointer mt-2"
                      ><i class="fas fa-user-plus"></i
                    ></span>
                  </div>
                </div>
              </div>
            </template>
          </b-sidebar>
          <!-- sort -->
          <div class="row font-rubik text-center font-weight-bold mt-4">
            <div class="col-3">
              <span class="f-size">All</span>
            </div>
            <div class="col-5">
              <span class="f-size active">Important</span>
            </div>
            <!-- aciteve -->
            <div class="col-4">
              <span class="f-size">Unread</span>
            </div>
          </div>
        </div>
        <!-- conten web -->
        <div class="card-body cs-card web">
          <div
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
            <div
              class="col-5 col-sm-5 col-md-5 col-lg-5 mt-3 font-rubik float-left"
            >
              <p class="f-normal font-weight-bold">{{ e.name }}</p>
              <p class="f-normal font-font-weight-normal cf-second mt-n2">
                Hai?
              </p>
            </div>
            <div
              class="col-4 col-sm-4 col-md-4 col-lg-4 mt-3 font-rubik text-right"
            >
              <p class="colorLabel f-normal">4:20</p>
              <p class="notif cf-white mt-n3 float-right">10</p>
            </div>
          </div>
        </div>
        <!-- conten mobile -->
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
            <div
              class="col-5 col-sm-5 col-md-5 col-lg-5 mt-3 font-rubik float-left"
            >
              <p class="f-normal font-weight-bold">{{ e.name }}</p>
              <p class="f-normal font-font-weight-normal cf-second mt-n2">
                Hai?
              </p>
            </div>
            <div
              class="col-4 col-sm-4 col-md-4 col-lg-4 mt-3 font-rubik text-right"
            >
              <p class="colorLabel f-normal">4:20</p>
              <p class="notif cf-white mt-n3 float-right">10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- sidebar chat mobile -->
    <b-sidebar
      id="display-chating"
      title="Chat"
      shadow
      width="100%"
      bg-variant="white"
    >
      <template #default="{ hide }">
        <div v-if="to.length > 0" class="col-12 mobile">
          <div class="card-body bg-white box-header">
            <div class="container row">
              <div class="col-1 mt-3">
                <span @click="hide" class="arrow-back f-title"
                  ><i class="fas fa-chevron-left"></i
                ></span>
              </div>
              <div class="col-3">
                <img
                  v-b-toggle.sidebar-right
                  class="img-profile-list pointer"
                  :src="`${webURL}/image/${to_img}`"
                  :alt="{ to_img }"
                />
              </div>
              <div class="col-7 text-left font-rubik">
                <p class="font-weight-bolder mt-2">{{ to }}</p>
                <p class="f-size cf-second mt-n2">Online</p>
              </div>
            </div>
          </div>
          <!-- sidebar detail friend mobile -->
          <b-sidebar
            id="sidebar-right"
            right
            shadow
            width="100%"
            bg-variant="white"
          >
            <template #default="{ hide }">
              <div class="container">
                <div class="row">
                  <div class="col-1">
                    <span @click="hide" class="arrow-back f-title"
                      ><i class="fas fa-chevron-left"></i
                    ></span>
                  </div>
                  <div class="col-10 font-rubik text-center">
                    <p class="f-title cf-second">{{ detail.email }}</p>
                  </div>
                </div>
                <!-- picture detail -->
                <div class="row text-center mt-3">
                  <div class="col-12">
                    <div v-if="detail.image === undefined">
                      <img
                        class="img-profile-edit"
                        :src="`${webURL}/image/default.png`"
                        alt="profile"
                      />
                    </div>
                    <div v-else>
                      <img
                        class="img-profile-edit"
                        :src="`${webURL}/image/${detail.image}`"
                        alt="profile"
                      />
                    </div>
                  </div>
                </div>
                <!-- names and status detail -->
                <div class="row font-rubik text-left mt-3">
                  <div class="col-12">
                    <h5 class="f-custom font-weight-bolder">
                      {{ detail.name }}
                    </h5>
                  </div>
                  <div class="col-12 mt-2 mt-n1">
                    <h6 class="f-normal">online</h6>
                  </div>
                </div>
                <!-- phone number detail -->
                <div class="row font-rubik text-left mt-3">
                  <div class="col-12">
                    <h5 class="f-custom font-weight-bolder">Phone number</h5>
                  </div>
                  <div class="col-12 mt-2">
                    <h6 class="f-normal">{{ detail.account }}</h6>
                  </div>
                </div>
                <div class="row text-left font-rubik mt-3">
                  <div class="col-12">
                    <h5 class="f-custom font-weight-bolder">Location</h5>
                  </div>
                  <div class="col-12">
                    <GoogleMapMaps
                      :center="{ lat: detail.latitude, lng: detail.longitude }"
                      :zoom="15"
                      map-type-id="terrain"
                      style="width: 330px; height: 200px"
                    >
                      <GoogleMapMarker
                        :position="{
                          lat: detail.latitude,
                          lng: detail.longitude,
                        }"
                      ></GoogleMapMarker>
                    </GoogleMapMaps>
                  </div>
                </div>
              </div>
            </template>
          </b-sidebar>
          <!-- chating body mobile -->
          <div
            v-if="chat.length > 0"
            class="card-body box-chat bg-second-m ml-n2"
          >
            <div v-for="(el, idx) in chat" :key="idx" class="mt-1 mb-3">
              <div v-if="el.from_name !== formUser.name" class="row">
                <div class="col-3">
                  <img
                    class="img-profile-list"
                    :src="`${webURL}/image/${el.from_image}`"
                    :alt="`${el.from_image}`"
                  />
                </div>
                <div class="col-9">
                  <p class="font-rubik f-size cf-white bg-you">
                    {{ el.message }}
                  </p>
                  <small
                    class="font-rubik f-size font-weight-bold float-right"
                    >{{ el.date.substring(11, 16) }}</small
                  >
                </div>
              </div>
              <div v-else class="row">
                <div class="col-9">
                  <p class="font-rubik f-size cf-white bg-you">
                    {{ el.message }}
                  </p>
                  <small
                    class="font-rubik f-size font-weight-bold float-left"
                    >{{ el.date.substring(11, 16) }}</small
                  >
                </div>
                <div class="col-3">
                  <img
                    class="img-profile-list"
                    :src="`${webURL}/image/${el.from_image}`"
                    :alt="`${el.from_image}`"
                  />
                </div>
              </div>
            </div>
          </div>
          <div v-else class="card-body box-chat bg-second-m ml-n2">
            <p class="font-rubik colorLabel text-center t-blank">
              Please select a chat to start messaging
            </p>
          </div>
          <!-- chating footer -->
          <div class="card-footer bg-white box-footer">
            <div class="container row p-2">
              <div class="col-8">
                <form action="" @submit.prevent="sendChat()">
                  <input
                    v-model="msg"
                    class="font-rubik f-normal bg-custom border-custom p-2 w-100"
                    type="text"
                    placeholder="Type your message"
                  />
                </form>
              </div>
              <div
                class="col-4 bg-custom border-custom text-center cf-second p-1"
              >
                <span @click="addChat()" class="f-normal"
                  ><i class="fas fa-plus"></i
                ></span>
                <span @click="addEmot()" class="f-normal ml-3 mr-3"
                  ><i class="fas fa-surprise"></i
                ></span>
                <span @click="addImage()" class="f-normal"
                  ><i class="fas fa-camera"></i
                ></span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </b-sidebar>
    <!-- ===== -->
    <!-- chating header web -->
    <div v-if="to.length > 0" class="col-sm-7 col-md-8 col-lg-9 web">
      <div class="card-body bg-white box-header">
        <div class="container row">
          <div class="col-sm-3 col-md-2 col-lg-1">
            <img
              v-b-toggle.sidebar-right
              class="img-profile-list pointer"
              :src="`${webURL}/image/${to_img}`"
              :alt="{ to_img }"
            />
          </div>
          <div class="col-sm-7 col-md-8 col-lg-9 text-left font-rubik">
            <p class="font-weight-bolder mt-2">{{ to }}</p>
            <p class="f-size cf-second mt-n2">Online</p>
          </div>
          <div class="col-sm-2 col-md-2 col-lg-2 text-right">
            <span class="cf-second f-icon"
              ><i class="fas fa-grip-horizontal"></i
            ></span>
          </div>
        </div>
      </div>
      <!-- sidebar detail friend -->
      <b-sidebar id="sidebar-right" right shadow bg-variant="white">
        <template #default="{ hide }">
          <div class="container">
            <div class="row">
              <div class="col-1">
                <span @click="hide" class="arrow-back f-title"
                  ><i class="fas fa-chevron-left"></i
                ></span>
              </div>
              <div class="col-10 font-rubik text-center">
                <p class="f-title cf-second">{{ detail.email }}</p>
              </div>
            </div>
            <!-- picture detail -->
            <div class="row text-center mt-3">
              <div class="col-12">
                <div v-if="detail.image === undefined">
                  <img
                    class="img-profile-edit"
                    :src="`${webURL}/image/default.png`"
                    alt="profile"
                  />
                </div>
                <div v-else>
                  <img
                    class="img-profile-edit"
                    :src="`${webURL}/image/${detail.image}`"
                    alt="profile"
                  />
                </div>
              </div>
            </div>
            <!-- names and status detail -->
            <div class="row font-rubik text-left mt-3">
              <div class="col-12">
                <h5 class="f-custom font-weight-bolder">{{ detail.name }}</h5>
              </div>
              <div class="col-12 mt-2 mt-n1">
                <h6 class="f-normal">online</h6>
              </div>
            </div>
            <!-- phone number detail -->
            <div class="row font-rubik text-left mt-3">
              <div class="col-12">
                <h5 class="f-custom font-weight-bolder">Phone number</h5>
              </div>
              <div class="col-12 mt-2">
                <h6 class="f-normal">{{ detail.account }}</h6>
              </div>
            </div>
            <div class="row text-left font-rubik mt-3">
              <div class="col-12">
                <h5 class="f-custom font-weight-bolder">Location</h5>
              </div>
              <div class="col-12">
                <GoogleMapMaps
                  :center="{ lat: detail.latitude, lng: detail.longitude }"
                  :zoom="15"
                  map-type-id="terrain"
                  style="width: 300px; height: 200px"
                >
                  <GoogleMapMarker
                    :position="{
                      lat: detail.latitude,
                      lng: detail.longitude,
                    }"
                  ></GoogleMapMarker>
                </GoogleMapMaps>
              </div>
            </div>
          </div>
        </template>
      </b-sidebar>
      <!-- chating body -->
      <div v-if="chat.length > 0" class="card-body box-chat">
        <div v-for="(el, idx) in chat" :key="idx" class="mt-4 mb-5">
          <div v-if="el.from_name !== formUser.name" class="row">
            <div class="col-sm-3 col-md-2 col-lg-1">
              <img
                class="img-profile-list"
                :src="`${webURL}/image/${el.from_image}`"
                :alt="`${el.from_image}`"
              />
            </div>
            <div class="col-sm-9 col-md-5 col-lg-5">
              <p class="font-rubik f-normal cf-white bg-you">
                {{ el.message }}
              </p>
              <small class="font-rubik f-normal font-weight-bold float-right">{{
                el.date.substring(11, 16)
              }}</small>
            </div>
            <div class="col-md-5 col-lg-6"></div>
          </div>
          <div v-else class="row">
            <div class="col-md-5 col-lg-6"></div>
            <div class="col-sm-9 col-md-5 col-lg-5">
              <p class="font-rubik f-normal cf-white bg-you">
                {{ el.message }}
              </p>
              <small class="font-rubik f-normal font-weight-bold float-left">{{
                el.date.substring(11, 16)
              }}</small>
            </div>
            <div class="col-sm-3 col-md-2 col-lg-1">
              <img
                class="img-profile-list"
                :src="`${webURL}/image/${el.from_image}`"
                :alt="`${el.from_image}`"
              />
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
          <div class="col-sm-8 col-md-9 col-lg-10">
            <form action="" @submit.prevent="sendChat()">
              <input
                v-model="msg"
                class="font-rubik f-normal bg-custom border-custom p-2 w-100"
                type="text"
                placeholder="Type your message"
              />
            </form>
          </div>
          <div
            class="col-sm-4 col-md-3 col-lg-2 bg-custom border-custom text-center cf-second p-1"
          >
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
    <div v-else class="col-sm-7 col-md-8 col-lg-9 web overflow-auto">
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
import * as VueGoogleMaps from 'vue2-google-maps'
export default {
  mixins: [mixins],
  data () {
    return {
      state: true,
      socket: io('http://localhost:4000'),
      users: [],
      from: '',
      to: '',
      to_id: '',
      to_img: '',
      chat: [],
      msg: '',
      detail: {},
      msgBroadcast: '',
      listBroadcast: [],
      listFriend: []
    }
  },
  components: {
    GoogleMapMaps: VueGoogleMaps.Map,
    GoogleMapMarker: VueGoogleMaps.Marker
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
            email: e.email,
            status: e.status,
            account: e.account,
            biodata: e.biodata,
            latitude: e.latitude,
            longitude: e.longitude
          })
        })
      })
    },
    getListChat (data) {
      this.detail = data
      this.from = this.idUser
      this.to = data.name
      this.to_img = data.image
      this.to_id = data.id
      this.socket.emit('get-list-chat', {from: this.idUser, to: data.id, room_id: this.RoomID})
    },
    resGetListChat () {
      this.socket.on('res-get-list-chat', (chat) => {
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
    broadcast () {
      this.$refs['my-modal'].show()
    },
    sendBroadcast () {
      const sendData = {
        from: this.idUser,
        msg: this.msgBroadcast
      }
      this.socket.emit('send-broadcast', sendData)
      this.$refs['my-modal'].hide()
      this.msgBroadcast = ''
    },
    // responBroadcast () {
    //   socket.on('res-broadcast', (data) => {
    //     this.listBroadcast = [...this.listBroadcast, data]
    //   })
    // },
    closeBroadcast () {
      this.$refs['my-modal'].hide()
      this.msgBroadcast = ''
    },
    getAddFriend (data) {
      const sts = 1
      const newData = {
        room_id : this.RoomID,
        from_id: this.idUser,
        to_id: data.id,
        status: sts,
        name: data.name,
        email: data.email,
        account: data.account,
        image: data.image,
        biodata: data.biodata,
        latitude: data.latitude,
        longitude: data.longitude
      }
      // console.log(newData)
      this.socket.emit('get-friendship', newData)
    },
    resAddFriend () {
      this.socket.on('res-friendship', (data) => {
        console.log(data)
      })
    },
    getListDB () {
      this.socket.emit('get-list-db', this.RoomID)
    },
    resListDB () {
      this.socket.on('res-list-db', (data) => {
        this.listFriend = data
      })
    },
    addChat () {
      this.alertModif('info', 'Feature not available')
    },
    addEmot () {
      this.alertModif('info', 'The emoticon feature is not available')
    },
    addImage () {
      this.alertModif('info', 'Camera feature not available')
    },
    // btnMenuBar () {
    //   this.state = !this.state
    // },
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
      fd.append('account', this.formUser.account)
      fd.append('biodata', this.formUser.biodata)
      fd.append('latitude', this.formUser.latitude)
      fd.append('longitude', this.formUser.longitude)
      // console.log(fd)
      this.updateUser(fd).then((response) => {
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
          this.alertModif('success', response)
          this.actionDetailUser().then((response) => {
            this.formUser.name = response.name
            this.formUser.email = response.email
            this.formUser.image = response.image
            this.formUser.account = response.account
            this.formUser.biodata = response.biodata
            this.formUser.latitude = response.latitude
            this.formUser.longitude = response.longitude
          })
        }
      }).catch((err) => {
        this.swalLoadingClose()
        console.log(err)
      })
    },
    btnCancel () {
      this.actionDetailUser().then((response) => {
        this.formUser.name = response.name
        this.formUser.email = response.email
        this.formUser.image = response.image
        this.formUser.account = response.account
        this.formUser.biodata = response.biodata
        this.formUser.latitude = response.latitude
        this.formUser.longitude = response.longitude
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
    }
  },
  mounted () {
    this.joinRoom()
    this.getListUsers()
    this.resGetListUsers()
    this.resGetListChat()
    this.resAddFriend()
    this.getListDB()
    this.resListDB()
    this.actionDetailUser().then((response) => {
      this.formUser.name = response.name
      this.formUser.email = response.email
      this.formUser.image = response.image
      this.formUser.account = response.account
      this.formUser.biodata = response.biodata
      this.formUser.latitude = response.latitude
      this.formUser.longitude = response.longitude
      // console.log(response)
    })
  }
}
</script>
<style scoped>
span.arrow-back {
  color: #2675ec;
  cursor: pointer;
}

div.card {
  width: 100%;
}

div.cs-card {
  height: 498px;
  /* overflow-x: hidden !important; */
  /* overflow: scroll; */
}

span.bt-bars {
  cursor: pointer;
}

span.checkout {
  font-size: 14px;
  border: none;
  cursor: pointer;
}

span.active {
  padding: 6px 2px;
  color: #fff;
  background: #7e98df;
  border: none;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
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
  height: 480px;
  overflow-x: hidden !important;
  overflow: scroll;
}

div.box-footer {
  height: 5rem;
  margin-left: -1.9em;
}

@media (min-width: 577px) {
  div.mobile {
    background: olive;
    display: none;
  }
}

@media (max-width: 576px) {
  div.card {
    width: 104%;
    overflow: hidden;
  }

  div.web {
    display: none;
  }

  div.box-header {
    height: 6rem;
    width: 115%;
  }

  div.box-footer {
    height: 5rem;
    width: 115%;
  }

  div.box-chat {
    height: 438px;
    overflow-x: hidden !important;
    overflow: scroll;
  }
}
</style>
