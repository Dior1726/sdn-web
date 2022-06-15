<template>
  <q-page class="q-pa-lg">
    <page-title>Анализ продаж</page-title>

    <q-select 
      outlined dense class="flex-1 min-w-200 max-w-300 q-mb-md"
      bg-color="white" color="brand" 
      :options="options" label="Проект" 
    />

    <div class="scroll-div q-mb-xl">
        <!-- Table -->
      <div class="bg-white rounded-sm min-w-900 flex flex-wrap">
        
        <div class="flex-1 border-right">
          <div class="text-center q-py-sm border-bottom border-2">
            План
          </div>

          <div 
            v-for="item in plan" :key="item"
            class="flex justify-between q-pa-md border-bottom"  
          >
            <div>
              {{item.title}}
            </div>
            <div>
              {{item.price}}
            </div>
          </div>
        </div>

        <div class="flex-1 border-right">
          <div class="text-center q-py-sm border-bottom border-2">
            Факт
          </div>

          <div 
            v-for="item in plan" :key="item"
            class="flex justify-between q-pa-md border-bottom"  
          >
            <div>
              {{item.title}}
            </div>
            <div>
              {{item.price}}
            </div>
          </div>
        </div>
        
        <div class="flex-1">
          <div class="text-center q-py-sm border-bottom border-2">
            Анализ
          </div>

          <div 
            v-for="item in analyze" :key="item"
            class="flex justify-between q-pa-md border-bottom"  
          >
            <div>
              {{item.title}}
            </div>
            <div>
              {{item.price}}
            </div>
          </div>
        </div>
        
      </div>

    </div>
    
    <!-- CHart -->
    <div class="flex bg-white rounded-sm overflow-hidden" style="max-width: 700px;">
      <div class="full-width">
        <card-base>
          <apex-column/>
        </card-base>
      </div>
      <div class="q-pa-lg" v-if="false">
        <h6 class="q-mb-lg q-mt-auto text-weight-bold">Всего квартир</h6>
        <p class="flex items-center">
          <span class="bg-yellow q-mr-sm block rounded-full w-4 h-4"></span> 
          Продано (20) 
        </p>
        <p class="flex items-center">
          <span class="bg-green q-mr-sm block rounded-full w-4 h-4"></span> 
          Рассрочка (20) 
        </p>
        <p class="flex items-center">
          <span class="bg-red q-mr-sm block rounded-full w-4 h-4"></span> 
          Осталось (60) 
        </p>
      </div>
    </div>
  </q-page>
</template>

<script>
import ApexColumn from 'src/components/ApexColumn.vue'
import CardBase from 'src/components/CardBase.vue'
import PageTitle from 'src/components/PageTitle.vue'
export default {
  name: 'SEO',
  components: { ApexColumn, CardBase, PageTitle },
  data() {
    return {
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      plan: [
        {
          title: 'Себестоимость',
          price: '10.000.0000 ₸ '
        },
        {
          title: 'Выручка',
          price: '10.000.0000 ₸ '
        },
        {
          title: 'Маржинальность',
          price: '10.000.0000 ₸ '
        }
      ],
      analyze: [
        {
          title: 'Цена по плану (м²)',
          price: '400.000 ₸  '
        },
        {
          title: 'Цена по факту (м²)',
          price: '300.000 ₸ '
        },
        {
          title: 'Усредненная цена (м²)',
          price: '500.000 ₸ '
        }
      ]
    }
  },
  mounter() {
    this.$axios
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
