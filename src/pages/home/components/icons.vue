<template>
  <div class="icons">
    <div class="icon-img">
      <img src="@/assets/img/icon-1.jpg" />
      <p>spots</p>
    </div>
    <div class="icon-img">
      <img src="@/assets/img/icon-2.jpg" />
      <p>spots</p>
    </div>
    <div class="icon-img">
      <img src="@/assets/img/icon-3.jpg" />
      <p>spots</p>
    </div>
    <div class="icon-img">
      <img src="@/assets/img/icon-4.jpg" />
      <p>spots</p>
    </div>
    <div class="icon-img">
      <img src="@/assets/img/icon-5.jpg" />
      <p>spots</p>
    </div>
    <div class="icon-img">
      <img src="@/assets/img/icon-6.jpg" />
      <p>spots</p>
    </div>
    <div class="icon-img">
      <img src="@/assets/img/icon-7.jpg" />
      <p>spots</p>
    </div>
    <div class="icon-img">
      <img src="@/assets/img/icon-8.jpg" />
      <p>spots</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
}
</script>





<style lang="scss" scoped>
.icons {
  height: 210px;
  background: rgb(237, 222, 222);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: center;
  width: 100%;
}

.icon-img {
  flex: 1;
  img {
    width: 93.46 px;
    height: 90px;
  }
}
</style>