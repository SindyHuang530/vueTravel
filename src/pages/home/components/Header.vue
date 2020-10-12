<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe685;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe67d;</span>
      Enter destinations
    </div>
    <div class="header-right">
      City
      <span class="iconfont">&#xe665;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
}
</script>


<style lang="scss" scoped>
/*1rem = html font-size = 50px 
1em: 10px*/
@import '@/assets/styles/varibles';

.header {
  height: 43px;
  display: flex;
  align-items: center;
  background: #00bcd4;
  color: #fff;
  &-left {
    width: 25px;
    text-align: center;
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
