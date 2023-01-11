<script>
import Button from "../components/Button.vue";
import { GoogleLogin } from "vue3-google-login";

import { mapWritableState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  // name:"Login",
  components: {
    Button,
    GoogleLogin,
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
    },
  },
};
</script>

<template>
  <div id="login" class="min-h-screen flex items-center justify-center">
    <div
      class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center"
    >
      <div class="md:w-1/2 px-2 md:px-16">
        <h2 class="font-bold text-2xl text-green-600">Login</h2>
        <p class="text-xs mt-4 text-green-600">
          If you already have an account, please log in
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
          <p class="p-2 text-center text-sm">or</p>
          <hr class="border-gray-400" />
        </div>
        <!-- <button
          class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-green-600"
        >
          <svg
            class="mr-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="25px"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            />
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            />
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            />
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            />
          </svg>
          With Google
        </button> -->

        <GoogleLogin :callback="callback" />

        <div class="mt-3 text-xs flex justify-between items-center">
          <p>Don't have an account yet !</p>
          <router-link
            to="/register"
            class="border bg-white rounded-md py-2 px-5 hover:scale-105 duration-300"
          >
            Register
          </router-link>
        </div>
      </div>

      <div class="md:block hidden w-1/2">
        <img
          class="rounded-2xl"
          src="https://images.unsplash.com/photo-1588773846628-13fce0a32105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
        />
      </div>
    </div>
  </div>
</template>
