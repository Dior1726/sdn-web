<template>
  <q-page class="q-pa-lg">
    <div class="flex full-width justify-between items-center gap-6 q-mb-md">
      <page-title class="q-mb-auto">Проекты</page-title>

      <add-project-button/>
    </div>

    <!-- Projects -->
    <div class="flex gap-6 flex-wrap justify-start items-start">
      <div class="bg-white min-w-350 max-w-500 shadow-block q-pa-md rounded-sm flex-1">
        <div class="flex justify-between items-center q-mb-md">
          <!-- <h6 class="q-my-auto">Проекты</h6>  -->
          <span class="text-green">Активные проекты</span>
        </div>

        <div 
          class="q-pa-md rounded-sm shadow-item q-mb-lg" style="position: relative;"
          v-for="project in projects" :key="project.id"
        >
          <div class="flex items-center justify-between q-mb-xl">
            <div class="flex-1">
              <h6 class="q-mb-sm q-my-auto text-weight-bold">
                {{project.projectsName}}
              </h6>
              <div class="q-mb-sm text-weight-bold">
                {{project.place}} 
              </div>
              <div class="q-mb-sm">
                Время начала: 
                <span v-if="project.startTime" class="text-green-5 text-weight-bold">
                  {{project.startTime | dateFilter}}
                </span> 

                <span v-if="!project.startTime">-----</span>
              </div>
              <div class="q-mb-sm">
                Время оканчания: 
                <span v-if="project.endTime" class="text-red-5 text-weight-bold">
                  {{project.endTime | dateFilter}}
                </span> 

                <span v-if="!project.endTime">-----</span>
              </div>
            </div>

            <div class="project__image gt-xs">
              <img 
                width="150"
                :src="project.projectPhotosList[0] 
                  ? project.projectPhotosList[0].uri 
                  : require('../../assets/noPhoto.png')" 
                alt=""
              >
            </div>
          </div>
          <div class="flex items-center gap-4 justify-end q-my-sm">

            <update-project-button :project="project" />

            <q-btn
              @click="deleteById(project.id)"
              flat
              class="bg-red block text-white rounded-sm"
              no-caps
            >
              <q-icon name="delete"/>
            </q-btn>
          </div>
        </div>
      </div>

      <div v-if="false" class="bg-white min-w-350 max-w-400 shadow-block q-pa-md rounded-sm flex-1">
        <div class="flex justify-between items-center q-mb-md">
          <h6 class="q-my-auto">Проекты</h6>
          <span class="text-red">На стопе</span>
        </div>

        <div 
          class="q-pa-sm rounded-sm shadow-item q-mb-lg"
          v-for="item in 3" :key="item"
        >
          <div>Название проекта: ЖК Медина </div>
          <div>Город: Алматы </div>
          <div>Ответственный сотрудник: Иванов И.И </div>
          <div>Время начала: <span class="text-green-5">02.06.2021</span> </div>
          <div>Время оканчания: <span class="text-red-5">02.06.2022</span> </div>
        </div>
      </div>

      <div v-if="false" class="bg-white min-w-350 max-w-400 shadow-block q-pa-md rounded-sm flex-1">
        <div class="flex justify-between items-center q-mb-md">
          <h6 class="q-my-auto">Проекты</h6>
          <span class="text-green">Окончено</span>
        </div>

        <div 
          class="q-pa-sm rounded-sm shadow-item q-mb-lg"
          v-for="item in 3" :key="item"
        >
          <div>Название проекта: ЖК Медина </div>
          <div>Город: Алматы </div>
          <div>Ответственный сотрудник: Иванов И.И </div>
          <div>Время начала: <span class="text-green-5">02.06.2021</span> </div>
          <div>Время оканчания: <span class="text-red-5">02.06.2022</span> </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import PageTitle from 'src/components/PageTitle.vue'
import { mapActions, mapGetters } from 'vuex'
import { TokenService } from 'src/services/token.service'
import AddProjectButton from 'src/components/UI/AddProjectButton.vue'
import UpdateProjectButton from 'src/components/UI/UpdateProjectButton.vue'

export default {
  components: { PageTitle, AddProjectButton, UpdateProjectButton },
  data() {
    return {
      noPhoto: '/src/assets/noPhoto.png'
    }
  },
  created() {
    this.loadProjects()
  },
  computed: {
    ...mapGetters('project', ['projects'])
  },
  methods: {
    ...mapActions(
      'project', 
      [
        'getProjectList', 
        'deleteProject',
      ]
    ),

    deleteById(id) {
      const data = {
        id, 
        phone: TokenService.getPhone()
      }

      this.deleteProject(data)
    },

    loadProjects() {
      const phone = TokenService.getPhone()
      this.getProjectList(phone)
    }
  }
}
</script>

<style lang="scss" scoped>
.project__image {
  overflow: hidden;
  border-radius: 16px;
  width: 140px;
  height: 120px;

  img {
    width: 140px;
    height: 120px;
    object-fit: cover;
  }
}
</style>