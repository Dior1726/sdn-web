<template>
  <q-page class="q-pa-lg">
    <page-title>Регистрация поставщиков</page-title>

    <div class="q-mb-lg">
      <q-breadcrumbs class="text-grey" active-color="text-grey">
        <template v-slot:separator>
          <q-icon
            size="1.2em"
            name="arrow_forward"
            color="text-grey"
          />
        </template>

        <q-breadcrumbs-el label="Главная"/>
        <q-breadcrumbs-el label="Поставщики"/>
        <q-breadcrumbs-el label="Регистрация поставщиков"/>
      </q-breadcrumbs>
    </div>

    <div class="" style="max-width: 600px">
      <div class="q-mb-sm">
        <q-input  
          v-model="userData.iin" outlined class="full-width" 
          bg-color="white" color="brand" label="ИИН/БИН"
          :rules="[ val => val.length <= 12 && val.length >= 12 || 'Максимум 12 цифры']"
        />
      </div>

      <div class="q-mb-lg">
        <q-input 
          v-model="userData.nameOfCompany" outlined 
          class="full-width" bg-color="white" color="brand" label="Название компании"
        />
      </div>

      <div class="q-mb-lg">
        <q-input 
          v-model="userData.contract" outlined 
          class="full-width" bg-color="white" color="brand" label="Подписание довогова"
        />
      </div>

      <div class="q-mb-lg">
        <q-input 
          v-model="userData.otherInformation" outlined type="textarea"
          class="full-width" bg-color="white" color="brand" label="Доп.  информация" 
        />
      </div>

      <div class="flex flex-wrap" style="gap: 20px">
        <q-btn v-go-back="'/providers'" class="q-mx-auto rounded-sm flex-1 text-white bg-grey q-py-sm">
          Назад
        </q-btn>
        <q-btn @click="icon = true" class="q-mx-auto rounded-sm flex-1 text-white bg-brand q-py-sm">
          Создать
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
            Поставщик зарегистрирован
          </div>
          <div>
            Измение данных произайдет после подтверждение администратора
          </div>
        </q-card-section>

        <q-card-section class="flex q-gutter-md">
          <q-btn @click="icon = false" no-caps flat color="white" class="bg-brand q-py-sm q-px-md rounded-md">
            Выйти
          </q-btn>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import PageTitle from "src/components/PageTitle.vue"

export default {
  components: { PageTitle },
  data() {
    return {
      icon: false,
      userData: {
        iin: null,
        nameOfCompany: null,
        contract: null,
        otherInformation: null
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>