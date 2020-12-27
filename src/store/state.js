let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
  console.log(localStorage.city)
}

export default {
  city: defaultCity
}
