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
import img1 from '@/assets/img/item-1.jpg'
export default {
  name: 'HomeRecommend',
  data() {
    return {
      recommendList: [
        {
          id: '0001',
          imgSrc: img1,
          title: '快樂小世界',
          desc: '快樂地方有快樂的小人物',
        },
        {
          id: '0002',
          imgSrc: img1,
          title: '冰天雪地世界',
          desc: '神秘地方有艾紗',
        },
        {
          id: '0003',
          imgSrc: img1,
          title: '奇幻世界',
          desc: '一切都是幻覺的世界有奇幻旅程',
        },
        {
          id: '0004',
          imgSrc: img1,
          title: '炎熱非洲王國',
          desc: '赤炎炎的太陽配上熱情的動物',
        },
        {
          id: '0005',
          imgSrc: img1,
          title: '芝芝',
          desc: '一起來月球搗麻糬',
        },
      ],
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
