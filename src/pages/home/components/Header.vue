<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe685;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe67d;</span>
      Enter destinations
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont">&#xe665;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="scss" scoped>
/*1rem = html font-size = 50px 
1em: 10px*/
@import '@/assets/styles/varibles';

.header {
  height: $headerHeight;
  display: flex;
  align-items: center;
  background: #bgColor;
  color: #fff;
  &-left {
    width: 25px;
    text-align: center;
    color: #fff;
  }
  &-input {
    flex: 1;
    background: #fff;
    border-radius: 5px;
    height: 30px;
    margin-left: 5px;
    line-height: 29px;
    text-align: center;
    color: #ccc;
  }
  &-right {
    width: 60px;
    text-align: center;
  }
}
</style>
