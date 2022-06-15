<template>
  <q-page class="q-pa-lg">
    <page-title>Главная</page-title>

    <div class="rounded-sm shadow-block bg-white row relative">
      <!-- News content -->
      <div class="col-12 col-md-8 border-right">
        <!-- <new-post-input/> -->
        <info-link/>

        <div>
          <news-item v-for="item, n in 4" :key="n" />
        </div>
      </div>

      <!-- Right Sidebar -->
      <div class="col-12 col-md-4 q-pa-md q-mb-md" >
        <next-weekend/>
        <important-news 
          v-for="item, n in 3" :key="n" />
      </div>
      
    </div>
  </q-page>
</template>

<script>
import NewPostInput from 'src/components/NewsPageComponents/NewPostInput.vue'
import NewsItem from 'src/components/NewsPageComponents/NewsItem.vue'
import ImportantNews from 'src/components/NewsPageComponents/ImportantNews.vue'
import NextWeekend from 'src/components/NewsPageComponents/NextWeekend.vue'
import InfoLink from 'src/components/NewsPageComponents/InfoLink.vue'
import PageTitle from 'src/components/PageTitle.vue'
export default {
  components: {
    NewPostInput,
    NewsItem,
    ImportantNews,
    NextWeekend,
    InfoLink,
    PageTitle
},
  name: 'News',
  data() {
    return {
      
    }
  }
}
</script>
