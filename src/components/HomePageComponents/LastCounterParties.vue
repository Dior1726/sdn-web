<template>
  <div class="bg-white rounded-sm q-pa-md shadow-block">
    <h6 class="q-my-none q-mb-md text-weight-bold">
      Последние Контр. агенты
    </h6>

    <div>
      <div class="flex justify-between q-mb-sm q-py-md" v-for="item, n in 5" :key="n">
        <div class="text-weight-bold">
          Наиеменование контр агента
        </div>
        <div>
          БИН:123456789123
        </div>
        <div>
          Юр.Название
        </div>
        <div>
          Дата: 12.20.2022
        </div>
        <div class="text-weight-bold">
          Дополнительное информация
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>