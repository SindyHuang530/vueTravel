<template>
  <div class="icons">
    <swiper :options="swiperOptions" v-if="showIcon">
    <swiper-slide v-for="(page,index) of pages" :key="index">
      <div class="icon" v-for="item of page" :key="item.id">
      <div class="icon-img">
      <img class="icon-img-content" :src="imgPath(item.imgSrc)" />
      </div>
      <p class="icon-desc">{{ item.desc }}</p>
      </div>
    </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array,
  },
  data() {
    return {
     swiperOptions: {
       loop:false,
       autoplay:false
       }
    }
  },
  methods: {
    imgPath(pic) {
      return require(`../../../assets/img/${pic}`)
    } 
  },
  computed:{
    showIcon(){
      return this.list.length
    },
    pages(){
      const pages = []
      this.list.forEach((item,index)=> {
        const i = Math.floor(index / 8)
        if (!pages[i]){
            pages[i]=[]
        }
        pages[i].push(item)
      })
        console.log(pages)

      return pages
    }
  }
}
</script>


<style lang="scss" scoped>
.icons >>> .swiper-container
.icons {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  margin-top: .2rem;
}
.icon{
  position: relative;
  overflow: hidden;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
}
.icon-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: .5rem;
  box-sizing: border-box;
  padding: .5rem;
}
.icon-img-content{
  display: block;
  margin: .1rem auto;

  height: 100%;
  }

.icon-desc {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: .7rem;
  line-height: .20rem;
  text-align: center;
  color:black;
}
</style>
