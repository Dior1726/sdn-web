<template>
  <q-page class="q-pa-lg">
    <page-title>Профиль</page-title>

    <div class="q-pa-xl bg-white shadow-block rounded-sm" style="max-width: 700px">
      <div class="flex column items-center q-mb-lg">
        <q-avatar size="100px">
          <img src="https://cdn.quasar.dev/img/avatar1.jpg">
        </q-avatar>
        <div class="text-center q-my-sm">
          Изменить фото
        </div>
      </div>

      <div class="q-mb-md">
        <q-input  v-model="userData.firstName" outlined class="full-width" color="brand" label="Имя" />
      </div>

      <div class="q-mb-md">
        <q-input v-model="userData.lastName" outlined class="full-width" color="brand" label="Фамилия" />
      </div>

      <div class="q-mb-md">
        <q-input v-model="userData.secondName" outlined class="full-width" color="brand" label="Отчество" />
      </div>

      <div>
        <q-input 
          v-model="userData.phone"
          mask="+# (###) ### ####"
          unmasked-value
          outlined 
          class="full-width" color="brand" label="Номер телефона" 
        />
      </div>

      <div class="flex">
        <q-btn 
          @click="icon = true"  
          class="q-mt-xl q-mx-auto rounded-md text-white bg-brand max-w-300 q-py-sm"
        >
          Запрос на измение данных
        </q-btn>
      </div>
    </div>

    <q-dialog v-model="icon">
      <q-card style="width: 500px" class="rounded-md q-px-md q-py-sm">
        <q-card-section class="row items-center q-pb-none">
          <q-space />
          <q-btn color="brand" icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-h5 q-mb-md">
            Вы уверены что хотите изменить данные?
          </div>
          <div>
            Измение данных произайдет после подтверждение администратора
          </div>
        </q-card-section>

        <q-card-section class="flex q-gutter-md">
          <q-btn @click="icon = false" no-caps flat color="brand" class="q-py-sm rounded-sm" >
            Нет
          </q-btn>
          <q-btn no-caps flat color="white" class="bg-brand q-py-sm q-px-md rounded-md">
            Да
          </q-btn>
        </q-card-section>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script>
import PageTitle from 'src/components/PageTitle.vue';
export default {
  components: { PageTitle },
  name: 'Profile',
  data() {
    return {
      icon: false,
      userData: {
        firstName: '',
        lastName: '',
        secondName: '',
        phone: ''
      }
    }
  },
  mounted() {
    if(this.$store.state.user.user) {
      const user = this.$store.state.user.user

      this.userData.firstName = user.userProfile.firstName
      this.userData.lastName = user.userProfile.lastName
      this.userData.secondName = user.userProfile.secondName
      this.userData.phone = user.phone
    }
  }
}
</script>
