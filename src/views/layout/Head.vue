<template>
    <div class="head">
        <img class="head-background" src="../../assets/backgrounds/headerBackground.png" alt="">
        <div class="head-nav">
            <div class="head-nav-logo left">
                <img class="head-nav-logo-icon" src="../../assets/icons/logo.png" alt="">
            </div>
            <div class="head-nav-navbar left">
                <div class="head-nav-navbar-item left point">
                    <router-link to="/">主页</router-link>
                </div>
                <div class="head-nav-navbar-item left point">
                    <router-link to="/video">视频</router-link>
                </div>
                <div class="head-nav-navbar-item left point">
                    <router-link to="/cartoon">动漫/轻小说</router-link>
                </div>
                <div class="head-nav-navbar-item left point">
                    <router-link to="/relate">周边信息</router-link>
                </div>
            </div>
            <div class="head-nav-navbar right">
                <div class="head-nav-navbar-item right point">
                    <i class="fa fa-user"/>
                </div>
                <div class="head-nav-navbar-item right point">
                    <i class="fa fa-search"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "head"
    }
</script>

<style scoped lang="less">
    @import "../../assets/less/variable.less";
    .head {
        width: 100%;
        position: relative;
        height: 100px;
        overflow: hidden;
        &-background {
            width: 100%;
        }
        &-nav {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 50px;
            background: linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(255,255,255,0));
            &-logo {
                height: 40px;
                line-height: 40px;
                width: 40px;
                margin-left: 25px;
                &-icon {
                    width: 40px;
                    height: 40px;
                }
            }
            &-navbar {
                height: 40px;
                margin-left: 40px;
                &-item {
                    margin: 0 25px;
                    text-align: center;
                    font-size: @font-size-nav;
                    line-height: 40px;
                    min-width: 20px;
                    height: 40px;
                    :hover {
                        color: @color-link-hover;
                    }
                    a {
                        color: @color-link;
                        text-decoration: none;
                        transition: color .5s ease-in-out;
                    }
                    i {
                        width: 100%;
                        font-size: @icon-size-nav;
                        transition: color .5s ease-in-out;
                        color: @color-link;
                    }
                }
            }
        }
    }
</style>
