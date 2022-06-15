<template>
  <div>
    <div class="flex justify-between items-center border-bottom">
      <div class="q-pa-md flex-1 text-center">Вид заявки</div>
      <div class="q-pa-md flex-1 text-center">Этап</div>
      <div class="q-pa-md flex-1 text-center">Отправитель</div>
      <div class="q-pa-md flex-1 text-center">Проект</div>
      <div class="q-pa-md flex-1 text-center">Дата</div>
      <div class="q-pa-md flex-1 text-center">Описание</div>
    </div>

    <div class="q-px-md q-pt-md">
      <div 
        @click="showModal"
        class="flex justify-between cursor-pointer items-center q-mb-md bg-grey-2 rounded-sm"
        v-for="item, n in 5" :key="n"  
      >
        <div class="q-py-md q-px-sm flex-1 text-center">Материал</div>
        <div class="q-py-md q-px-sm flex-1 text-center">Название обор.</div>
        <div class="q-py-md q-px-sm flex-1 text-center">Иван Иванов</div>
        <div class="q-py-md q-px-sm flex-1 text-center">ЖК Медина</div>
        <div class="q-py-md q-px-sm flex-1 text-center">12,03,2022 <br> 13:00</div>
        <div class="q-py-md q-px-sm flex-1 text-center">Далеко-далеко за словесными.</div>
      </div>
    </div>

    <!-- Main modal -->
    <q-dialog v-model="icon">
      <q-card style="width: 700px" class="rounded-md q-px-md q-py-sm">
        <!-- Modal Header -->
        <q-card-section class="row items-center q-pb-none q-mb-md">
          <div class="text-h6 absolute-center q-mt-sm">Заявка №153254</div>
          <q-space />
          <q-btn color="brand" icon="close" flat round dense v-close-popup />
        </q-card-section>

        <!-- Modal Body -->
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

        <!-- Modal Actions -->
        <q-card-section class="flex q-gutter-lg q-mb-md">
          <q-btn @click="cancelHandler" no-caps flat color="white" class="bg-dark-gray q-py-sm rounded-md flex-1" >Отменить</q-btn>
          <q-btn no-caps flat color="white" class="bg-brand q-py-sm rounded-md flex-1">Принять заявку</q-btn>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Cancel Modal -->
    <q-dialog v-model="cancelModal">
      <q-card style="width: 700px" class="rounded-md q-px-md q-py-sm">
        <q-card-section class="row items-center q-pb-none q-mb-md">
          <div class="text-h6 absolute-center q-mt-sm">Отмена заявки</div>
          <q-space />
          <q-btn color="brand" icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные тексты. Диких его то ты взобравшись ведущими приставка, текста букв встретил!
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon: false,
      cancelModal: false
    }
  },
  methods: {
    showModal() {
      this.icon = true
    },
    hideModal() {
      this.icon = false
    },
    cancelHandler() {
      this.hideModal()
      this.cancelModal = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>