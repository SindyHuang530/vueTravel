<template>
  <div>
    <div class="title">Hot Recommend</div>
    <div class="items">
      <ul>
        <router-link
          tag="li"
          class="item"
          v-for="item of list"
          :key="item.id"
          :to="'/detail/' + item.id"
        >
          <img class="item-img" :src="imgPath(item.imgSrc)" />
          <div class="item-info">
            <p class="item-title">{{ item.title }}</p>
            <p class="item-desc">{{ item.desc }}</p>
            <button class="item-button">Check Now</button>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
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
  color: rgb(130, 129, 129);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.items {
  background-color: white;
}
.item {
  display: flex;
  border-bottom: solid #e7e8e9 0.1rem;
  &-img {
    width: 4.2rem;
    height: 4.2rem;
    margin: 0.27rem;
  }

  &-info {
    flex: 1;
    min-width: 0;
    p {
      line-height: 1.5rem;
    }
  }
  &-desc {
    @include ellipsis;
    color: rgb(130, 129, 129);
  }
  &-button {
    background-color: rgb(245, 241, 184);
    border-radius: 0.3rem;
    border-color: rgb(245, 241, 184);
    padding: 0.1rem;
  }
}
</style>
