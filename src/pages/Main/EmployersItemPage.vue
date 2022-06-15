<template>
  <q-page class="q-pa-lg">

    <page-title> 
      Изменить сотрудника
    </page-title>

    <go-back-button/>

    <div class="bg-white rounded-md shadow-block max-w-900">
      
      <!-- change user profile -->
      <h6 class="q-my-auto q-ml-lg q-pt-lg">Изменить основные данные</h6>
      <div class="q-pa-lg flex flex-wrap gap-6" v-if="currentEmployer">
        
        <div class="min-w-300 flex-1">
          <div class="q-mb-sm q-ml-lg"> 
            {{currentEmployer.profile.firstName}}
          </div>
          <q-input 
            flat outlined 
            color="brand" 
            label="Новая имя"
            v-model="firstName"
          />
        </div>

        <div class="min-w-300 flex-1">
          <div class="q-mb-sm q-ml-lg"> 
            {{currentEmployer.profile.lastName}}
          </div>
          <q-input 
            flat outlined 
            color="brand" 
            label="Новая фамилия"
            v-model="lastName"
          />
        </div>

        <div class="min-w-300 flex-1">
          <div class="q-mb-sm q-ml-lg"> 
            {{currentEmployer.profile.secondName}}
          </div>
          <q-input 
            flat outlined 
            color="brand" 
            label="Новое отчество"
            v-model="secondName"
          />
        </div>

        <div class="min-w-300 flex-1">
          <div class="q-mb-sm q-ml-lg"> 
            {{currentEmployer.phone}}
          </div>
          <q-input 
            outlined color="brand" 
            label="Номер телефона" 
            mask="+# (###) ### ####" unmasked-value 
            v-model="phone"
          />
        </div>

        <div class="min-w-300 flex-1">
          <div class="q-mb-sm q-ml-lg"> 
            {{currentEmployer.iin}}
          </div>
          <q-input 
            outlined color="brand" 
            label="ИИН" 
            type="number"
            :rules="[ val => val.length <= 12 && val.length >= 12 || 'Максимум 12 цифры']"
            v-model="iin"
          />
        </div>

        <div class="min-w-300 flex-1">
          <div class="q-mb-sm q-ml-lg"> 
            {{currentEmployer.profile.birthday | dateFilter}}
          </div>
          <q-input 
            type="date"
            outlined color="brand" 
            label="Дата рождения"
            stack-label
            v-model="birthday"
          />
        </div>
      </div>
      <!-- save Button -->
      <div class="q-px-lg flex justify-end q-pb-lg border-bottom">
        <q-btn 
          no-caps flat 
          color="white" 
          class="bg-brand q-px-xl  q-py-sm rounded-md"
          @click="updateText"
        >
          Сохранить
        </q-btn>
      </div>

      <!-- Appointment chabge select -->
      <h6 class="q-my-auto q-ml-lg q-pt-lg">Изменить должность</h6>
      <div class="q-pa-lg flex gap-6 items-end justify-end border-bottom">
        <div class="flex-1">
          <div class="q-mb-sm"> 
            <span class="text-grey-6">Текущая должность: </span>
            <span>{{currentEmployer.appointment.title}}</span>
          </div>
          <q-select 
            outlined class="flex-1 min-w-200"
            bg-color="white" color="brand" 
            :options="appointmentsOption" label="Выберите должность" 
            :option-label="(item) => item === null ? 'Нет данных' : item.title"
            :option-value="(item) => item === null ? 'Нет данных' : item.id"
            emit-value
            map-options
            :stack-label="!appointmentsOption"
            v-model="appointmentId"
          />
        </div>

        <q-btn 
          no-caps flat 
          color="white" 
          class="bg-brand q-px-xl  q-py-sm rounded-md"
          @click="updateAppointment"
        >
          Сохранить
        </q-btn>
      </div>

      <!-- Add to project -->
      <h6 class="q-my-auto q-ml-lg q-pt-lg">Добавить в проект</h6>
      <div class="q-pa-lg flex gap-6 items-end justify-end border-bottom">
        <div class="flex-1">
          <q-select 
            outlined class="flex-1 min-w-200"
            bg-color="white" color="brand" 
            :options="projectsOption" label="Выберите проект"
            :option-label="(item) => item === null ? 'Нет данных' : item.projectsName"
            :option-value="(item) => item === null ? 'Нет данных' : item.id"
            emit-value
            map-options
            :stack-label="!projectsOption"
            v-model="projectId"
          />
        </div>

        <q-btn 
          no-caps flat 
          color="white" 
          class="bg-brand q-px-xl  q-py-sm rounded-md"
          @click="addToProject"
        >
          Сохранить
        </q-btn>
      </div>

      <!-- Delete from project -->
      <div class="q-pa-lg q-mt-md border-bottom">

        <h6 class="q-my-auto" >Проекты в которых участвует сотрудник</h6>

        <div v-if="employerProjects.length > 0">
          <div
            v-for="project in employerProjects"
            :key="project.id"
            class="q-my-md bg-grey-4 q-pa-md rounded-md flex justify-between items-center"
          >
            <div>
              {{project.projectsName}}
            </div>
            <div>
              <q-btn 
                no-caps flat 
                color="white" 
                class="bg-red flex-1 rounded-sm"
                @click="deleteFromProject(project.id)"
              >
                Удалить из проекта
              </q-btn>
            </div>
          </div>
        </div>

        <div v-else>
          ---------------------
        </div>

      </div>
      
      <h6 class="q-my-auto q-ml-lg q-pt-lg">Действие</h6>
      <div class="flex justify-between gap-6 q-pa-lg">
        <q-btn 
          no-caps flat 
          color="white" 
          class="bg-dark-gray q-py-sm flex-1 rounded-md"
          @click="banEmployerById"  
        >
          Заблокировать
        </q-btn>
        <q-btn 
          no-caps flat 
          color="white" 
          class="bg-red q-py-sm flex-1 rounded-md"
          @click="deleteEmployerById"
        >
          Удалить
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import GoBackButton from 'src/components/UI/GoBackButton.vue'
import PageTitle from 'src/components/PageTitle.vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { TokenService } from 'src/services/token.service'

