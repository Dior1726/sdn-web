<template>
  <apexchart type="bar" height="300" :options="chartOptions" :series="series" />
</template>

<script>
export default {
  name: 'ApexColumn',
  data () {
    return {
      series: [{
        name: 'Квартиры',
        data: [20, 40, 60]
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'bar',
          events: {
            click: function(chart, w, e) {
              // console.log(chart, w, e)
            }
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#ffeb3b', '#008000', '#ff0000'],
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        xaxis: {
          categories: [
            'Продано',
            'Рассрочка',
            'Осталось'
          ],
          labels: {
            show: true,
            style: {
              fontSize: '12px'
            }
          },
          axisBorder: {
            show: true,
          },
          axisTicks: {
            show: false,
          },
          title: {
            text: 'Цена(м²)',
          }
        },
        grid: {
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        yaxis: {
          title: {
            text: 'Кол-во квартир',
          },
          axisBorder: {
            show: true,
          },
        }
      },
    }
  }
}
</script>
