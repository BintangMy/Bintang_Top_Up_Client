<script>
import Button from "../components/Button.vue"
import { mapWritableState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
import NavbarVue from '../components/Navbar.vue'


export default {
  data() {
    return {
      buttonName: "Register"
    };
  },
  components:{
    Button,
    NavbarVue
  },
  computed:{
    ...mapWritableState(useCounterStore,["dataRegister"])
  },
  methods:{
    ...mapActions(useCounterStore,["createAccount", "fetchRegister"])
  },
  created(){
    this.fetchRegister()
  }
}
</script>

<template>

  <div>
    <NavbarVue />

  <section id="register" class="min-h-screen flex mt-5 items-center justify-center">
    <div
      class="bg-gray-100 flex rounded-2xl shadow-lg p-5 items-center"
    >
      <div class="w-1/2 px-2 px-16">
        <h2 class="font-bold text-2xl text-green-500">Daftar</h2>
        <p class="text-xs mt-4 text-green-500">
          silakan lengkapi data dibawah
        </p>
        <form
          action=""
          @submit.prevent="createAccount"
          class="flex flex-col gap-4"
        >
          <input
            class="p-2 mt-3 rounded-xl w-full"
            type="text"
            placeholder="username"
            v-model="this.dataRegister.username"
          />
          <input
            class="p-2 border rounded-xl w-full"
            type="email"
            placeholder="email"
            v-model="this.dataRegister.email"
          />
          <input
            class="p-2 border rounded-xl w-full"
            type="password"
            placeholder="password"
            v-model="this.dataRegister.password"
          />
          <input
            class="p-2 rounded-xl w-full border"
            type="text"
            placeholder="referal code (optional)"
            v-model="this.dataRegister.referalCode"
          />
          <Button type="submit" :buttonName = "buttonName"/>
        </form>

        <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
         
        </div>
        <router-link to="/login">
        <div  class="p-2 rounded-xl items-center text-center border w-full bg-green-500 text-white py-2 hover:scale-105 duration-300">
           Login
        </div>
        </router-link>
      </div>

      <div class="w-1/2">
        <img
          class="rounded-2xl"
          src="https://ik.imagekit.io/bintangtopup/regisimg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=16734946832320"
        />
      </div>
    </div>
  </section>
</div>
</template>
