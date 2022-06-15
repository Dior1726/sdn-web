<template>
  <div class="q-pa-lg">
    <div>
      <img src="../assets/logo.svg" class="full-width q-mb-xl" alt="">
      
      <div class="flex column">
        <div v-if="false">
          <!-- main Links -->
          <router-link
            exact
            class="q-pa-md block relative-position text-center q-mb-lg bg-white text-brand rounded-md border-brand"
            v-for="link in pages" :key="link.name"
            :to="link.name"
          >
            <!-- <q-icon :name="link.icon" size="24px" /> -->
            <!-- <span class="link-desc" v-if="linkDescription == link.description">
              {{linkDescription}}
            </span> -->
            {{link.title}}
          </router-link>
        </div>

        <span class="text-caption text-grey">Links</span>
        <router-link
          exact
          class="q-pa-md block relative-position text-center q-mb-lg bg-white text-brand rounded-md border-brand"
          v-for="link in links" :key="link.name"
          :to="link.link"
        >
          <!-- <q-icon :name="link.icon" size="24px" /> -->
          <!-- <span class="link-desc" v-if="linkDescription == link.description">
            {{linkDescription}}
          </span> -->
          {{link.name}}
        </router-link>
      </div>
    </div>

    <div class="q-pb-md q-mt-xl">
      <q-btn 
        @click="logoutHandler"
        no-caps
        align="left" 
        class="full-width rounded-md q-py-sm text-center position-relative" 
        color="brand" 
      >
        <q-icon class="" name="logout"/>
        <span class="absolute-center">Выйти</span>
      </q-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      linkDescription: null,
      activeDescription: false,
      links: [
        {
          link: '/main_page',
          name: 'Главная'
        },
        {
          link: '/profile_page',
          name: 'Профиль'
        },
        {
          link: '/do_claim_page',
          name: 'Заявки'
        },
        {
          link: '/providers',
          name: 'Поставщики'
        },
        {
          link: '/seo',
          name: 'Анализ продаж'
        },
        {
          link: '/sales_management_page',
          name: 'Старт продаж'
        },
        {
          link: '/creditors_control_page',
          name: 'Кредиторы'
        },
        {
          link: '/upload_report_page',
          name: 'Загрузить отчет'
        },
        {
          link: '/employer_control_page',
          name: 'Сотрудники'
        },
        {
          link: '/project_management_page',
          name: 'Проекты'
        },
        {
          link: '/add_position_page',
          name: 'Должности'
        },
        {
          link: '/gantt-page',
          name: 'Гантт'
        }
      ]
    }
  },
  mounted() {},
  computed: {
    ...mapGetters('user', ['pages'])
  },
  methods: {
    ...mapActions('user', ['logout']),

    logoutHandler() {
      this.logout()
    },

    showDescription(text) {
      this.linkDescription = text.description
    },
    
    hideDescription() {
      this.linkDescription = null
    }
  }
}
</script>

<style lang="scss" scoped>
.link-desc {
  font-size: 12px;
  max-width: 150px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
  position: absolute;
  right: -8%;
  top: 100%;
  z-index: 1;
  color: #ccc;
}
</style>