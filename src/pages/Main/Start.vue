<template>
  <q-page class="q-pa-lg">
    <page-title>Старт-стоп продаж</page-title>

    <div class="scroll-div q-mb-lg bg-white rounded-sm shadow-block" v-for="item, n in 5" :key="n">
      <!-- Table -->
      <div class="min-w-950 flex border-bottom">
        <div class="flex-1 border-right">
          <div class="q-py-md q-pl-lg border-bottom" v-for="item in headInfo" :key="item">
            {{item}}
          </div>
        </div>

        <div v-for="list, n of bodyInfo" :key="n" class="flex-1 border-right">
          <div class="q-py-md q-pl-lg border-bottom" v-for="item in list" :key="item">
            {{item}}
          </div>
        </div>
      </div>

      <div class="flex gap-6 q-ma-lg">
        <q-btn color="brand" class="rounded-sm q-py-sm" no-caps label="Старт продаж" />
        <q-btn color="dark-gray" class="rounded-sm q-py-sm" no-caps label="Стоп продаж" />
      </div>

    </div>

  </q-page>
</template>

<script>
import PageTitle from 'src/components/PageTitle.vue'

export default {
  components: { PageTitle },
  name: 'Orders',
  data () {
    return {
      headInfo: {
        title: 'Медина',
        salesCount: 'Кол-во продаж',
        priceForMetr: 'Цена за м²',
        sumOfMetr: 'Общие м²'
      },
      bodyInfo: [
        {
          head: 'Однокомнатные',
          salesCount: '10 шт',
          priceForMetr: '500.000₸',
          sumOfMetr: '250'
        },
        {
          head: 'Двухкомнатные',
          salesCount: '10 шт',
          priceForMetr: '500.000₸',
          sumOfMetr: '250'
        },
        {
          head: 'Трехкомнатные',
          salesCount: '10 шт',
          priceForMetr: '500.000₸',
          sumOfMetr: '250'
        },
        {
          head: 'Коммерция',
          salesCount: '10 шт',
          priceForMetr: '500.000₸',
          sumOfMetr: '250'
        },
        {
          head: 'Паркинг',
          salesCount: '10 шт',
          priceForMetr: '500.000₸',
          sumOfMetr: '250'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
