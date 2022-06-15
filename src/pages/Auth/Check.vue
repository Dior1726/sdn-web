<template>
  <q-page class="">
    <div class="login q-pa-sm">
      <div class="logo">
        <img src="../../assets/bigLogo.svg" class="full-width" alt="">
      </div>
      <div class="form__area absolute-center q-px-md">
        <div>
          <q-input 
            mask="+# (###) ### ####" unmasked-value 
            outlined color="brand" v-model="phone" 
            label="Номер телефона"
          />
        </div>
        <div v-if="showCodeInput">
          <q-input 
            outlined color="brand" 
            v-model="code" label="Код из СМС" 
            :rules="[ val => val.length <= 4 || 'Максимум 4 цифры']"
          />
        </div>
        <div class="form__btn">
          <q-btn
            v-if="!showCodeInput"
            class="full-width q-py-sm rounded-sm" 
            color="brand" text-color="white" label="Проверить номер"
            @click="check_user"  
          />
          <q-btn 
            v-if="showCodeInput"
            class="full-width q-py-sm rounded-sm" 
            color="brand" text-color="white" label="Подтвердить номер"
            @click="verify_phone"  
          />
          <q-btn 
            v-if="showCodeInput"
            flat
            class="full-width border-brand q-py-sm q-mt-md rounded-sm" 
            color="white" text-color="brand" label="Назад" 
            @click="go_back"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      phone: '77757777777',      
      code: '',
      showCodeInput: false,
      isFirstTime: null
    }
  },
  methods: {
    check_user() {
      if(this.phone) {
        let phone = this.$helpers.stringToBase(this.phone)

        this.$axios({
          method: 'post',
          url: 'https://java.sdn-erp.kz/api/auth/check/user',
          headers: {
            "phone": phone
          }
        })
        .then((res) => {
          this.showCodeInput = true
          this.isFirstTime = res.data.isFirstTime
        })
        .catch((e) => {
          this.showCodeInput = false
          alert(e.response.data.message)
        })
      }
    },

    verify_phone() {
      
      if(this.phone && this.code) {

        let phone = this.$helpers.stringToBase(this.phone)
        let code = this.$helpers.stringToBase(this.code)

        this.$axios({
          method: 'post',
          url: 'https://java.sdn-erp.kz/api/auth/verify/phone',
          headers: {
            "phone": phone,
            "code": code
          }
        })
        .then(() => {
          if(this.isFirstTime == true) {
            this.$router.push({ path: '/login/signup', query: {phone: phone, code: code} })
          } else {
            this.$router.push({ path: '/login/signin', query: {phone: phone, code: code} })
          }
          
        })
        .catch( e => {
          this.showCodeInput = true
          this.code  = ''
          alert(e.response.data.message)
        })
      }

    },

    go_back() {
      this.showCodeInput = false
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  .logo {
    max-width: calc(300px + 10vw);
    margin: calc(5vh) auto 0;

    img {
      max-width: 100%;
      height: auto;
    }
  }

  .form__area {
    width: 400px;
    margin: 0 auto;

    div {
      margin-bottom: 20px;
      width: 100%;
    }
  }

  .form__btn {
    max-width: 400px;
    margin:  40px auto 0;
  }
}


</style>
