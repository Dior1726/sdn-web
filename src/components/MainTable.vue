<template>
  <div>
    <div class="scroll-div bg-white rounded-md shadow-block">
      <div style="min-width: 900px">
        
        <!-- Table head -->
        <div class="flex justify-between items-center border-bottom border-2">
          <div class="q-pa-md flex-1 text-center" v-for="item, n in head" :key="n">
            {{item}}
          </div>
        </div>

        <!-- Table body -->
        <div class="q-px-md q-pt-md q-pb-sm">
          <div 
            class="flex justify-between q-px-sm cursor-pointer items-center q-mb-md rounded-sm"
            v-for="user in body" :key="user.id"
            @click="showUser(user)"
            :class="[user.status === 2 ? 'bg-red-3' : 'bg-grey-2']"
          >
            <div class="q-py-lg flex-1 text-center">
              {{user.profile.firstName}}
            </div>
            <div class="q-py-lg flex-1 text-center">
              {{user.profile.lastName}}
            </div>
            <div class="q-py-lg flex-1 text-center">
              {{user.iin}}
            </div>
            <div class="q-py-lg flex-1 text-center">
              {{user.phone}}
            </div>
            <div class="q-py-lg flex-1 text-center">
              {{user.appointment.title}}
            </div>
            <div class="q-py-lg flex-1 text-center" >
              {{
                user.projects[0]
                  ? user.projects[0].projectsName
                  : '----'
              }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['body'],
  data() {
    return {
      head: ['Имя', 'Фамилия', 'ИИН', 'Номер телефона', 'Должность', 'Проект'],
    }
  },
  methods: {
    ...mapMutations(
      'employer', 
      [
        'SET_EMPLOYER_PROJECT',
        'SET_CURRENT_EMPLOYER',
      ]
    ),

    showUser(user) {
      this.$router.push({ name: 'employer_page_item', params: { id: user.id }})
      this.SET_CURRENT_EMPLOYER(user)
      this.SET_EMPLOYER_PROJECT(user.projects)
    }
  },
}
</script>
