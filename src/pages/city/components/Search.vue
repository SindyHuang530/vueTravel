<template>
  <div class="search">
    <input
      v-model="keyword"
      class="search-input"
      type="text"
      placeholder="Where are you going?"
    />
    <!-- placeholder是input提供的語法，在此輸入提示文字 -->
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
        >
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          <!-- 沒有符合的list才顯示 -->
          No Result
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    city: Object
  },
  data() {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData() {
      return !this.list.length
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }

      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.city) {
          this.city[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },

  mounted() {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/varibles';
.search {
  background: $bgColor;
  text-align: center;
  padding-bottom: 0.2rem;
  &-input {
    box-sizing: border-box;
    height: 1.5rem;
    width: 97%;
    text-align: center;
    border: none;
    border-radius: 0.2rem;
    color: #666;
    padding: 0 0.2rem;
  }
  &-content {
    overflow: hidden;
    z-index: 1;
    position: absolute;
    top: 3.98rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
    text-align: left;
  }
  &-item {
    line-height: 1.6rem;
    padding-left: 0.2rem;
    color: #666;
    background: #fff;
  }
}
</style>
