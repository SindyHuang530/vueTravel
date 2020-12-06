<template>
  <ul class="list">
    <li class="item" v-for="(item, key) of city" :key="key">{{ key }}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    city: Object
  }
}
</script>

<style lang="scss" scoped>
/*1rem = html font-size = 50px
1em: 10px*/
@import '@/assets/styles/varibles';
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 12.59rem;
  right: 0.6rem;
  width: 0.4rem;
  bottom: 0;
  color: cadetblue;
  margin: 0.1rem;
}
</style>
