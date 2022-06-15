<template>
  <q-page class="q-pa-lg">

    <page-title>Добавление сотрудника</page-title>

    <go-back-button/>

    <div class="bg-white rounded-md q-pa-lg max-w-700 shadow-block">
      <q-input 
        outlined color="brand" 
        label="Имя" 
        class="q-mb-lg"
        v-model="newEmployer.profile.firstName"
      />

      <q-input 
        outlined color="brand" 
        label="Фамилия" 
        class="q-mb-lg"
        v-model="newEmployer.profile.lastName"
      />

      <q-input 
        outlined color="brand" 
        label="Отчество" 
        class="q-mb-lg"
        v-model="newEmployer.profile.secondName"
      />

      <q-input 
        type="date"
        outlined color="brand" 
        label="Дата рождения"
        stack-label
        class="q-mb-md"
        v-model="newEmployer.profile.birthday"
      />
      
      <q-input 
        outlined color="brand" 
        label="ИИН" 
        type="number"
        class="q-mb-xs"
        v-model="newEmployer.iin"
        :rules="[ val => val.length <= 12 && val.length >= 12 || 'Максимум 12 цифры']"
      />
      
      <q-input 
        outlined color="brand" 
        label="Номер телефона" 
        mask="+# (###) ### ####" unmasked-value 
        class="q-mb-lg"
        v-model="newEmployer.phone"
      />

      <q-select 
        outlined class="flex-1 min-w-200 q-mb-lg"
        bg-color="white" color="brand" 
        :options="cityList" label="Город" v-model="newEmployer.profile.cityId" 
        :option-label="(item) => item.name"
        :option-value="(item) => item.id"
        emit-value
        map-options
      />
      
      <q-select 
        outlined class="flex-1 min-w-200 q-mb-lg"
        bg-color="white" color="brand" 
        :options="appointmentsOption" label="Должность" v-model="newEmployer.appointmentId" 
        :option-label="(item) => item === null ? 'Нет данных' : item.title"
        :option-value="(item) => item === null ? 'Нет данных' : item.id"
        emit-value
        map-options
        :stack-label="!appointmentsOption"
      />
      
      <q-select 
        outlined class="flex-1 min-w-200 q-mb-lg"
        bg-color="white" color="brand" 
        :options="projectsOption" label="Проект" v-model="newEmployer.projectId" 
        :option-label="(item) => item === null ? 'Нет данных' : item.projectsName"
        :option-value="(item) => item === null ? 'Нет данных' : item.id"
        emit-value
        map-options
        :stack-label="!projectsOption"
      />

      <q-btn 
        no-caps flat 
        color="white" 
        class="bg-brand q-py-sm q-px-xl rounded-md block q-ml-auto"
        @click="create"
      >
        Добавить
      </q-btn>
    </div>

  </q-page>
</template>

<script>
import PageTitle from 'src/components/PageTitle.vue'
import { mapActions, mapGetters } from 'vuex'
import cities from 'src/city.json'
import { TokenService } from 'src/services/token.service'
import GoBackButton from 'src/components/UI/GoBackButton.vue'

export default {
  components: {PageTitle, GoBackButton},
  data() {
    return {
      newEmployer: {
        iin: null,
        phone: null,
        appointmentId: null,
        projectId: null,
        profile: {
          firstName: null,
          lastName: null,
          secondName: null,
          birthday: null,
          cityId: null
        }
      },
      
      cityList: cities.cities,
      
      appointmentsOption: null,
      projectsOption: null
    }
  },
  created() {
    this.loadData()
  },
  mounted() {
    this.appointmentsOption = this.appointmentList
    this.projectsOption = this.projects
  },
  computed: {
    ...mapGetters('project', ['projects']),
    ...mapGetters('appointment', ['appointmentList']),
  },
  methods: {
    ...mapActions('project', ['getProjectList']),
    ...mapActions('appointment', ['getAppointmentList']),
    ...mapActions('employer', ['createEmployer']),

    create() {
      const phone = 'Nzc3NTE0Mjg0Mjk=' 
      const data = this.newEmployer
      this.createEmployer({phone, data})
    },
    
    loadData() {
      const phone = TokenService.getPhone()

      this.getAppointmentList(phone)
      this.getProjectList(phone)
    }
  }
}
</script>