import { ref, computed } from 'vue'
import { defineStore, createPinia } from 'pinia'
import axios from 'axios'

const mainUrl = 'http://localhost:3050'

export const useCounterStore = defineStore('counter', {
  state() {
    return {
      readyGames: [],
      commingSoonGame: [],
      dataLogin:{
        email:"",
        password:""
      },
      dataRegister: {
        username: "",
        email: "",
        password: "",
        referalCode: ""
      },
      oneGame: "",
      items: [],
      price: 0,
      nominal: "",
      type: "",
      cekId: "",
      nickname: "",
      playerId: "",
      region: "",
      zonaML: "",
      payMethod: "",
      paymentType: "",
      order_Id: "",
      gameName: "",
      promoCode:"",
      access_token: localStorage.getItem("access_token")
    }
  },
  actions: {
    async loginCustomer() {
        try {
            console.log(this.dataLogin, 'ini data loginnnn')
          let { data } = await axios({
            method: "POST",
            url: mainUrl + "/login",
            data: {
              email: this.dataLogin.email,
              password: this.dataLogin.password,
            },
          })
  
          // console.log(data)
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("role", data.role);
          this.dataLogin.email = ""
          this.dataLogin.password = ""
          this.access_token = "access_token_dummy"
          this.router.push('/')
        } catch (error) {
          Swal.fire({
            title: `${error.response.data.message}`,
            icon: 'error',
            confirmButtonText: 'Oke'
          })
          // console.log(error, 'err login')
        }
      },
      async createAccount() {
        try {
          let { data } = await axios({
            method: "POST",
            url: mainUrl + "/register",
            data: {
              username: this.dataRegister.username,
              email: this.dataRegister.email,
              password: this.dataRegister.password,
              phoneNumber: this.dataRegister.phoneNumber,
              address: this.dataRegister.address,
            },
          })
  
          this.dataRegister.username = ""
          this.dataRegister.email = ""
          this.dataRegister.password = ""
          this.dataRegister.phoneNumber = ""
          this.dataRegister.address = ""
  
          this.router.push('/login')

          // console.log(data, 'register berhasil')
        } catch (error) {
          
          console.log(error, 'public register')
        }
      },
      fetchRegister() {
        this.dataRegister.username = ""
        this.dataRegister.email = ""
        this.dataRegister.password = ""
        this.dataRegister.phoneNumber = ""
        this.dataRegister.address = ""
    },
    async googleLogin(credential) {

        try {
          let { data } = await axios({
            method: "POST",
            url: mainUrl + '/google-login-auth',
            headers: {
              google_token: credential
            }
          })
  
          // console.log(data, 'google')
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("email", data.email)
          localStorage.setItem("role", data.role)
          this.access_token = "access_token_dummy"
          this.router.push('/')
        } catch (error) {
          console.log(error)
        }
      },
      async logout() {
        localStorage.clear();
        this.access_token = ""
        this.router.push('/')
      },
    async getGame() {
      try {
        let { data } = await axios({
          method: "GET",
          url: mainUrl+"/game"
        })
        this.readyGames = data
        console.log(data, 'ini data')
      } catch (error) {
        console.log(error)
      }
    },
    async getTopGame() {
      try {
        let { data } = await axios({
          method: "GET",
          url: mainUrl+"/game/top-game"
        })
        this.readyGames = data
        console.log(data, 'ini data')
      } catch (error) {
        console.log(error)
      }
    },
    async getCommingSoonGame() {
        try {
          let { data } = await axios({
            method: "GET",
            url: mainUrl+"/game/comming-soon"
          })
          this.commingSoonGame = data
          console.log(data, 'ini data comming soon')
        } catch (error) {
          console.log(error)
        }
      },
    async detailCard(gameId, gameName) {
      try {

        let { data } = await axios({
          method: "GET",
          url: mainUrl+"/game/" + gameId
        })

        console.log(data,'ini data detail')
        this.page = "detailProduct"
        this.oneGame = data
        this.items = data.Items
        this.gameName = data.name
       
      } catch (error) {
        console.log(error, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
      }
    },
    handleCekId(){
        if ( this.gameName === "Free Fire") {
            console.log('masuk nih')
            this.apiCekIdFF()
          } else if ( this.gameName === "Mobile Legends") {
            console.log('masuk nih')
            this.apiCekML()
          } else if ( this.gameName === "Arena Of Valo") {
            console.log('masuk nih')
            this.apiCekAOV()
          } else if ( this.gameName === "Call of Duty") {
            console.log('masuk nih')
            this.apiCekCOD()
          } else if ( this.gameName === "Genshin Impact") {
            console.log('masuk nih')
            this.apiCekGENSHIN()
          } else if ( this.gameName === "Higgs Domino") {
            console.log('masuk nih')
            this.apiCekIdDomino()
          }
    },
    priceCalculate(itemPrice, itemId, nominal, type) {
      // this.page = "detailProduct"
      this.price = itemPrice
      this.nominal = nominal
      this.type = type
      // localStorage.setItem("price",itemPrice);
      // localStorage.setItem("nominal",nominal);
      // localStorage.setItem("type",type);
      // console.log(itemPrice,itemId,';;;;;;;;;;;;;;;;;;;;')
  },
  async apiCekIdFF() {
      try {
          console.log({
              id: this.playerId
          }, this.playerId, 'ini data')


          let { data } = await axios({
              method: 'POST',
              url: mainUrl+'/cekid/freefire',
              data: {
                  id: this.playerId
              }
          })
          console.log(data )
          console.log(data.data)
          this.nickname = data.data.username
      } catch (error) {
          console.log(error, 'ini error')
      }

  },
  async apiCekAOV() {
      try {
          console.log({
              id: this.playerId
          }, this.playerId, 'ini data')

          let { data } = await axios({
              method: 'POST',
              url: mainUrl+'/cekid/aov',
              data: {
                  id: this.playerId
              }
          })
          console.log(data.data.username)
          this.nickname = data.data.username
      } catch (error) {
          console.log(error, 'ini error')
      }
  },
  async apiCekCOD() {
      try {
          console.log({
              id: this.playerId
          }, this.playerId, 'ini data')

          let { data } = await axios({
              method: 'POST',
              url: mainUrl+'/cekid/cod',
              data: {
                  id: this.playerId
              }
          })
          console.log(data.data.username)
          this.nickname = data.data.username
      } catch (error) {
          console.log(error, 'ini error')
      }
  },
  async apiCekGENSHIN() {
      try {
          console.log({
              id: this.playerId
          }, this.playerId, 'ini data')


          let { data } = await axios({
              method: 'POST',
              url: mainUrl+'/cekid/genshinImpact',
              data: {
                  id: this.playerId,
                  region: this.region
              }
          })
          console.log(data.data.username)
          // this.page = "detailProduct"
          this.nickname = data.data.username
      } catch (error) {
          console.log(error)
      }
  },
  async apiCekML() {
      try {
          let { data } = await axios({
              method: 'POST',
              url: mainUrl+'/cekid/mobilelegends',
              data: {
                  id: this.playerId,
                  region: this.zonaML
              }
          })
          // this.page = "detailProduct"
          console.log(this.playerId,this.zonaML, 'kkkkkkkkkkkkkkk')
          this.nickname = data.data.username
      } catch (error) {
          console.log(error)
      }
  },
  async apiCekIdDomino() {
      try {
          let { data } = await axios({
              method: 'POST',
              url: mainUrl+'/cekid/dominohight',
              data: {
                  id: this.playerId,
              }
          })
          // this.page = "detailProduct"
          this.nickname = data.data.username
      } catch (error) {
          console.log(error)
      }
  },

  paymentMethod(method, paymentType) {
      this.payMethod = method
      this.paymentType = paymentType
      this.page = "detailProduct"
  },
  async statusPayment() {
      try {
          await axios({
              method: 'PATCH',
              url: mainUrl+"/payment/statusPayment",
              headers: {
                  access_token: localStorage.getItem("access_token")
              },
              data: {
                  orderId: this.order_Id
              }
          })

      } catch (error) {
          console.log(err, 'edit gagal')
      }
  },
  async paymentConfirm(price) {
    console.log(this.promoCode, 'ini code promoooooooooooooooooooooooo')

    if(this.promoCode === "BISMILLAH_PHASE3"){
      
      price = price - (price * 15 /100)
    }
    // console.log(price, '<<<<<<<<<< midtranss')
      try {
          let { data } = await axios({
              method: 'POST',
              url: mainUrl+"/payment/get-payment-token",
              headers: {
                  access_token: localStorage.getItem("access_token")
              },
              data: {
                  price: price
              }
          })

        //   console.log(price, 'ini priceeeeeeeeeeee')


          this.order_Id = data.orderId
          window.snap.pay(`${data.token.token}`, {
              onSuccess: async (result) => {
                  await this.statusPayment()
                  this.router.push('/product')
              },
              onPending: function (result) {
                  alert("wating your payment!"); console.log(result);
              },
              onError: function (result) {
                  alert("payment failed!"); console.log(result);
              },
              onClose: function () {
                  alert('you closed the popup without finishing the payment');
              }
          })
      } catch (error) {
          console.log(error)
      }

  }
  }
})
