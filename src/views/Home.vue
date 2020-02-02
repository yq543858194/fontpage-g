<template>
  <div class="index">
    <div class="index-classify-container">
      <classify :catalog="classifyList" width="83.85%"/>
    </div>
    <div class="index-carousel-container">
      <index-carousel width="83.85%"/>
    </div>
    <div class="index-list-container">
      <index-list width="83.85%" type="index" :title="item.title" :content="item.content" :icon="$store.state.baseUrl + '/icons/flame.png'" v-for="(item, index) in classifyIndexList" :key="index"/>
    </div>
    <div class="index-ranking-container">
      <RankingList width="83.85%"/>
    </div>
  </div>
</template>

<script>
import Classify from "@/components/common/Classify";
import IndexCarousel from "@/components/index/IndexCarousel";
import IndexList from "@/components/common/IndexList";
import RankingList from "@/components/common/RankingList";

export default {
  name: 'home',
  components: {
    Classify,
    IndexCarousel,
    IndexList,
    RankingList
  },
  data () {
    return {
      classifyList: [],
      classifyIndexList: []
    }
  },
  async created() {
    let self = this;
    let response = await self.$axios.get(self.$store.state.serverBaseUrl + '/api/classify/getAllClassifies');
    if (response.data.code === 200) {
      self.classifyList = response.data.data;
    } else {
      self.$store.dispatch('infoDialog', response.data.msg);
    }
    self.classifyList.forEach((item) => {
      self.$axios.get(self.$store.state.serverBaseUrl + `/api/index/getIndexList?current=1&size=5&typeId=${item.id}`).then((response) => {
        if (response.data.code === 200) {
          self.classifyIndexList.push({
            icon: item.icon,
            title: item.classifyName,
            content: response.data.data.records
          });
        } else {
          self.$store.dispatch('infoDialog', response.data.msg);
        }
      }).catch((error) => {
        self.$store.dispatch('infoDialog', error);
      });
    });
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
    &-carousel-container {
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
