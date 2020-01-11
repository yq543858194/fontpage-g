<template>
  <div class="index">
    <div class="index-classify-container">
      <classify width="83.85%"/>
    </div>
    <div class="index-list-container">
      <index-list width="83.85%" title="热血" :icon="this.$store.state.baseUrl + '/icons/flame.png'"/>
      <index-list width="83.85%" title="治愈" :icon="this.$store.state.baseUrl + '/icons/heart.png'"/>
      <index-list width="83.85%" title="玄幻" :icon="this.$store.state.baseUrl + '/icons/magicsword.png'"/>
      <index-list width="83.85%" title="科幻" :icon="this.$store.state.baseUrl + '/icons/alienship.png'"/>
    </div>
    <div class="index-ranking-container">
      <RankingList width="83.85%"/>
    </div>
  </div>
</template>

<script>
import Classify from "@/components/common/Classify";
import IndexList from "@/components/common/IndexList";
import RankingList from "@/components/common/RankingList";

export default {
  name: 'home',
  components: {
    Classify,
    IndexList,
    RankingList
  },
  created() {
    this.$store.dispatch('showLayout')
  }
}
</script>

<style lang="less">
  @import "../assets/less/variable.less";

  .index {
    width: 100%;
    background-color: @background-color-main;
    &-classify-container {
      width: 100%;
      margin: 20px 0 20px;
    }
    &-list-container {
      width: 100%;
      margin: 20px 0 20px;
    }
    &-ranking-container {
      width: 100%;
      margin: 20px 0 0;
    }
  }
</style>
