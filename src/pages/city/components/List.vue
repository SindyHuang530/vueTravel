<template>
  <div class="list" ref="wrapper">
    <div class="content">
      <div class="area">
        <div class="title">當前City</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">熱門City</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id">
            <div class="button">{{ item.name }}</div>
            <!-- name是回去看json怎麼定義 -->
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of city" :key="key" :ref="key">
        <!-- cities是一個Object,key=字母ＡorB.... -->
        <div class="title">{{ key }}</div>
        <div class="item-list">
          <div class="item" v-for="(innerItem, akey) of item" :key="akey">
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from '@better-scroll/core'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    city: Object,
    letter: String
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
// 監聽letter有沒有變化, 如果有就會執行if
</script>
<style lang="scss" scoped>
@import '@/assets/styles/varibles';
.area {
  background: rgb(245, 243, 243);
}
.title {
  color: rgb(143, 142, 142);
  font-size: 1rem;
  padding: 0.31rem 0.5rem;
  border-bottom: solid 0.1rem rgb(221, 218, 218);
}
.button-list {
  background: white;
  overflow: hidden;
  padding: 0.1rem 0.9rem 0.1rem 0.5rem;
}
.button-wrapper {
  float: left;
  margin: 0.25rem;
  width: 31%;
}
.button {
  border: 0.1rem solid rgb(221, 218, 218);
  text-align: center;
  border-radius: 0.2rem;
  color: rgb(143, 142, 142);
  line-height: 1.3rem;
}
.item {
  color: rgb(143, 142, 142);
  background: white;
  line-height: 2rem;
  padding-left: 0.5rem;
  border-bottom: solid 0.1rem rgb(237, 232, 232);
}
.list {
  overflow: hidden;
  position: absolute;
  top: 4.2rem;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
