<template>
  <div class="iconList">
    <div class="icon-img" v-for="item of iconList" :key="item.id">
      <img :src="item.imgSrc" />
      <p class="icon-words">{{ item.desc }}</p>
    </div>
  </div>
</template>
<script>
import { iconList } from '@/api/home/home'
export default {
  name: 'HomeIcons',
  data() {
    return {
      iconList,
    }
  },
}
</script>


<style lang="scss" scoped>
.iconList {
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