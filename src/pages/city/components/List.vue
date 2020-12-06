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
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">Ａ</div>
        <div class="item-list">
          <div class="item">阿拉爾</div>
          <div class="item">阿拉爾</div>
          <div class="item">阿拉爾</div>
          <div class="item">阿拉爾</div>
          <div class="item">阿拉爾</div>
          <div class="item">阿拉爾</div>
        </div>
        <div class="title">Ａ</div>
        <div class="item-list">
          <div class="item">阿拉爾</div>
          <div class="item">阿拉爾</div>
          <div class="item">阿拉爾</div>
          <div class="item">阿拉爾</div>
          <div class="item">阿拉爾</div>
          <div class="item">阿拉爾</div>
        </div>
        <div class="title">Ａ</div>
        <div class="item-list">
          <div class="item">阿拉爾</div>
          <div class="item">阿拉爾</div>
          <div class="item">阿拉爾</div>
          <div class="item">阿拉爾</div>
          <div class="item">阿拉爾</div>
          <div class="item">阿拉爾</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from '@better-scroll/core'
export default {
  name: 'CityList',
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
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
