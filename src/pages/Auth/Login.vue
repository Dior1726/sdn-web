<template>
  <q-page>
    <div class="login q-pa-sm">
      <div class="logo">
        <img src="../../assets/bigLogo.svg" class="full-width" alt="">
      </div>
      
      <div class="form__area absolute-center q-px-md">
        <div>
          <q-input class="q-mb-md" 
            readonly
            mask="+# (###) ### ####" unmasked-value 
            outlined color="brand" v-model="phone" 
            label="Номер телефона"
          />
        </div>
        
        <div>
          <q-input readonly 
            outlined color="brand" 
            v-model="code" label="Код из СМС" 
            :rules="[ val => val.length <= 4 || 'Максимум 4 цифры']"  
          />
        </div>
        
        <div>
          <q-input 
            class="q-mb-md" :type="isPwd ? 'password' : 'text'"
            outlined color="brand" v-model="password" label="Пароль" 
            :rules="[ val => val.length >= 6 || 'Минимум 6 цифр и символов']"  
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer" color="brand"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </div>
        
        <div class="form__btn">
          <q-btn 
            class="full-width q-py-sm rounded-sm q-mb-md" 
            color="brand" text-color="white" label="Войти" 
            @click="loginHandler"  
          />
          <q-btn 
            flat
            class="full-width border-brand q-py-sm rounded-sm" 
            to="/login" 
            color="white" text-color="brand" label="Назад" 
          />
        </div>
      </div>
    
    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      isPwd: true,
      phone: '',
      code: '',   
      password: '11221133'
    }
  },
  mounted() {
    if (this.$route.query.phone && this.$route.query.code) {
      this.phone = this.$helpers.baseToString(this.$route.query.phone)
      this.code = this.$helpers.baseToString(this.$route.query.code)
    }
  },
  methods: {
    ...mapActions('user', ['login']),
    loginHandler() {
      if(this.password) {
        let phone = this.$helpers.stringToBase(this.phone)
        let code = this.$helpers.stringToBase(this.code)
        let password = this.$helpers.stringToBase(this.password)

        this.login({phone, code, password})
      }
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
      width: 100%;
    }
  }

  .form__btn {
    max-width: 400px;
    margin:  40px auto 0;
  }
}
</style>
