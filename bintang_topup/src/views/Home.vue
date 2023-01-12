<script>
import { mapState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
import NavbarVue from '../components/Navbar.vue'
import MainBanner from '../components/MainBanner.vue'
import ReadyGameCard from "../components/ReadyGameCard.vue";
import FooterVue from "../components/FooterVue.vue"
import inActiveGameCard from "../components/inActiveGameCard.vue";
import PromotBanner from "../components/PromotBanner.vue"
// import CourseCardVue from '../components/CouresCard.vue'

export default {
    components :{
        NavbarVue,
        MainBanner,
        ReadyGameCard,
        inActiveGameCard,
        FooterVue,
        PromotBanner
    },
    data(){
        return{
        }
    },
    computed:{
    ...mapState(useCounterStore,["readyGames","commingSoonGame"])
    },
    methods:{
      ...mapActions(useCounterStore,["getTopGame","getCommingSoonGame"])
    },
    created(){
      this.getTopGame()
      this.getCommingSoonGame()
    }
};
</script>
<template>
  <div>
    <section >
      <NavbarVue/>

      <MainBanner />

      <section id="top_product">
        <div class="flex flex-col items-center">
          <h2 class="font-bold text-3xl">Terlaris</h2>
          <span class="py-0.5 px-12 rounded-full bg-green-400"></span>
        </div>

       <ReadyGameCard :readyGames="readyGames"/>
      </section>

      <section id="new_product" class="py-12">
        <div class="flex flex-col items-center">
          <h2 class="font-bold text-3xl">Segera Hadir</h2>
          <span class="py-0.5 my-1 px-24 rounded-full bg-green-400"></span>
        </div>

        <inActiveGameCard :commingSoonGame="commingSoonGame" />
      </section>

      <PromotBanner />
     

      <section id="comment" class="mt-12">
        <div class="flex flex-col items-center mb-12">
          <h2 class="font-bold text-3xl">Ulasan</h2>
          <span class="py-0.5 px-12 rounded-full bg-green-400"></span>
        </div>

        <div class="flex justify-center relative top-1/3">
          <!-- This is an example component -->
          <div
            class="mx-4 relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg hover:scale-105 duration-300"
          >
            <div class="relative flex gap-4">
              <img
                src="https://ik.imagekit.io/bintangtopup/bintangtopup/user-1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672032577008"
                class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                alt=""
                loading="lazy"
              />
              <div class="flex flex-col w-full">
                <div class="flex flex-row justify-between">
                  <p
                    class="relative text-xl whitespace-nowrap truncate overflow-hidden"
                  >
                    Hadi Guna
                  </p>
                </div>
                <p class="text-green-600 text-sm">9 Januari 2022, 14:08 PM</p>
              </div>
            </div>
            <p class="-mt-4 text-green-700">
              Pelayanan Bintang Top Up sangat cepat dan handal, membuat saya merasa nyaman dalam melakukan top up kredit game. Aplikasinya sangat mudah digunakan dan transaksi selalu berhasil dengan cepat.
            </p>
          </div>

          <div
            class="mx-4 relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg hover:scale-105 duration-300"
          >
            <div class="relative flex gap-4">
              <img
                src="https://ik.imagekit.io/bintangtopup/bintangtopup/user-3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672032578577"
                class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                alt=""
                loading="lazy"
              />
              <div class="flex flex-col w-full">
                <div class="flex flex-row justify-between">
                  <p
                    class="relative text-xl whitespace-nowrap truncate overflow-hidden"
                  >
                    Raihan Mauladani
                  </p>
                </div>
                <p class="text-green-600 text-sm">10 Januari 2023, 10:09 PM</p>
              </div>
            </div>
            <p class="-mt-4 text-green-700">
              Saya sangat merekomendasikan Bintang Top Up karena pelayanannya sangat baik. Aplikasinya sangat user-friendly dan transaksi top up kredit game selalu berhasil dengan cepat.
            </p>
          </div>

          <div
            class="mx-4 relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg hover:scale-105 duration-300"
          >
            <div class="relative flex gap-4">
              <img
                src="https://ik.imagekit.io/bintangtopup/bintangtopup/user-2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672032577634"
                class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                alt=""
                loading="lazy"
              />
              <div class="flex flex-col w-full">
                <div class="flex flex-row justify-between">
                  <p
                    class="relative text-xl whitespace-nowrap truncate overflow-hidden"
                  >
                  Aufar
                  </p>
                </div>
                <p class="text-green-600 text-sm">1 Januari 2023, 20:12 PM</p>
              </div>
            </div>
            <p class="-mt-4 text-green-700">
              Bintang Top Up menawarkan pelayanan top up kredit game yang sangat memuaskan. Aplikasinya sangat mudah digunakan dan transaksi selalu berhasil dengan cepat. Pelayanan customer service juga sangat responsif dan membantu dalam menyelesaikan masalah yang saya hadapi.
            </p>
          </div>
        </div>
      </section>

      <section id="brands" class="m-24">
        <div class="flex justify-between">
          <div class="w-40 w-full cursor-pointer grayscale hover:grayscale-0">
            <img src="https://ik.imagekit.io/bintangtopup/bintangtopup/logo-garena.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672032568285" />
          </div>
          <div class="w-40 w-full cursor-pointer grayscale hover:grayscale-0">
            <img src="https://ik.imagekit.io/bintangtopup/bintangtopup/logo-moonton.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672032572632" />
          </div>
          <div class="w-40 w-full cursor-pointer grayscale hover:grayscale-0">
            <img src="https://ik.imagekit.io/bintangtopup/bintangtopup/logo-tencent.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672032572948" />
          </div>
          <div class="w-40 w-full cursor-pointer grayscale hover:grayscale-0">
            <img src="https://ik.imagekit.io/bintangtopup/bintangtopup/logo-supercell.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672032573240" />
          </div>
        </div>
      </section>

      <FooterVue />
    </section>
  </div>
</template>
