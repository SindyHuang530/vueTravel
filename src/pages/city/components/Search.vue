<template>
  <div class="search">
    <input
      class="search-input"
      type="text"
      placeholder="Where are you going?"
    />
    <!-- placeholder是input提供的語法，在此輸入提示文字 -->
  </div>
</template>
<script>
export default {
  name: 'CitySearch'
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/varibles';
.search {
  background: $bgColor;
  text-align: center;
  padding-bottom: 0.2rem;
  &-input {
    box-sizing: border-box;
    height: 1.5rem;
    width: 97%;
    text-align: center;
    border: none;
    border-radius: 0.2rem;
    color: #666;
    padding: 0 0.2rem;
  }
}
</style>
