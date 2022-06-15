<template>
  <q-page class="q-pa-sm">
    <gantt-elastic :tasks="tasks" :options="options" >
    </gantt-elastic>
  </q-page>
</template>

<script>
import GanttElastic from "gantt-elastic";

export default {
  components: {
    'gantt-elastic': GanttElastic,
  },
  data() {
    return {
      options: {
        maxRows: 100,
        maxHeight: 400,
        title: {
          label: 'Vue Gantt',
          html: false,
        },
        row: {
          height: 40,
        },
        calendar: {
          hour: {
            display: false,
          },
        },
        chart: {
          progress: {
            bar: false,
          },
          expander: {
            display: true,
          },
        },
        taskList: {
          expander: {
            straight: false,
          },
          columns: [
            {
              id: 1,
              label: 'Id',
              value: 'id',
              width: 40,
            },
            // {
            //   id: 2,
            //   label: 'Projects',
            //   value: 'label',
            //   width: 200,
            //   expander: true,
            //   html: true,
            //   events: {
            //     click({ data, column }) {
            //       alert('description clicked!\n' + data.label);
            //     },
            //   },
            // },
            // {
            //   id: 3,
            //   label: 'User',
            //   value: 'user',
            //   width: 100,
            //   html: true,
            // },
            // {
            //   id: 3,
            //   label: 'Start',
            //   value: (task) => new Date(task.start).toLocaleDateString(),
            //   width: 80,
            // }
          ],
        }
      },
      tasks: [
        {
          id: 1,
          label: 'Make some noise',
          user:
            '<a href="https://www.google.com/search?q=John+Doe" target="_blank" style="color:#0077c0;">John Doe</a>',
          start: this.getDate(-24 * 5),
          duration: 5 * 24 * 60 * 60 * 1000,
          progress: 50,
          style: {
            base: {
              fill: '#333',
              stroke: '#444',
            },
          },
          type: 'project',
          //collapsed: true,
        },
        {
          id: 2,
          label: 'With great power comes great responsibility',
          parentId: 1,
          user:
            '<a href="https://www.google.com/search?q=Peter+Parker" target="_blank" style="color:#0077c0;">Peter Parker</a>',
          start: this.getDate(-24 * 4),
          duration: 1 * 24 * 60 * 60 * 1000,
          progress: 50,
          type: 'project',
          collapsed: true,
          style: {
            base: {
              fill: '#1EBC61',
              stroke: '#0EAC51',
            },
          },
        },
        {
          id: 3,
          label: 'Courage is being scared to death, but saddling up anyway.',
          parentId: 2,
          user:
            '<a href="https://www.google.com/search?q=John+Wayne" target="_blank" style="color:#0077c0;">John Wayne</a>',
          start: this.getDate(-24 * 3),
          duration: 4 * 24 * 60 * 60 * 1000,
          progress: 80,
          type: 'project',
          dependentOn: [2],
        },
        {
          id: 5,
          label: 'With great power comes great responsibility',
          user:
            '<a href="https://www.google.com/search?q=Peter+Parker" target="_blank" style="color:#0077c0;">Peter Parker</a>',
          start: this.getDate(-24 * 1),
          duration: 2 * 24 * 60 * 60 * 1000,
          progress: 50,
          type: 'project',
          collapsed: true,
          style: {
            base: {
              fill: 'blue',
              stroke: '#0EAC51',
            },
          },
        },
        {
          id: 6,
          label: 'Courage is being scared to death, but saddling up anyway.',
          user:
            '<a href="https://www.google.com/search?q=John+Wayne" target="_blank" style="color:#0077c0;">John Wayne</a>',
          start: this.getDate(-24 * 1),
          duration: 3 * 24 * 60 * 60 * 1000,
          progress: 80,
          type: 'project',
        }
      ],
    }
  },
  methods: {
    getDate(hours) {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();
      const currentDay = currentDate.getDate();
      const timeStamp = new Date(currentYear, currentMonth, currentDay, 0, 0, 0).getTime();
      return new Date(timeStamp + hours * 60 * 60 * 1000).getTime();
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>

</style>