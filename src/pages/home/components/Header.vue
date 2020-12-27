<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe685;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe67d;</span>
      Destinations,tours...
    </div>
    <router-link class="city" to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont">&#xe665;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
    // ...mapGetters(['doubleCity'])
    //如果要使用的話要重新import
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
  background: $bgColor;
  color: #fff;
  &-left {
    width: 1.2rem;
    text-align: center;
    color: #fff;
  }
  &-input {
    flex: 1;
    background: #fff;
    border-radius: 5px;
    height: 30px;
    margin-right: 8px;
    line-height: 29px;
    text-align: center;
    color: #ccc;
  }
  &-right {
    min-width: 2rem;
    text-align: center;
    color: #fff;
  }
}
.city {
  text-decoration: none;
}
</style>
