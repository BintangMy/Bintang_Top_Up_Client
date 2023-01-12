import { defineStore, createPinia } from 'pinia'
import axios from 'axios'

const mainUrl = 'https://bintang-top-up-production.up.railway.app'
const mainUrlClient = `http://localhost:9090`
export const useCounterStore = defineStore('counter', {
  state() {
    return {
      readyGames: [],
      commingSoonGame: [],
      dataLogin: {
        email: "",
        password: ""
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
      promoCode: "",
      qrImg:"",
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

        Swal.fire({
          title: `Berhasil membuat akun`,
          icon: 'success',
          confirmButtonText: 'Oke'
        })

        // console.log(data, 'register berhasil')
      } catch (error) {

        Swal.fire({
          title: `Silakan lengkapi data`,
          icon: 'error',
          confirmButtonText: 'Oke'
        })
      }
    },
    fetchRegister() {
      this.dataRegister.username = ""
      this.dataRegister.email = ""
      this.dataRegister.password = ""
      this.dataRegister.referalCode = ""
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
        Swal.fire({
          title: `Silakan lengkapi data`,
          icon: 'error',
          confirmButtonText: 'Oke'
        })
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
          url: mainUrl + "/game"
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
          url: mainUrl + "/game/top-game"
        })
        this.readyGames = data
        // console.log(data, 'iniiiiiiiiiiiiiiiiiiiiiiiiii data')
      } catch (error) {
        console.log(error)
      }
    },
    async getCommingSoonGame() {
      try {
        let { data } = await axios({
          method: "GET",
          url: mainUrl + "/game/comming-soon"
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
          url: mainUrl + "/game/" + gameId
        })

        this.page = "detailProduct"
        this.oneGame = data
        this.items = data.Items
        this.gameName = data.name

      } catch (error) {
        Swal.fire({
          title: `${error.response.data.message}`,
          icon: 'error',
          confirmButtonText: 'Oke'
        })
      }
    },
    handleCekId() {
      if (this.gameName === "Free Fire") {
        console.log('masuk nih')
        this.apiCekIdFF()
      } else if (this.gameName === "Mobile Legends") {
        console.log('masuk nih')
        this.apiCekML()
      } else if (this.gameName === "Arena Of Valo") {
        console.log('masuk nih')
        this.apiCekAOV()
      } else if (this.gameName === "Call of Duty") {
        console.log('masuk nih')
        this.apiCekCOD()
      } else if (this.gameName === "Genshin Impact") {
        console.log('masuk nih')
        this.apiCekGENSHIN()
      } else if (this.gameName === "Higgs Domino") {
        console.log('masuk nih')
        this.apiCekIdDomino()
      }
    },
    priceCalculate(itemPrice, itemId, nominal, type) {
      // this.page = "detailProduct"
      this.price = itemPrice
      this.nominal = nominal
      this.type = type
    },
    async apiCekIdFF() {
      try {
        console.log({
          id: this.playerId
        }, this.playerId, 'ini data')


        let { data } = await axios({
          method: 'POST',
          url: mainUrl + '/cekid/freefire',
          data: {
            id: this.playerId
          }
        })
       
        this.nickname = data.data.username
      } catch (error) {
        Swal.fire({
          title: `ID tidak ditemukan`,
          icon: 'error',
          confirmButtonText: 'Oke'
        })
      }

    },
    async apiCekAOV() {
      try {
        console.log({
          id: this.playerId
        }, this.playerId, 'ini data')

        let { data } = await axios({
          method: 'POST',
          url: mainUrl + '/cekid/aov',
          data: {
            id: this.playerId
          }
        })
        this.nickname = data.data.username
      } catch (error) {
        Swal.fire({
          title: `ID tidak ditemukan`,
          icon: 'error',
          confirmButtonText: 'Oke'
        })
      }
    },
    async apiCekCOD() {
      try {
        let { data } = await axios({
          method: 'POST',
          url: mainUrl + '/cekid/cod',
          data: {
            id: this.playerId
          }
        })

        this.nickname = data.data.username
      } catch (error) {
        Swal.fire({
        title: `ID tidak ditemukan`,
        icon: 'error',
        confirmButtonText: 'Oke'
      })
      }
    },
    async apiCekGENSHIN() {
      try {
        console.log({
          id: this.playerId
        }, this.playerId, 'ini data')


        let { data } = await axios({
          method: 'POST',
          url: mainUrl + '/cekid/genshinImpact',
          data: {
            id: this.playerId,
            region: this.region
          }
        })
        console.log(data.data.username)
        // this.page = "detailProduct"
        this.nickname = data.data.username
      } catch (error) {
        Swal.fire({
          title: `ID tidak ditemukan`,
          icon: 'error',
          confirmButtonText: 'Oke'
        })
      }
    },
    async apiCekML() {
      try {
        let { data } = await axios({
          method: 'POST',
          url: mainUrl + '/cekid/mobilelegends',
          data: {
            id: this.playerId,
            region: this.zonaML
          }
        })
        // this.page = "detailProduct"
        // console.log(this.playerId,this.zonaML, 'kkkkkkkkkkkkkkk')
        this.nickname = data.data.username
      } catch (error) {
        Swal.fire({
          title: `ID tidak ditemukan`,
          icon: 'error',
          confirmButtonText: 'Oke'
        })
      }
    },
    async apiCekIdDomino() {
      try {
        let { data } = await axios({
          method: 'POST',
          url: mainUrl + '/cekid/dominohight',
          data: {
            id: this.playerId,
          }
        })
        // this.page = "detailProduct"
        this.nickname = data.data.username
      } catch (error) {
        Swal.fire({
          title: `ID tidak ditemukan`,
          icon: 'error',
          confirmButtonText: 'Oke'
        })
      }
    },

    paymentMethod(method, paymentType) {
      this.payMethod = method
      this.paymentType = paymentType
    },
    async statusPayment() {
      try {
        await axios({
          method: 'PATCH',
          url: mainUrl + "/payment/statusPayment",
          headers: {
            access_token: localStorage.getItem("access_token")
          },
          data: {
            orderId: this.order_Id
          }
        })

      } catch (error) {
        Swal.fire({
          title: `Pembayaran Gagal`,
          icon: 'error',
          confirmButtonText: 'Oke'
        })
      }
    },
    async paymentConfirm(price) {

      if (this.promoCode === "BISMILLAH_PHASE3") {

        price = price - (price * 15 / 100)
      }
      try {
        let { data } = await axios({
          method: 'POST',
          url: mainUrl + "/payment/get-payment-token",
          headers: {
            access_token: localStorage.getItem("access_token")
          },
          data: {
            price: price
          }
        })

        this.order_Id = data.orderId
        window.snap.pay(`${data.token.token}`, {
          onSuccess: async (result) => {
            await this.statusPayment()
            this.router.push('/product')

            Swal.fire({
              title: `Pembayaran berhasil silakan cek email anda`,
              icon: 'Success',
              confirmButtonText: 'Oke'
            })
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

    },
    async qrCode(gameId) {
     let linkUrl =`${mainUrl}/detail/${gameId}`
     try {
      let {data} = await axios({
        method:'GET',
        url:`https://api.happi.dev/v1/qrcode?data=${linkUrl}&width=&dots=000000&bg=FFFFFF&apikey=d1c43anh13Ezh2SIAwoDow1azVPrDacfGJ6JgVNkRGc7WNSz3xxW5A4r`
      })

      this.qrImg = data.qrcode
    // console.log(data.qrcode, 'ini qr')
    } catch (error) {
      console.log(error)
    }
    }
  }
})
