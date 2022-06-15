const stringToBase = (str) => {
  return btoa(str)
}

const baseToString = (str) => {
  return atob(str)
}

export default { stringToBase, baseToString }