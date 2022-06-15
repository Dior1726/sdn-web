<template>
  <q-page class="q-pa-lg">
    <page-title>Загрузить отчет</page-title>

    <div class="q-pa-md bg-white rounded-sm">
      <div class="flex item-center gap-6">
        <span class="text-h6 text-brand border-bottom-brand q-pb-sm">Ежедневные отчеты</span>

        <q-btn
          flat
          class="bg-brand rounded-sm q-py-sm"
          color="white"
          no-caps
        >
          Загрузить ежедневный отчет
          <q-icon name="file_download" class="q-ml-sm" />
        </q-btn>
      </div>

      <div class="scroll-div">
        <div class="q-mt-lg min-w-700">
          <div
            class="flex q-py-md q-px-lg justify-between cursor-pointer items-center q-mb-md bg-grey-2 rounded-sm"
            v-for="item in 10" :key="item"
          >
            <div>
              <span style="margin-right: 80px">23.06.2022</span>
              <span>ЖК Медина</span>
            </div>
            <div>
              <q-btn
                flat
                class="bg-brand rounded-sm q-py-sm"
                color="white"
                no-caps
              >
                  Выгрузить
                <q-icon name="file_upload" class="q-ml-sm" />
              </q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import PageTitle from 'src/components/PageTitle.vue'

export default {
components: { PageTitle },
  
}
</script>

<style lang="scss" scoped>

</style>