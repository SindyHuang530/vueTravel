<template>
  <div>
    <detail-banner :list="bannerList"> </detail-banner>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner
  },
  data() {
    return {
      bannerList: []
    }
  },
  mounted() {
    this.getDetailInfo()
    console.log('----')
  },
  methods: {
    getDetailInfo() {
      axios.get('./api/index.json').then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc(res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.bannerList = data.bannerList
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';
</style>
