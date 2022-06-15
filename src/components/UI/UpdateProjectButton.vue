<template>
  <div>
    <q-btn
      @click="openModal = true"
      flat
      class="bg-brand block text-white rounded-sm"
      no-caps
    >
      <q-icon name="edit"/>
    </q-btn>

    <!-- Main modal -->
    <q-dialog v-model="openModal">
      <q-card style="width: 700px" class="rounded-md q-px-md q-py-sm">
        <q-card-section class="row items-center q-pb-none q-mb-md">
          <div class="text-h6 absolute-center q-mt-sm">Изменить проект</div>
          <q-space />
          <q-btn color="brand" icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <div class="q-mb-sm"> 
            <span class="text-grey-6">Актуальное название: </span>
            <span>{{project.projectsName}}</span>
          </div>
          <q-input 
            outlined color="brand" 
            label="Название" 
            class="q-mb-md"
            v-model="newProject.projectsName"
          />

          <div class="q-mb-sm"> 
            <span class="text-grey-6">Актуальное Описание: </span>
            <span>{{project.description}}</span>
          </div>
          <q-input 
            outlined color="brand" 
            label="Описание" 
            class="q-mb-md"
            v-model="newProject.description"
          />
          
          <div class="q-mb-sm"> 
            <span class="text-grey-6">Актуальный город: </span>
            <span>{{project.place}}</span>
          </div>
          <q-input 
            outlined color="brand" 
            label="Город" 
            class="q-mb-md"
            v-model="newProject.place"
          />
          
          <div class="q-mb-sm"> 
            <span class="text-grey-6">Актуальные даты: </span>
            <span v-if="project.startTime">{{project.startTime | dateFilter}}</span>
          </div>
          <q-input 
            type="date"
            outlined color="brand" 
            label="Срок начала"
            stack-label
            class="q-mb-md"
            v-model="newProject.startTime"
          />
          
          <div class="q-mb-sm"> 
            <span class="text-grey-6">Актуальные даты: </span>
            <span v-if="project.endTime" >{{project.endTime | dateFilter}}</span>
          </div>
          <q-input 
            type="date"
            outlined color="brand" 
            label="Срок окончания" 
            stack-label
            v-model="newProject.endTime"
          />
        </q-card-section>

        <q-card-section class="flex justify-end">
          <q-btn @click="update" no-caps flat color="white" class="bg-brand q-py-sm q-px-xl rounded-md">
            Сохранить
          </q-btn>
        </q-card-section>

        <q-card-section>
          <div class="q-mb-sm">Загрузить фото проекта</div>
          <q-file label="Выберите файл" clearable outlined v-model="file">
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
        </q-card-section>

        <q-card-section class="flex justify-end">
          <q-btn @click="uploadPhoto" no-caps flat color="white" class="bg-brand q-py-sm q-px-xl rounded-md">
            Загрузить
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
  props: ['project'],
  data() {
    return {
      openModal: false,
      newProject: {
        projectsName: null,
        description: null,
        place: null,
        startTime: null,
        endTime: null,
        cityId: 84,
      },
      file: null,
    }
  },
  methods: {
    ...mapActions(
      'project', 
      [
        'updateProject', 
        'uploadProjectPhoto'
      ]
    ),

    update() {
      const phone = TokenService.getPhone()
      const data = this.newProject
      const id = this.project.id

      this.updateProject({phone, data, id})
      this.openModal = false
    },

    uploadPhoto() {
      const file = this.file
      const photoNumber = 1
      const projectId = this.project.id
      const phone = TokenService.getPhone()

      this.uploadProjectPhoto({phone, projectId, photoNumber, file})
      this.openModal = false
    },
  }
}
</script>
