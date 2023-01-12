<script>
import Button from "../components/Button.vue";
import { GoogleLogin } from "vue3-google-login";

import { mapWritableState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
import NavbarVue from '../components/Navbar.vue'

export default {
  // name:"Login",
  components: {
    Button,
    GoogleLogin,
    NavbarVue
  },
  data() {
    return {
      buttonName: "Login",
    };
  },
  computed: {
    ...mapWritableState(useCounterStore, ["dataLogin", "googleLogin"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["loginCustomer", "googleLogin"]),
    callback(response) {
      // this.$emit('handleLoginGoogle', response.credential)
      this.googleLogin(response.credential);
      this.dataLogin.email = ""
      this.dataLogin.password = ""
    },
  },
};
</script>

<template>
<div>

  <NavbarVue />

  <div id="login" class="min-h-screen flex items-center justify-center">
    <div
      class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center"
    >
      <div class="md:w-1/2 px-2 md:px-16">
        <h2 class="font-bold text-2xl text-green-600">Masuk</h2>
        <p class="text-xs mt-4 text-green-600">
          Jika sudah mempunyai akun bisa langsung masuk
        </p>

        <form @submit.prevent="this.loginCustomer" class="flex flex-col gap-4">
          <input
            class="p-2 mt-8 rounded-xl"
            type="email"
            v-model="this.dataLogin.email"
            placeholder="email"
          />
          <input
            class="p-2 rounded-xl border w-full"
            type="password"
            v-model="this.dataLogin.password"
            placeholder="passwod"
          />
          <Button type="submit" :buttonName="buttonName" />

          <!-- <button
            type="submit"
            class="p-2 rounded-xl items-center border w-full bg-green-600 text-white py-2 hover:scale-105 duration-300"
          >
            Login
          </button> -->
        </form>
        <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
          <hr class="border-gray-400" />
          <p class="p-2 text-center text-sm">atau</p>
          <hr class="border-gray-400" />
        </div>
        <GoogleLogin :callback="callback" />
        <div class="mt-3 text-xs flex justify-between items-center">
          <p>Belum mempunyai akun !</p>
          <router-link
            to="/register"
            class="border bg-white rounded-md py-2 px-5 hover:scale-105 duration-300"
          >
            Daftar
          </router-link>
        </div>
      </div>

      <div class="w-1/2">
        <img
          class="rounded-2xl"
          src="https://ik.imagekit.io/bintangtopup/regisimg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=16734946832320"
        />
      </div>
    </div>
  </div>
</div>
</template>
