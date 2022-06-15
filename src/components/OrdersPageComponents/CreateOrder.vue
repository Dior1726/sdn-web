<template>
  <div>
    <div 
      @click="icon = true"
      v-ripple 
      class="block cursor-pointer max-w-300 full-width rounded-md bg-brand text-white q-pa-md relative-position"
    >
      <q-icon name="note_add" size="24px" />
      <span class="absolute-center">Создать заявку</span>
    </div>

    <q-dialog v-model="icon">
      <q-card style="width: 700px" class="rounded-md q-px-md q-py-sm">
        <q-card-section class="row items-center q-pb-none q-mb-md">
          <div class="text-h6 absolute-center q-mt-sm">Новая заявка</div>
          <q-space />
          <q-btn color="brand" icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-input 
            v-model="newOrder.name" 
            outlined color="brand" 
            label="Название заявки" 
            class="q-mb-md"
          />
          
          <q-input 
            v-model="newOrder.typeOfOrder" 
            outlined color="brand" 
            label="Вид заявки" 
            class="q-mb-md"
          />
          
          <q-input 
            v-model="newOrder.project" 
            outlined color="brand" 
            label="Проект" 
            class="q-mb-md"
          />
          
          <q-input 
            v-model="newOrder.sender" 
            outlined color="brand" 
            label="Отправитель" 
            class="q-mb-md"
          />
          
          <q-input 
            v-model="newOrder.date" 
            outlined color="brand" 
            label="Дата подачи" 
            class="q-mb-md"
          />
          
          <q-input 
            v-model="newOrder.description" 
            type="textarea" outlined 
            color="brand" label="Описание" 
            class="q-mb-md"
          />
          
          <q-input 
            v-model="newOrder.comments" 
            type="textarea" outlined 
            color="brand" label="Комментарий" 
            class="q-mb-md"
          />
        </q-card-section>

        <q-card-section class="flex q-gutter-lg q-mb-md">
          <q-btn @click="icon = false" no-caps flat color="white" class="bg-dark-gray q-py-sm rounded-md flex-1" >Отменить</q-btn>
          <q-btn no-caps flat color="white" class="bg-brand q-py-sm rounded-md flex-1">
            Создать
          </q-btn>
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
      newOrder: {
        name: '',
        typeOfOrder: '',
        project: '',
        sender: '',
        date: '',
        description: '',
        comments: ''

      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>