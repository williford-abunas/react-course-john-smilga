const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items))
}

const getLocalStorage = () => {
  let list = localStorage.getItem("list")
  if (list) {
    return JSON.parse(localStorage.getItem("list"))
  } else {
    return []
  }
}

export { setLocalStorage, getLocalStorage }