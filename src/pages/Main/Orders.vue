<template>
  <q-page class="q-pa-lg">
    <page-title>Заявки</page-title>

    <create-order/>

    <tab-wrapper/>

  </q-page>
</template>

<script>
import CreateOrder from "src/components/OrdersPageComponents/CreateOrder.vue"
import TabWrapper from 'src/components/OrdersPageComponents/TabWrapper.vue'
import PageTitle from "src/components/PageTitle.vue"

export default {
  components: {
    CreateOrder,
    TabWrapper,
    PageTitle
},
  name: 'Orders',
  data () {
    return {
    
    }
  }
}
</script>

<style lang="scss">

</style>
