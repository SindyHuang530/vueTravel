<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :city="cities" :hot="hotCities"></city-list>
    <city-alphabet :city="cities"></city-alphabet>
  </div>
</template>
<script>
import axios from 'axios'
import CityHeader from '../city/components/Header'
import CitySearch from '../city/components/Search'
import CityList from '../city/components/List'
import CityAlphabet from '../city/components/Alphabet'
export default {
  name: 'City',

  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      cities: {},
      hotCities: []
    }
  },
  methods: {
    getCityInfo() {
      axios.get('./api/city.json').then(this.handleGetInfoSucc)
    },
    handleGetInfoSucc(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    }
  },
  mounted() {
    this.getCityInfo()
  }
}
</script>
<style></style>
