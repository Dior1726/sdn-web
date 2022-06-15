<template>
  <q-page class="q-pa-lg">
    <page-title>Редактировать должность</page-title>

    <go-back-button/>

    <div class="bg-white rounded-sm shadow-block" v-if="appointment">
      <div class="q-pa-lg">
        <div class="q-mb-sm"> 
          <span class="text-grey-6">Актуальное название: </span>
          <span>{{appointment.title}}</span>
        </div>
        <q-input 
          flat outlined 
          color="brand" 
          label="Новое название" class="max-w-300 q-mb-lg"
          v-model="newTitle"
        />

        <div class="q-mb-sm"> 
          <span class="text-grey-6">Актуальное описание: </span>
          <span>{{appointment.description}}</span>
        </div>
        <q-input
          autogrow flat 
          outlined color="brand"
          label="Новое описание" class="max-w-300 q-mb-lg"
          v-model="newDescription"
        />

        <div class="q-mx-lg q-pb-lg flex justify-end">
          <q-btn 
            @click="editAppointmentText"
            no-caps flat 
            color="white" 
            class="bg-brand q-py-sm q-px-xl rounded-md "
          >
            Сохранить
          </q-btn>
        </div>
      </div>

      <p class="q-pl-lg">Выбор ролей</p>

      <div class="scroll-div">
        <div class="flex border-bottom min-w-800">
          <div class="q-pl-xl max-w-350 border-right q-py-sm">
            Название роли
          </div>
          <div class="q-pl-xl flex-1 q-py-sm">
            Описание роли
          </div>
        </div>

        <div class="flex border-bottom min-w-800" v-for="item in roleList" :key="item.id">
          <div class="flex items-center max-w-350 justify-start border-right q-pl-lg">
            <q-checkbox color="brand" v-model="checkedRoles" :val="item.id" />
            {{item.shortDescription}}
          </div>
          <div class="flex-1 q-pa-md">
            {{item.description}}
          </div>
        </div>
      </div>

      <div class="q-mx-lg q-py-lg flex justify-end">
        <q-btn 
          @click="editAppointmentRoles"
          no-caps flat 
          color="white" 
          class="bg-brand q-py-sm q-px-xl rounded-md "
        >
          Сохранить
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import PageTitle from 'src/components/PageTitle.vue'
import { mapActions, mapGetters } from 'vuex'
import GoBackButton from 'src/components/UI/GoBackButton.vue'
import { TokenService } from 'src/services/token.service'

export default {
  components: { PageTitle, GoBackButton },
  props: ['appointment'],
  data() {
    return {
      newTitle: null,
      newDescription: null,
      checkedRoles: []
    }
  },
  mounted() {
    if(!this.appointment) {
      this.$router.go(-1)
    } else {
      this.checkRoles()
    }
  },
  computed: {
    ...mapGetters('appointment', ['roleList']),
  },
  methods: {
    ...mapActions(
      'appointment', 
      [
        'updateAppointmentText', 
        'updateAppointmentRoles'
      ]
    ),

    checkRoles() {
      const allRoles = this.roleList
      const userRoles = this.appointment.roleList

      allRoles.forEach((item) => {
        userRoles.forEach((userRole) => {
          if(item.id === userRole.id) {
            this.checkedRoles.push(item.id)
          }
        })
      })
    },

    editAppointmentText() {
      const data = {
        id: this.appointment.id,
        title: this.newTitle,
        description: this.newDescription,
        isActive: true
      }
      const phone = TokenService.getPhone()

      this.updateAppointmentText({phone, data})
    },

    editAppointmentRoles() {
      const phone = TokenService.getPhone()
      const id = this.appointment.id
      const roles = this.checkedRoles

      this.updateAppointmentRoles({phone, id, roles})
    },
  }
}
</script>