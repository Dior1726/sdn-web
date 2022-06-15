<template>
  <q-page class="q-pa-lg">
    <page-title>Сотрудники</page-title>
    
    <div class="flex justify-between gap-6 items-center flex-wrap q-mb-lg">
      
      <div class="flex gap-4 max-w-500 flex-wrap">
        <q-input 
          dense outlined label="Поиск" 
          bg-color="white" class="flex-1 min-w-200" 
          color="brand" 
        > 
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>

        <q-select 
          outlined dense class="flex-1 min-w-200"
          bg-color="white" color="brand" 
          :options="options" label="Проект" v-model="select" 
        />
      </div>

      <q-btn
        to="/add_employer_page"
        flat
        class="q-py-xs bg-brand rounded-sm"
        color="white"
        no-caps
      >
        <q-icon name="add" class="q-mr-sm" />
        Добавить сотрудника
      </q-btn>
    </div>

    <main-table :body="employers" />
  </q-page>
</template>

<script>
import PageTitle from 'src/components/PageTitle.vue'
import MainTable from 'src/components/MainTable.vue'
import { mapActions, mapGetters } from 'vuex'
import { TokenService } from 'src/services/token.service'


export default {
  components: { PageTitle, MainTable },
  data() {
    return {
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      select: '',
    }
  },
  created() {
    this.getEmployers()
  },
  computed: {
    ...mapGetters('employer', ['employers']),
  },
  methods: {
    ...mapActions('employer', ['getEmployerList']),

    getEmployers() {
      const phone = TokenService.getPhone()
      this.getEmployerList(phone)
    },
  }
}
</script>