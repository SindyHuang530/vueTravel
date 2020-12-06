<template>
  <div>
    <div class="title">Weekend can we go?</div>
    <div class="items">
      <ul>
        <li class="item" v-for="item of list" :key="item.id">
          <img class="item-img" :src="imgPath(item.imgSrc)" />
          <div class="item-info">
            <p class="item-title">{{ item.title }}</p>
            <p class="item-desc">{{ item.desc }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  methods: {
    imgPath(pic) {
      return require(`../../../assets/img/${pic}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';
.title {
  line-height: 2.3rem;
  font-size: 1.5rem;
  padding-left: 1rem;
  background: #e7e8e9;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: rgb(130, 129, 129);
}
.items {
  background-color: white;
}
.item {
  border-bottom: solid #e7e8e9 0.1rem;

  &-info {
    min-width: 0;
    p {
      line-height: 1.5rem;
    }
  }
  &-desc {
    @include ellipsis;
    color: rgb(130, 129, 129);
  }
}
</style>