export default {
  components: {
    GoBackButton,
    PageTitle
  },
  data() {
    return {
      appointmentsOption: null,
      projectsOption: null,

      firstName: null,
      lastName: null,
      secondName: null,
      phone: null,
      iin: null,
      birthday: null,
      
      appointmentId: null,
      projectId: null,
    }
  },
  created() {
    this.loadData()
  },
  mounted() {    
    if(!this.currentEmployer) {
      this.$router.go(-1)
    }

    this.appointmentsOption = this.appointmentList
    this.projectsOption = this.projects
  },
  computed: {
    ...mapGetters('project', ['projects']),
    ...mapGetters('appointment', ['appointmentList']),
    ...mapGetters('employer', ['employerProjects', 'currentEmployer'])
  },
  methods: {
    ...mapActions('project', ['getProjectList']),
    ...mapActions('appointment', ['getAppointmentList']),
    ...mapActions(
      'employer', 
      [
        'deleteEmployer', 
        'banEmployer', 
        'updateEmployer', 
        'updateEmployerAppointment',
        'addEmployerToProject',
        'deleteEmployerFromProject'
      ]
    ),

    loadData() {
      const phone = TokenService.getPhone()

      this.getAppointmentList(phone)
      this.getProjectList(phone)
    },

    // update user profile info
    updateText() {
      const phone = TokenService.getPhone()
      const userId = this.currentEmployer.id
      const data = {
        phone: this.phone,
        iin: this.iin,
        profile: {
          lastName: this.lastName,
          firstName: this.firstName,
          secondName: this.secondName,
          birthday: this.birthday
        }
      }

      this.updateEmployer({phone, userId, data})
      
      this.firstName = null
      this.lastName = null
      this.secondName = null
      this.iin = null
      this.phone = null
      this.birthday = null
    },

    // Update user appointment
    updateAppointment() {
      const phone = TokenService.getPhone()
      const userId = this.currentEmployer.id
      const appointmentId = this.appointmentId
      let appointment

      this.appointmentsOption.forEach((item) => {
        if(item.id === appointmentId) {
          appointment = item
        }
      })

      this.updateEmployerAppointment({phone, userId, appointmentId, appointment})
      this.appointmentId = null
    },

    // Add user to Project
    addToProject() {
      const phone = TokenService.getPhone()
      const userId = this.currentEmployer.id
      const projectId = this.projectId
      let project
      
      this.projectsOption.forEach((item) => {
        if (item.id === projectId) {
          project = item
        }
      })

      this.addEmployerToProject({phone, userId, projectId, project})
      this.projectId = null
    },

    // Delete user from project
    deleteFromProject(projectId) {
      const phone = TokenService.getPhone()
      const userId = this.currentEmployer.id

      this.deleteEmployerFromProject({phone, userId, projectId})
    },

    // Delete user 
    deleteEmployerById() {
      const id = this.currentEmployer.id
      const phone = TokenService.getPhone()
      
      this.deleteEmployer({phone, id})
    },

    // Ban user
    banEmployerById() {
      const phone = TokenService.getPhone()
      const id = this.currentEmployer.id
      
      this.banEmployer({phone, id})
    },
  }
}
</script>