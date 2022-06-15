<template>
  <q-page class="q-pa-lg">
    <page-title>Должности</page-title>
    
    <div class="flex justify-between gap-6 items-center flex-wrap q-mb-lg">
      
      <div class="flex items-center gap-4 max-w-350 flex-wrap">
        <q-input 
          dense outlined label="Поиск" 
          bg-color="white" class="flex-1 min-w-200" 
          color="brand" 
        > 
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>

      <q-btn
        to="add_appointment_page"
        flat
        class="q-py-xs bg-brand rounded-sm"
        color="white"
        no-caps
      >
        <q-icon name="add" class="q-mr-sm" />
        Добавить должность
      </q-btn>
      
    </div>

    <div class="scroll-div bg-white rounded-md shadow-block">
      <div class="min-w-700"> 
        <div class="border-bottom border-2">
          <div class="q-pa-md q-pl-xl">Должность</div>
        </div>

        <div class="q-pa-md">
          <div 
            class="q-pa-md flex justify-between items-center q-mb-md bg-grey-2 rounded-sm"
            v-for="item in appointmentList" :key="item.id"  
          >
            <div>
              {{item.title}}
            </div>
            <div class="flex items-center gap-4">
              <q-btn
                :to="{name: 'position_page_item', params: {id: item.id, appointment: item}}"
                flat
                class="bg-brand block text-white rounded-sm"
                no-caps
              >
                <q-icon name="edit"/>
              </q-btn>
              
              <q-btn
                @click="deleteById(item.id)"
                flat
                class="bg-red block text-white rounded-sm"
                no-caps
              >
                <q-icon name="delete"/>
              </q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import PageTitle from 'src/components/PageTitle.vue'
import { mapActions, mapGetters } from 'vuex'
import { TokenService } from 'src/services/token.service'

export default {
  components: { PageTitle },
  data() {
    return {}
  },
  mounted() {
    this.loadRoles()
    this.getPositions()
  },
  computed: {
    ...mapGetters('appointment', ['appointmentList']),
  },
  methods: {
    ...mapActions(
      'appointment', 
      [
        'getAppointmentList', 
        'deleteAppointment', 
        'getRolesList'
      ]
    ),
    
    getPositions() {
      const phone = TokenService.getPhone()
      this.getAppointmentList(phone)
    },

    deleteById(id) {
      let data = {
        id,
        phone: TokenService.getPhone()
      }
      
      this.deleteAppointment(data)
    },

    loadRoles() {
      const phone = TokenService.getPhone()
      this.getRolesList(phone)
    },
  },
}
</script>