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
      ...mapActions(useCounterStore,["getGame","getCommingSoonGame"])
    },
    created(){
      this.getGame()
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
          <h2 class="font-bold text-3xl">Terbaru</h2>
          <span class="py-0.5 px-12 rounded-full bg-green-400"></span>
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
                src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
                class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                alt=""
                loading="lazy"
              />
              <div class="flex flex-col w-full">
                <div class="flex flex-row justify-between">
                  <p
                    class="relative text-xl whitespace-nowrap truncate overflow-hidden"
                  >
                    GG Gemink
                  </p>
                </div>
                <p class="text-green-400 text-sm">20 April 2022, at 14:88 PM</p>
              </div>
            </div>
            <p class="-mt-4 text-green-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              quisquam vero adipisci beatae voluptas dolor ame.
            </p>
          </div>

          <div
            class="mx-4 relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg hover:scale-105 duration-300"
          >
            <div class="relative flex gap-4">
              <img
                src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
                class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                alt=""
                loading="lazy"
              />
              <div class="flex flex-col w-full">
                <div class="flex flex-row justify-between">
                  <p
                    class="relative text-xl whitespace-nowrap truncate overflow-hidden"
                  >
                    GG Gemink
                  </p>
                </div>
                <p class="text-green-400 text-sm">20 April 2022, at 14:88 PM</p>
              </div>
            </div>
            <p class="-mt-4 text-green-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              quisquam vero adipisci beatae voluptas dolor ame.
            </p>
          </div>

          <div
            class="mx-4 relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg hover:scale-105 duration-300"
          >
            <div class="relative flex gap-4">
              <img
                src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
                class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                alt=""
                loading="lazy"
              />
              <div class="flex flex-col w-full">
                <div class="flex flex-row justify-between">
                  <p
                    class="relative text-xl whitespace-nowrap truncate overflow-hidden"
                  >
                    GG Gemink
                  </p>
                </div>
                <p class="text-green-400 text-sm">20 April 2022, at 14:88 PM</p>
              </div>
            </div>
            <p class="-mt-4 text-green-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              quisquam vero adipisci beatae voluptas dolor ame.
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
