<template>
  <q-page class="q-pa-lg">
    <page-title>Поставщики</page-title>

    <router-link to="/addprovider" v-ripple class="block cursor-pointer max-w-350 full-width rounded-md bg-brand text-white q-pa-md relative-position">
      <q-icon name="note_add" size="24px" />
      <span class="absolute-center">Внести поставщика</span>
    </router-link>

    <div class="q-mt-lg">
      <q-tabs
        style="max-width: 700px"
        v-model="tab"
        class="text-black-light bg-light-blue rounded-md overflow-hidden"
        active-color="white"
        active-bg-color="brand"
        align="justify"
        indicator-color="transparent"
        no-caps
      >
        <q-tab class="q-py-md" name="mails" label="Существующее поставщики" />
        <q-tab class="q-py-md" name="alarms" label="Черный список поставщиков" />
      </q-tabs>

      <q-tab-panels v-model="tab" animated class="q-mt-lg rounded-md shadow-block q-pa-none">
        
        <q-tab-panel name="mails" class="q-pa-none" style="min-width: 700px">
          <div class="flex justify-between items-center border-bottom">
            <div class="q-pa-md flex-1 text-center">Название</div>
            <div class="q-pa-md flex-1 text-center">Юр. назв-е</div>
            <div class="q-pa-md flex-1 text-center">Дата подписание</div>
            <div class="q-pa-md flex-1 text-center">Доп. инфо</div>
            <div class="q-pa-md flex-1 text-center">Редактировать</div>
          </div>

          <div class="q-px-md q-pt-md">
            <div 
              class="flex justify-between items-center q-mb-md"
              v-for="item, n in 10" :key="n"  
            >
              <div class="q-py-xs flex-1 text-center">Наиеменование контр агента</div>
              <div class="q-py-xs flex-1 text-center">Юр.Название</div>
              <div class="q-py-xs flex-1 text-center">12,02,2022 г.</div>
              <div class="q-py-xs flex-1 text-center">Дополнительное информация</div>
              <div class="q-py-xs flex-1 text-center">Изменить</div>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="alarms" class="q-pa-none" style="min-width: 700px">
          <div class="flex justify-between items-center border-bottom">
            <div class="q-pa-md flex-1 text-center">Название</div>
            <div class="q-pa-md flex-1 text-center">Юр. назв-е</div>
            <div class="q-pa-md flex-1 text-center">Дата подписание</div>
            <div class="q-pa-md flex-1 text-center">Доп. инфо</div>
            <div class="q-pa-md flex-1 text-center">Редактировать</div>
          </div>

          <div class="q-px-md q-pt-md">
            <div 
              class="flex justify-between items-center q-mb-md"
              v-for="item, n in 10" :key="n"  
            >
              <div class="q-py-xs flex-1 text-center">Наиеменование контр агента</div>
              <div class="q-py-xs flex-1 text-center">Юр.Название</div>
              <div class="q-py-xs flex-1 text-center">12,02,2022 г.</div>
              <div class="q-py-xs flex-1 text-center">Дополнительное информация</div>
              <div class="q-py-xs flex-1 text-center">Изменить</div>
            </div>
          </div>
        </q-tab-panel>

      </q-tab-panels>
    </div>

  </q-page>
</template>

<script>
import PageTitle from 'src/components/PageTitle.vue'
export default {
  components: { PageTitle },
  name: 'Providers',
  data () {
    return {
      tab: 'mails'
    }
  }
}
</script>
