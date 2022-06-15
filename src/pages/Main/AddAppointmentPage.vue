<template>
  <q-page class="q-pa-lg">
    <page-title>Добавить должность</page-title>

    <go-back-button/>

    <div class="bg-white rounded-sm shadow-block q-pb-lg">
      <div class="q-pa-lg">
        <q-input flat outlined color="brand" label="Название" v-model="title" class="max-w-300 q-mb-lg"/>
        <q-input autogrow flat outlined color="brand" label="Описание" v-model="description" class="max-w-300 q-mb-lg"/>
      </div>

      <p class="text-body2 text-weight-bold q-pl-lg">Выбор ролей</p>

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
            <q-checkbox color="brand" v-model="selectedRoles" :val="item.id" />
            {{item.shortDescription}}
          </div>
          <div class="flex-1 q-pa-md">
            {{item.description}}
          </div>
        </div>
      </div>

      <div class="q-mt-lg q-mr-lg">
        <q-btn 
          @click="create"
          no-caps flat color="white" 
          class="bg-brand q-py-sm q-px-xl rounded-md q-ml-auto block"
        >
          Добавить
        </q-btn>
      </div>

    </div>
  </q-page>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import PageTitle from 'components/PageTitle.vue'
import GoBackButton from 'src/components/UI/GoBackButton.vue'
import { TokenService } from 'src/services/token.service'

export default {
  components: { PageTitle, GoBackButton },
  data() {
    return {
      roleModel: null,
      title: null,
      description: null,
      selectedRoles: []
    }
  },
  computed: {
    ...mapGetters(
      'appointment', 
      ['roleList']
    ),
  },
  mounted() {
    this.loadRoles()
  },
  methods: {
    ...mapActions(
      'appointment', 
      [
        'getRolesList', 
        'createAppointment'
      ]
    ),

    loadRoles() {
      const phone = TokenService.getPhone()
      this.getRolesList(phone)
    },
    
    create() {
      let data = {
        title: this.title,
        description: this.description,
        roleIdList: this.selectedRoles,
      }

      const phone = TokenService.getPhone()

      this.createAppointment({phone, data})
    }
  }
}
</script>