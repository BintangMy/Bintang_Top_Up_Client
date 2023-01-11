import { ref, computed } from 'vue'
import { defineStore, createPinia } from 'pinia'
import axios from 'axios'

// const mainUrl = 'http://localhost:3000/'

export const useCounterStore = defineStore('counter', {
  state() {
    return {
      readyGames: [],
      commingSoonGame: [],
      oneGame: "",
      items: [],
      price: "",
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
      access_token: localStorage.getItem("access_token")
    }
  },
  actions: {
    async getGame() {
      try {
        let { data } = await axios({
          method: "GET",
          url: "http://localhost:3050/game"
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
            url: "http://localhost:3050/game/comming-soon"
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
          url: "http://localhost:3050/game/" + gameId
        })

        console.log(data,'ini data detail')
        this.page = "detailProduct"
        this.oneGame = data
        this.items = data.Items
        this.gameName = data.name
        if (data.name === "Free Fire") {
          console.log('masuk nih')
          this.cekId = this.apiCekIdFF
        } else if (data.name === "Mobile Legends") {
          console.log('masuk nih')
          this.cekId = this.apiCekML
        } else if (data.name === "Arena Of Valo") {
          console.log('masuk nih')
          this.cekId = this.apiCekAOV
        } else if (data.name === "Call of Duty") {
          console.log('masuk nih')
          this.cekId = this.apiCekCOD
        } else if (data.name === "Genshin Impact") {
          console.log('masuk nih')
          this.cekId = this.apiCekGENSHIN
        } else if (data.name === "Higgs Domino") {
          console.log('masuk nih')
          this.cekId = this.apiCekIdDomino
        }
      } catch (error) {
        console.log(error)
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
              url: 'http://localhost:3050/cekid/freefire',
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
  async apiCekAOV() {
      try {
          console.log({
              id: this.playerId
          }, this.playerId, 'ini data')

          let { data } = await axios({
              method: 'POST',
              url: 'http://localhost:3050/cekid/aov',
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
              url: 'http://localhost:3050/cekid/cod',
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
              url: 'http://localhost:3050/cekid/genshinImpact',
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
              url: 'http://localhost:3050/cekid/mobilelegends',
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
              url: 'http://localhost:3050/cekid/dominohight',
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
              url: "http://localhost:3050/payment/statusPayment",
              headers: {
                  access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCI6MTY3MzM1NzM2OX0.y8IQnbGJUnNKKmek3CtTVuIjMk2rlOgIzhChlcXVwP8"
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
      try {
          let { data } = await axios({
              method: 'POST',
              url: "http://localhost:3050/payment/get-payment-token",
              headers: {
                  access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlhdCI6MTY3MzM1NzM2OX0.y8IQnbGJUnNKKmek3CtTVuIjMk2rlOgIzhChlcXVwP8"
              },
              data: {
                  price: price
              }
          })

          console.log(price, 'ini priceeeeeeeeeeee')


          this.order_Id = data.orderId
          window.snap.pay(`${data.token.token}`, {
              onSuccess: async (result) => {
                  await this.statusPayment()
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
