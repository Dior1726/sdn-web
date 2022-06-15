<template>
  <q-page class="q-pa-lg">
    <page-title>Просмотр заявок</page-title>

    <div class="row justify-between q-gutter-lg q-mb-lg">
      <new-orders-block @showModal="showModal"/>
      <new-orders-block @showModal="showModal"/>
      <new-orders-block @showModal="showModal"/>
    </div>

    <last-counter-parties/>

    <q-dialog v-model="icon">
      <q-card style="width: 700px" class="rounded-md q-px-md q-py-sm">
        <q-card-section class="row items-center q-pb-none q-mb-md">
          <div class="text-h6 absolute-center q-mt-sm">Заявка №153254</div>
          <q-space />
          <q-btn color="brand" icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <div style="border: 1px solid #ccc;" class="q-pa-sm rounded-sm q-mb-md">
            <span class="text-caption text-grey-6" style="font-size: 12px">Название заявки</span>
            <div class="font-weight-medium" style="font-size: 16px;">Название заявки</div>
          </div>

          <div style="border: 1px solid #ccc;" class="q-pa-sm rounded-sm q-mb-md">
            <span class="text-caption text-grey-6" style="font-size: 12px">Вид заявки</span>
            <div class="font-weight-medium" style="font-size: 16px;">Фундамент</div>
          </div>

          <div style="border: 1px solid #ccc;" class="q-pa-sm rounded-sm q-mb-md">
            <span class="text-caption text-grey-6" style="font-size: 12px">Проект</span>
            <div class="font-weight-medium" style="font-size: 16px;">ЖК “Медина”</div>
          </div>

          <div style="border: 1px solid #ccc;" class="q-pa-sm rounded-sm q-mb-md">
            <span class="text-caption text-grey-6" style="font-size: 12px">Отправитель</span>
            <div class="font-weight-medium" style="font-size: 16px;">Иван Иванов</div>
          </div>

          <div style="border: 1px solid #ccc;" class="q-pa-sm rounded-sm q-mb-md">
            <span class="text-caption text-grey-6" style="font-size: 12px">Дата подачи заявки</span>
            <div class="font-weight-medium" style="font-size: 16px;">22,02,2022 15:25</div>
          </div>

          <div style="border: 1px solid #ccc;" class="q-pa-sm rounded-sm q-mb-md">
            <span class="text-caption text-grey-6" style="font-size: 12px">Описание</span>
            <div class="font-weight-medium" style="font-size: 16px;">
              Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Всеми вопроса переписали родного рот текста бросил живет своих вдали!
            </div>
          </div>

          <div style="border: 1px solid #ccc;" class="q-pa-sm rounded-sm q-mb-md">
            <span class="text-caption text-grey-6" style="font-size: 12px">Комментарий</span>
            <div class="font-weight-medium" style="font-size: 16px;">
              Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.
            </div>
          </div>
        </q-card-section>

        <q-card-section class="flex q-gutter-lg q-mb-md">
          <q-btn no-caps flat color="white" class="bg-dark-gray q-py-sm rounded-sm flex-1" >Отменить</q-btn>
          <q-btn no-caps flat color="white" class="bg-brand q-py-sm rounded-sm flex-1">Принять заявку</q-btn>
        </q-card-section>
      </q-card>
    </q-dialog>
  
  </q-page>
</template>

<script>
import NewOrdersBlock from 'src/components/HomePageComponents/NewOrdersBlock.vue'
import LastCounterParties from 'src/components/HomePageComponents/LastCounterParties.vue'
import PageTitle from 'src/components/PageTitle.vue'
export default {
  name: 'Index',
  components: {
    NewOrdersBlock,
    LastCounterParties,
    PageTitle
  },
  data() {
    return {
      icon: false
    }
  },
  methods: {
    showModal() {
      this.icon = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
