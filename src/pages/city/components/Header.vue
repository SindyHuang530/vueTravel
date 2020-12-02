<template>
  <div class="header">
    Choose City
    <router-link to="/">
      <div class="header-left">
        <span class="iconfont header-back">&#xe685;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/varibles';
.header {
  overflow: hidden;
  position: relative;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  background: $bgColor;
  color: #fff;
  &-left {
    color: fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 2.5rem;
  }
  .iconfont {
    color: #fff;
  }
}
</style>
