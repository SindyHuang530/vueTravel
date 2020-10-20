<template>
  <div>
    <div class="title">Hot Recommend</div>
    <div class="items">
      <ul>
        <li class="item" v-for="item of recommendList" :key="item.id">
          <img class="item-img" :src="item.imgSrc" />
          <div class="item-info">
            <p class="item-title">{{ item.title }}</p>
            <p class="item-desc">{{ item.desc }}</p>
            <button class="item-button">Check Now</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { recommendList } from '@/api/home/home'
export default {
  name: 'HomeRecommend',
  data() {
    return {
      recommendList,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';
.title {
  line-height: 2.3rem;
  font-size: 1.5rem;
  padding-left: 1rem;
  background: #c9c8c8;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.items {
  background-color: rgb(120, 197, 199);
}
.item {
  display: flex;
  border-bottom: solid #c9c8c8 0.1rem;
  &-img {
    width: 4.5rem;
    height: 4.5rem;
    padding: 0.3rem;
  }

  &-info {
    flex: 1;
    min-width: 0;
    p {
      line-height: 1.7rem;
    }
  }
  &-desc {
    @include ellipsis;
    color: rgb(14, 52, 118);
  }
  &-button {
    background-color: rgb(238, 230, 105);
    border-radius: 0.3rem;
    padding: 0.1rem;
  }
}
</style>
