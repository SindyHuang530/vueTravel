<template>
  <div class="icons">
    <div class="icon-img">
      <img src="@/assets/img/icon-1.jpg" />
      <p class="icon-words">Hotel</p>
    </div>
    <div class="icon-img">
      <img src="@/assets/img/icon-2.jpg" />
      <p class="icon-words">Day trip</p>
    </div>
    <div class="icon-img">
      <img src="@/assets/img/icon-3.jpg" />
      <p class="icon-words">Hiking</p>
    </div>
    <div class="icon-img">
      <img src="@/assets/img/icon-4.jpg" />
      <p class="icon-words">Bus</p>
    </div>
    <div class="icon-img">
      <img src="@/assets/img/icon-5.jpg" />
      <p class="icon-words">Spots</p>
    </div>

    <div class="icon-img">
      <img src="@/assets/img/icon-6.jpg" />
      <p class="icon-words">Swiming</p>
    </div>

    <div class="icon-img">
      <img src="@/assets/img/icon-7.jpg" />
      <p class="icon-words">Ski</p>
    </div>
    <div class="icon-img">
      <img src="@/assets/img/icon-8.jpg" />
      <p class="icon-words">Camping</p>
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
  background: rgb(242, 210, 146);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: center;
  width: 100%;
}

.icon-img {
  flex: 1;
  img {
    width: 80px;
    height: 80px;
    padding-top: 3px;
    padding-left: 5px;
  }
}

.icon-words {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 18px;
  text-align: center;
  color: black;
}
</style>