<template>
  <div class="fullscreen bg-brand text-white text-center q-pa-md flex flex-center">
    <div>
      <div class="not-found-title">
        404
      </div>

      <div class="not-found-subtitle">
        Page Not Found...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="brand"
        to="/main_page"
        label="Главная"
        no-caps
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>

<style lang="scss">
.not-found-title {
  text-shadow: 10px 10px 5px rgba(0, 0, 0, .5); 
  letter-spacing: 15px;
  font-size: 15vh !important;
}

.not-found-subtitle {
  opacity:.4; 
  text-shadow: 5px 5px 5px rgba(0, 0, 0, .5);
  font-size: 5vh;
}
</style>