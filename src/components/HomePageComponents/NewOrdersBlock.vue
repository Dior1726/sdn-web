<template>
  <div class="my-card q-card q-pa-md rounded-sm bg-white shadow-block">
    <h6 class="q-my-none q-mb-md text-weight-bold">
      Новые заявки
    </h6>
    
    <div>
      <div 
        @click="showModal"
        class="shadow-item q-pa-sm q-mb-lg rounded-sm cursor-pointer" 
        v-for="item in 5" :key="item"
      >
        <div class="flex justify-between">
          <div class="q-mb-sm text-weight-bold">Name of order</div>
          <div class="text-caption">01.03.2021 16:22</div>
        </div>

        <div>
          <p class="q-ma-none">Описание заявки (прим.: название товара)</p>
        </div>
      </div>
    </div>

    <div>
      <router-link class="bg-brand block cursor-pointer text-white q-py-md rounded-md q-mt-lg text-center q-mx-auto max-w-300" to="/orders">
        Просмотреть все заявки
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showModal() {
      this.$emit('showModal')
    }
  }  
}
</script>

<style lang="scss" scoped>
.my-card {
  flex-basis: 300px;
  flex-grow: 1;
  background: #F0F0F0;
}
</style>