<template>
  <q-page class="q-pa-lg">
    <h3 class="text-bold q-my-none q-mb-lg">Добавление сотрудника</h3>

    <div class="q-pa-xl bg-white shadow-block rounded-sm q-mx-auto" style="max-width: 700px">
      <!-- <div class="flex column items-center q-mb-lg">
        <q-avatar size="100px">
          <img src="https://cdn.quasar.dev/img/avatar1.jpg">
        </q-avatar>
        <div class="text-center q-my-sm">
          Изменить фото
        </div>
      </div> -->

      <div class="q-mb-md">
        <q-input v-model="userData.name" outlined class="full-width" color="brand" label="Имя" />
      </div>

      <div class="q-mb-md">
        <q-input v-model="userData.lastName" outlined class="full-width" color="brand" label="Фамилия" />
      </div>

      <div class="q-mb-md">
        <q-input 
          v-model="userData.phoneNumber"
          mask="+# (###) ### ####"
          unmasked-value
          outlined 
          class="full-width" color="brand" label="Номер телефона" 
        />
      </div>

      <div class="q-mb-md">
        <q-input v-model="userData.surName" outlined class="full-width" color="brand" label="Роль" />
      </div>

      <div class="q-mb-md">
        <q-input v-model="userData.surName" outlined class="full-width" color="brand" label="Должность" />
      </div>

      <div class="flex">
        <q-btn 
          class="q-mt-md q-mx-auto rounded-md text-white bg-brand max-w-300 q-py-sm"
        >
          Создать
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import NewPostInput from 'src/components/NewsPageComponents/NewPostInput.vue'
import NewsItem from 'src/components/NewsPageComponents/NewsItem.vue'
import ImportantNews from 'src/components/NewsPageComponents/ImportantNews.vue'
import NextWeekend from 'src/components/NewsPageComponents/NextWeekend.vue'
export default {
  components: { 
    NewPostInput,
    NewsItem,
    ImportantNews,
    NextWeekend 
  },
  name: 'News',
  data() {
    return {
      userData: {
        name: '',
        lastName: '',
        surName: '',
        phoneNumber: ''
      }
    }
  }
}
</script>
