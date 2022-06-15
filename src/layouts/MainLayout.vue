<template>
  <q-layout view="LHH lpR lff">

    <q-header class="bg-main text-white q-px-md" bordered>
      <q-toolbar>
        <q-btn flat round class="text-brand flex items-center q-pa-sm" size="18px" icon="menu" @click="left = !left" />

        <div class="q-ml-auto flex items-center q-py-md">
          <div class="q-mr-md gt-xs">
            <q-input dense outlined label="Поиск" class="bg-white gt-xs" color="brand" > 
              <template v-slot:prepend>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <router-link to="/profile_page" class="bg-transparent">
            <q-avatar size="50px">
              <img src="https://cdn.quasar.dev/img/avatar4.jpg" alt="">
            </q-avatar>
          </router-link>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left">
      <Sidebar/>
    </q-drawer>

    <q-page-container class="bg-main text-md">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import Sidebar from 'src/components/Sidebar.vue'

export default {
  data() {
    return {
      left: false,
    };
  },
  components: { Sidebar }
}
</script>

<style lang="scss">
.router-link-exact-active, 
.router-link-active {
  background: $brand-light !important;
}

.bg-transparent {
  background: transparent !important;
}
</style>