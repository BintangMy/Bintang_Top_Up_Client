<script>
import { mapWritableState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
import NavbarVue from "../components/Navbar.vue"
import FooterVue from "../components/FooterVue.vue"


export default {
    components :{
        NavbarVue,
        FooterVue
    },
    data(){
        return{
        }
    },
    computed:{
    ...mapWritableState(useCounterStore,["oneGame", "items","cekId","playerId", "gameName", "nickname","nominal","region", "zonaML", "type", "price","access_token"])
    },
    methods:{
      ...mapActions(useCounterStore,["detailCard", "priceCalculate", "paymentConfirm", "handleCekId"]),
      handleCalculate(price, id, nominal,type ){
        console.log(price, id, nominal,type, "<<<<<<<<<<<");
        this.priceCalculate(price, id, nominal,type)
      },
    },
    created(){
      this.detailCard(this.$route.params.gameId)
      this.playerId = ""
    }
};
</script>
<template>
    <div>

        <NavbarVue />

    <section id="top_up" class="flex mt-10 justify-between text-gray-600">
        
        <section id="top_up_description" class="w-1/3 m-4">
            <img class="rounded-xl" :src="oneGame.bannerUrl" alt="">
            <h1 class="text-xl py-4 font-medium">{{oneGame.name}}</h1>

            <div>
                <span class="bg-green-500 p-3 py-2 rounded-full text-white hover:scale-105 duration-300 text-xs"><i class="fa-solid fa-bolt"></i> Langsung diterima
                </span>
                <span class="bg-green-500 ml-2 p-3 py-2 rounded-full text-white hover:scale-105 duration-300 text-xs"><i class="fa-solid fa-star"></i> Pembayaran yang aman
                </span>

                <div class="pt-4 break-words">
                    <b>PERHATIAN:</b> {{oneGame.description}}
                </div>

                <p class="pt-2">Download dan mainkan Free Fire sekarang!</p>

                <div class="flex w-20 pt-4">
                    <img class="mr-2" src="https://ik.imagekit.io/bintangtopup/bintangtopup/play-store.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673363688794">
                    <img src="https://ik.imagekit.io/bintangtopup/bintangtopup/app-store.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673363675448">
                </div>
            </div>
        </section>
        <!-- 4012975855 -->
        
        <section id="data_top_up" class="w-4/6 ">
            <form >
            <section id="cek_id">
                <div class="bg-gray-200 shadow-2xl w-11/12 h-48 rounded-xl ml-8 my-10">
                    <div class="flex items-center">
                        <div class="w-10 h-10 bg-green-700 text-center rounded-full m-1.5">
                            <h1 class="text-white m-1  text-2xl font-semibold">1</h1>
                        </div>
                        <div class="text-black text-xl font-semibold">Masukan Player ID</div> 
                    </div>

                    <div class="flex items-center">
                        <input class ="m-3 text-center px-8 py-3 border-solid border-2 border-green-700 rounded-xl" type="text" placeholder="Player Id" v-model = "this.playerId">
                        <input v-if = "gameName === 'Mobile Legends'" class ="m-3 text-center px-2 py-3 border-solid border-2 border-green-700 rounded-xl" type="text" placeholder="( Zona )" v-model = "zonaML">

                        <select class="p-2.5 mx-2 rounded-xl text-center"  v-if = "gameName === 'Genshin Impact'" v-model="region" >
                            <option value="america">Amerika</option>
                            <option value="europa">Europa</option>
                            <option value="asia">Asia</option>
                          </select>
                        <!-- <div class="w-5 h-5 bg-green-700 text-center rounded-full m-1.5"> -->
                            <button @click.prevent="handleCekId" class="h-10 p-2 rounded-md bg-green-600 text-white hover:scale-105 duration-300">cek id </button>
                        <!-- </div> -->
                    </div>
                    <!-- <i class="text-xs text-black ml-2 break-words">Untuk menemukan ID Anda, klik pada ikon karakter. User ID tercantum di bawah nama karakter Anda.</i> -->
                    <br>
                    <i class="text-xs text-black ml-2 break-words"> NICKNAME: {{nickname}}</i>
                </div>
            </section>

            <section id="demon_item">

                <div class="bg-gray-200 shadow-2xl w-11/12 rounded-xl pb-1 ml-8 my-10 text-black">
                    <div class="flex items-center">
                        <div class="w-10 h-10 bg-green-700 text-center rounded-full m-1.5">
                            <h1 class="text-white m-1  text-2xl font-semibold">2</h1>
                        </div>
                        <div class="text-black text-xl font-semibold">Pilih Nominal Top Up</div>
                    </div>

                    <div class="text-sm font-semibold m-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                        <div @click="handleCalculate(item.price,item.id,item.nominal,item.type)"  v-for="item in items" :key="item.id" class="p-4 flex flex-col items-center border-solid border-2 border-green-700 rounded-xl shadow-xl hover:bg-green-200 hover:scale-105 duration-300">
                            <img class="w-14 h-14" :src="item.itemIconUrl" alt="">
                            <div class="text-black"><span id="denom">{{item.nominal}}</span> <span id="type">{{item.type}}</span></div>
                        </div>
                    </div>
                </div>
            </section>

        

            
        </form>
            <section id="cek_id">
                <div class="shadow-xl bg-gray-200 w-11/12 rounded-xl ml-8 my-10">
                    <div class="flex items-center">
                        <div class="w-10 h-10 bg-green-700 text-center rounded-full m-1.5">
                            <h1 class="text-white m-1  text-2xl font-semibold">3</h1>
                        </div>
                        <div class="text-black text-xl font-semibold">Konfirmasi</div>
                    </div>

                    <form @submit.prevent="paymentConfirm(price)">
                        <input class ="w-11/12 my-4 py-2.5 px-6 mx-2  border-solid border-2 border-green-700 rounded-xl" type="email" placeholder="email">
                        <div class="flex justify-between items-center mt-8 rounded-lg p-4 ">
                            <div>
                                <div class="text-md font-semibold">
                                    <span id="denom">{{nominal}}</span> <span id="type">{{type}}</span>
                                </div>
                                <div class="text-md font-semibold">
                                    <h2 class="text-gray-900">Harga</h2>
                                    <h1 class="text-gray-900">Rp. <span id="price">{{price}}</span></h1>
                                </div>
                            </div>
                            </div>
                            <button v-if="!access_token" type="submit" class="h-10 p-2 rounded-md bg-green-600 text-white hover:scale-105 duration-300">Beli sekarang </button>
                        </form>
                        <button v-if="access_token" class="h-10 p-2 rounded-md bg-green-600 text-white hover:scale-105 duration-300">Beli sekarang </button>

                    </div>
            </section>
        </section>
    </section>
    <FooterVue />
</div>
</template>