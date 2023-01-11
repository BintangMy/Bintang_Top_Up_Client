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


      <section id="top_product">
       <ReadyGameCard :readyGames="readyGames"/>
      </section>

      <FooterVue />
    </section>
  </div>
</template>
