<template>
  <div>
    <q-btn
      no-caps class="rounded-sm q-py-sm block q-mb-md" 
      color="brand"
      @click="openModal = true"
    >
      <q-icon name="add" class="q-mr-sm" />
      Добавить новый проект
    </q-btn>

    <!-- Main modal -->
    <q-dialog v-model="openModal">
      <q-card style="width: 700px" class="rounded-md q-px-md q-py-sm">
        <q-card-section class="row items-center q-pb-none q-mb-md">
          <div class="text-h6 absolute-center q-mt-sm">Добавить проект</div>
          <q-space />
          <q-btn color="brand" icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-input 
            outlined color="brand" 
            label="Название" 
            class="q-mb-md"
            v-model="newProject.projectsName"
          />

          <q-input 
            outlined color="brand" 
            label="Описание" 
            class="q-mb-md"
            v-model="newProject.description"
          />
          
          <q-input 
            outlined color="brand" 
            label="Город" 
            class="q-mb-md"
            v-model="newProject.place"
          />
          
          <!-- <q-input 
            outlined color="brand" 
            label="Ответственный сотрудник" 
            class="q-mb-md"
            v-model="newProject.responseWorker"
          /> -->
          
          <q-input 
            type="date"
            outlined color="brand" 
            label="Срок начала"
            stack-label
            class="q-mb-md"
            v-model="newProject.startTime"
          />
          
          <q-input 
            type="date"
            outlined color="brand" 
            label="Срок окончания" 
            stack-label
            v-model="newProject.endTime"
          />
        </q-card-section>

        <q-card-section class="flex q-mb-md justify-end">
          <q-btn @click="addProject" no-caps flat color="white" class="bg-brand q-py-sm q-px-xl rounded-md">
            Добавить
          </q-btn>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { TokenService } from 'src/services/token.service'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      openModal: false,
      newProject: {
        projectsName: null,
        description: null,
        place: null,
        startTime: null,
        endTime: null,
        cityId: 84
      }
    }
  },
  methods: {
    ...mapActions(
      'project', 
      [
        'createProject', 
      ]
    ),

    addProject() {
      const phone = TokenService.getPhone()
      const data = this.newProject

      this.createProject({phone, data})
      this.openModal = false
    }
  }
}
</script>
