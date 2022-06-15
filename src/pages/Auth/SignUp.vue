<template>
  <q-page class="">
    <div class="login q-pa-sm">
      <div class="logo">
        <img src="../../assets/bigLogo.svg" class="full-width" alt="">
      </div>
      <div class="form__area absolute-center q-px-md">
        <div>
          <q-input 
            outlined color="brand" 
            v-model="iin" label="ИИН"
            :rules="[ val => val.length <= 12 || 'Максимум 12 цифры']"
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
            @click="sign_in"  
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
export default {
  name: 'Login',
  data() {
    return {
      isPwd: true,
      phone: '',
      code: '',   
      iin: '990817300571',   
      password: '11221133'
    }
  },
  mounted() {
    if(this.$route.query.phone && this.$route.query.code) {
      this.phone = this.$route.query.phone
      this.code = this.$route.query.code
    }
  },
  methods: {
    sign_in() {
      if(this.iin && this.password) {

        let data = {
          phone: this.phone,
          code: this.code,
          iin:this.$helpers.stringToBase(this.iin),
          password: this.$helpers.stringToBase(this.password)
        }

        this.$store.dispatch('user/signUp', data)
        .then(() => {
          this.$router.push('/main_page')
        })
        .catch( e => {
          alert(e.response.data.message)
        })
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
      margin-bottom: 10px;
      width: 100%;
    }
  }

  .form__btn {
    max-width: 400px;
    margin:  40px auto 0;
  }
}


</style>
