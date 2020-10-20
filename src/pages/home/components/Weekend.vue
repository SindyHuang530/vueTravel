<template>
  <div>
    <div class="title">Weekend can we go?</div>
    <div class="items">
      <ul>
        <li class="item" v-for="item of recommendList" :key="item.id">
          <img class="item-img" :src="item.imgSrc" />
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
import img1 from '@/assets/img/travel-3.jpg'
export default {
  name: 'HomeWeekend',
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
  border-bottom: solid #c9c8c8 0.1rem;

  &-info {
    min-width: 0;
    p {
      line-height: 1.5rem;
    }
  }
  &-desc {
    @include ellipsis;
    color: rgb(14, 52, 118);
  }
}
</style>
