<template>
  <div class="flex justify-start items-center q-px-lg q-pt-lg">
    <q-input dense autogrow outlined bottom-slots v-model="text" label="New post..." color="brand">
      <template v-slot:before>
        <q-avatar size="40px">
          <img src="https://cdn.quasar.dev/img/avatar1.jpg">
        </q-avatar>
      </template>

      <template v-slot:append>
        <q-icon name="close" @click="text = ''" class="cursor-pointer" />
        <q-icon name="attach_file" class="cursor-pointer" />
      </template>

      <template v-slot:after>
        <q-btn dense no-caps flat color="white" label="Отправить" class="bg-brand q-py-xs q-px-sm rounded-md"/>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    }
  }  
}
</script>

<style lang="scss" scoped>

</style>