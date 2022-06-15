<template>
  <div class="q-mt-lg">
    <q-tabs
      style="max-width: 700px"
      v-model="tab"
      class="text-black-light bg-light-blue rounded-md"
      active-color="white"
      active-bg-color="brand"
      align="justify"
      indicator-color="transparent"
      no-caps
    >
      <q-tab class="q-py-md" name="mails" label="Новые заявки" />
      <q-tab class="q-py-md" name="alarms" label="Заявки в обработке" />
      <q-tab class="q-py-md" name="movies" label="Забор товара" />
      <q-tab class="q-py-md" name="done" label="Отработанные заявки" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated class="q-mt-lg rounded-md shadow-block q-pa-none">
      
      <q-tab-panel name="mails" class="q-pa-none" style="min-width: 700px">
        <tab-table/>
      </q-tab-panel>

      <q-tab-panel name="alarms" class="q-pa-none" style="min-width: 700px">
        <tab-table/>
      </q-tab-panel>

      <q-tab-panel name="movies" class="q-pa-none" style="min-width: 700px">
        <tab-table/>
      </q-tab-panel>

      <q-tab-panel name="done" class="q-pa-none" style="min-width: 700px">
        <tab-table/>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import TabTable from "./TabTable.vue"

export default {
  components: { 
    TabTable 
  },
  data () {
    return {
      tab: 'mails',
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.q-tabs, .q-tabs__content {
  border-radius: 12px;
}
</style>