<script>
import {mapWritableState, mapActions} from 'pinia'
import {useCounterStore} from '../stores/counter'

export default{
  data(){
    return{

    }
  },
  props: ["readyGames"],
  computed:{
    ...mapWritableState(useCounterStore,["readyGames"])
  },
  methods:{
    ...mapActions(useCounterStore,["getGame","detailCard"])
  }
}
</script>

<template>
   <div class="flex flex-wrap justify-center">


<div 
    class="pt-14 pl-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-5 overflow-auto">

    <div v-for="game in readyGames" :key="game.id" class="overflow-hidden bg-white text-center rounded-lg relative w-44 mb-4 ml-4 shadow-xl">
        <img :src="game.backgroundCardUrl" class='absolute h-32 w-full bg-center flex bg-no-repeat bg-cover'>
        <img :src="game.logoUrl" calt='profile image' class="w-32 mt-16 ml-7 drop-shadow-xl"
            style="clip-path: circle(50px at center)" width="50px">
        <h1 class="font-bold text-xl">{{game.name}}</h1>
        <div class="text-xs text-blue-400">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
        </div>
        <p class="text-xs m-2">Rp.{{ game.min }} ~ Rp.{{ game.max }}</p>
        <a @click="$router.push('/detail/' + game.id)"><button
                class="w-full  text-base font-bold text-white bg-green-400 py-2">Beli</button></a>
    </div>
</div>
</div>
</template>