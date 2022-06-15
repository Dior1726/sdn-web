<template>
  <q-layout view="LHH lpR lff">

    <q-header class="bg-main text-white q-px-md" bordered>
      <q-toolbar>
        <q-btn flat round class="text-brand flex items-center q-pa-sm" size="18px" icon="menu" @click="left = !left" />

        <div class="q-ml-auto flex items-center q-py-md">
          <router-link to="/profile" class="bg-transparent">
            <q-avatar size="50px">
              <img src="https://cdn.quasar.dev/img/avatar4.jpg" alt="user">
            </q-avatar>
          </router-link>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left">
      <div class="q-pa-lg fit flex column justify-between">
        <div>
          <img src="../assets/logo.svg" class="full-width q-mb-xl" alt="">

          <div class="flex column">
            <router-link
              exact
              :to="link.link" 
              class="q-pa-md q-mb-lg q-mt-sm bg-white text-brand rounded-md border-brand relative-position"
              v-for="link in links" :key="link.name"
            >
              <q-icon :name="link.icon" size="24px" />
              <span class="absolute-center">{{link.name}}</span>
            </router-link>
          </div>
        </div>

        <div class="q-mb-lg">
          <router-link to="/login" v-ripple class="block full-width rounded-md bg-brand text-white q-pa-md relative-position">
            <q-icon name="logout" size="24px" />
            <span class="absolute-center">Выйти</span>
          </router-link>
        </div>
      </div>
    </q-drawer>

    <q-page-container class="bg-main">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>

export default {
  data() {
    return {
      left: false,
      links: [
        {
          name: 'Все заявки',
          icon: 'home',
          link: '/admin/home'
        },
        {
          name: 'Добавить сот-ка',
          icon: 'person_add',
          link: '/admin/add'
        },
        {
          name: 'Профиль',
          icon: 'person',
          link: '/admin/profile'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.router-link-exact-active, 
.router-link-active {
  background: $brand !important;
  color: #fff;
}

.bg-transparent {
  background: transparent !important;
}
</style>