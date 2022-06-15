export default ({ Vue }) => {
  Vue.filter('dateFilter', function(date) {
    return date.slice(0, 10)
  })
}