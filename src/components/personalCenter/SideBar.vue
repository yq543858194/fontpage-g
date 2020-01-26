<template>
    <ul class="side-bar">
        <li class="side-bar-item point" :class="this.$store.state.currentFunction === '历史记录' ? 'active' : ''" @click="switchFunction">历史记录</li>
        <li class="side-bar-item point" :class="this.$store.state.currentFunction === '我的收藏' ? 'active' : ''" @click="switchFunction">我的收藏</li>
        <li class="side-bar-item point" :class="this.$store.state.currentFunction === '我的点赞' ? 'active' : ''" @click="switchFunction">我的点赞</li>
        <li class="side-bar-item point" :class="this.$store.state.currentFunction === '我的投稿' ? 'active' : ''" @click="switchFunction">我的投稿</li>
        <li class="side-bar-item point" :class="this.$store.state.currentFunction === '个人设置' ? 'active' : ''" @click="switchFunction">个人设置</li>
    </ul>
</template>

<script>
    export default {
        name: "SideBar",
        methods: {
            switchFunction (e) {
                let target = e.target;
                this.$store.dispatch('switchCurrentFunction', target.innerText);
            }
        }
    }
</script>

<style lang="less">
    @import "../../assets/less/variable.less";

    .side-bar {
        display: inline-block;
        width: 25%;
        vertical-align: top;
        &-item {
            width: 100%;
            padding: 10px;
            text-align: center;
            margin: 10px 0;
            background: transparent;
            font-size: @font-size-title-small;
            color: @color-title-small;
        }
        .active {
            background-color: @background-active-color;
            color: @color-link;
        }
    }
</style>
