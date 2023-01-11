<script>
import {mapWritableState, mapActions} from 'pinia'
import {useCounterStore} from '../stores/counter'

export default{ 
  data(){
    return{

    }
  },
  props: ["commingSoonGame"],
  computed:{
    // ...mapWritableState(useCounterStore,["readyGames"])
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
<!-- backgroundCardUrl
: 
"https://ik.imagekit.io/bintangtopup/bintangtopup/bg-prk1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672032569301"
bannerUrl
: 
"https://ik.imagekit.io/bintangtopup/bintangtopup/detailProduct/FFbanner.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672034124668"
createdAt
: 
"2022-12-26T12:21:38.643Z"
description
: 
"Metode pembayaran ShopeePay hanya tersedia untuk Pengguna Handphone (HP/Mobile). Harap pastikan bahwa aplikasi Shopee Anda telah diperbarui dan tengah memiliki saldo ShopeePay yang mencukupi sebelum melakukan top up.Beli Diamond Free Fire (FF) hanya dalam hitungan detik! Cukup masukkan Player ID Free Fire Kamu, pilih jumlah Diamond yang Kamu inginkan, selesaikan pembayaran, dan Diamond tersebut akan langsung masuk ke akun Free Fire Kamu Tanpa registrasi atau login, Kamu bisa langsung top up Diamond Free Fire hari ini dengan mudah ! Harga sudah termasuk PPN. Informasi tambahan, untuk transaksi menggunakan Telkomsel akan dikenakan biaya tambahan pajak"
id
: 
1
logoUrl
: 
"https://ik.imagekit.io/bintangtopup/bintangtopup/product-1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672032574102"
name
: 
"Free Fire"
updatedAt
: 
"2022-12-26T12 -->
    <div v-for="game in commingSoonGame" :key="game.id" class="overflow-hidden bg-white text-center rounded-lg relative w-44 mb-4 ml-4 shadow-xl">
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
        <p class="text-xs m-2">Rp.20.700 ~ Rp.1.399.000</p>
        <a href="#"><button
                class="w-full  text-base font-bold text-white bg-green-400 py-2">Beli</button></a>
    </div>
</div>
</div>
</template>