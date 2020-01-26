<template>
    <div class="personal-center">
        <div class="personal-center-head-container">
            <center-header/>
        </div>
        <div class="personal-center-content-container">
            <side-bar/>
            <transition name="fade-router" mode="out-in">
                <time-line v-if="this.$store.state.currentFunction !== '个人设置'"/>
                <personal-setting v-else/>
            </transition>
        </div>
    </div>
</template>

<script>
    import CenterHeader from "../components/personalCenter/Head.vue";
    import SideBar from "../components/personalCenter/SideBar";
    import TimeLine from "../components/personalCenter/TimeLine";
    import PersonalSetting from "../components/personalCenter/personalSetting";

    export default {
        name: "PersonalCenter",
        components: {
            PersonalSetting,
            TimeLine,
            SideBar,
            CenterHeader
        }
    }
</script>

<style scoped lang="less">
    .personal-center {
        width: 100%;
        &-content-container {
            width: 83.85%;
            margin: 20px auto;
            text-align: left;
        }
    }
</style>
