<template>
  <q-page class="q-pa-lg">
    <page-title>Кредиторы</page-title>

    <!-- Table -->
    <div class="scroll-div">
      <div class="bg-white rounded-sm q-mb-xl q-pb-sm shadow-block" style="min-width: 900px">
        <div class="flex justify-between items-center border-bottom border-2">
          <div class="q-pa-md flex-1 text-center">Дата <br> поступления</div>
          <div class="q-pa-md flex-1 text-center">Сумма <br> поступления</div>
          <div class="q-pa-md flex-1 text-center">Отправитель</div>
          <div class="q-pa-md flex-1 text-center">Возвращенная <br> задолжность</div>
          <div class="q-pa-md flex-1 text-center">Остаток <br> суммы</div>
          <div class="q-pa-md flex-1 text-center">Остаток <br> задолжности</div>
        </div>

        <div class="q-px-md q-pt-md">
          <div 
            class="flex justify-between cursor-pointer items-center q-mb-md bg-grey-2 rounded-sm"
            v-for="item, n in 5" :key="n"  
          >
            <div class="q-py-lg q-px-sm flex-1 text-center">12.01.2022</div>
            <div class="q-py-lg q-px-sm flex-1 text-center">10.000.0000 ₸</div>
            <div class="q-py-lg q-px-sm flex-1 text-center">ЖК Медина </div>
            <div class="q-py-lg q-px-sm flex-1 text-center">10.000.0000 ₸</div>
            <div class="q-py-lg q-px-sm flex-1 text-center">10.000.0000 ₸</div>
            <div class="q-py-lg q-px-sm flex-1 text-center">10.000.0000 ₸</div>
          </div>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>
import PageTitle from 'components/PageTitle.vue'

export default {
  components: { PageTitle },
  name: 'Orders',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">

</style>
