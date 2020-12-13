<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{ item }}
    </li>
  </ul>
  <!-- 
  手指放在螢幕上上面就觸發
  手指在螢幕上滑動時連續觸發
  手指離開螢幕時觸發
   -->
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    city: Object
  },
  computed: {
    letters() {
      const letters = []
      for (let i in this.city) {
        letters.push(i)
      }
      return letters
    }
  },
  data() {
    return {
      touchStatus: false,
      // 沒有點擊觸發所以false
      startY: 0,
      timer: null
    }
  },
  updated() {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick(e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart() {
      this.touchStatus = true
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 66
          const index = Math.floor((touchY - this.startY) / 26)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd() {
      this.touchStatus = false
    }
  }
}
//  兄弟組件：向city.vue傳訊息然後city.vue再傳給list.vue
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
  top: 0.2rem;
  right: 0.6rem;
  width: 0.62rem;
  bottom: 0;
  margin-top: 7.2rem;

  color: cadetblue;
  padding-left: 0.18rem;
}
.item {
  height: 1.2rem;
  width: 1.2rem;
}
</style>
