<template>
    <div class="menu-container">
<!--        <div class="menu-background" :style="{backgroundImage: 'url(' + this.$store.state.baseUrl + '/imgs/menuBackground.jpg)'}"/>-->
        <div class="menu">
            <div class="menu-close point" @click="closePersonalCenter">
                <i class="fa fa-close"/>
            </div>
            <div class="menu-left" @click="changePage">
                <div class="menu-left-item history point">
                    <img :src="this.$store.state.baseUrl + '/icons/history.png'">
                    <span>历史记录</span>
                </div>
                <div class="menu-left-item favorite point">
                    <img :src="this.$store.state.baseUrl + '/icons/favorite.png'">
                    <span>我的收藏</span>
                </div>
                <div class="menu-left-item zan point">
                    <img :src="this.$store.state.baseUrl + '/icons/zan2.png'">
                    <span>我的点赞</span>
                </div>
                <div class="menu-left-item contribute point">
                    <img :src="this.$store.state.baseUrl + '/icons/contribute.png'">
                    <span>我的投稿</span>
                </div>
            </div>
            <div class="menu-setting point" @click="changePage">
                <img :src="this.$store.state.baseUrl + '/icons/person.png'">
                <span>个人设置</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        methods: {
            /*
             * 关闭个人中心
             */
            closePersonalCenter () {
                document.getElementsByTagName("body")[0].style.overflow = 'visible';
                this.$store.dispatch('showPersonalCenter');
            },
            /**
             * 跳转到相关页面
             * @param e
             */
            changePage (e) {
                switch (e.target.innerText) {
                    case "历史记录": this.$store.dispatch("switchCurrentFunction", "历史记录");break;
                    case "我的收藏": this.$store.dispatch("switchCurrentFunction", "我的收藏");break;
                    case "我的点赞": this.$store.dispatch("switchCurrentFunction", "我的点赞");break;
                    case "我的投稿": this.$store.dispatch("switchCurrentFunction", "我的投稿");break;
                    case "个人设置": this.$store.dispatch("switchCurrentFunction", "个人设置");break;
                }
                this.closePersonalCenter();
                this.$router.push("/personalCenter");
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../assets/less/variable.less";
    .menu-container {
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.3);
        position: absolute;
        left: 0;
        top: 0;
        z-index: 998;
        backdrop-filter: blur(8px);
        .menu-background {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: 999;
            filter: blur(3px);
            background-size: cover;
        }
        .menu {
            width: 696px;
            height: 264px;
            position: absolute;
            z-index: 1000;
            left: 50%;
            top: 50%;
            margin-left: -348px;
            margin-top: -132px;
            text-align: left;
            &-close {
                position: absolute;
                right: 11px;
                top: -30px;
                i.fa-close {
                    font-size: 30px;
                    color: #dfdfdf;
                }
            }
            &-left {
                vertical-align: middle;
                display: inline-block;
                width: 528px;
                height: 264px;
                &-item {
                    text-align: center;
                    display: inline-block;
                    margin: 12px;
                    width: 240px;
                    height: 108px;
                    border-radius: 10px;
                    font-size: @font-size-title-big;
                    color: #dfdfdf;
                    font-weight: bold;
                    line-height: 108px;
                    img {
                        width: 23px;
                        vertical-align: middle;
                    }
                    span {
                        display: inline-block;
                        vertical-align: middle;
                        margin-left: 8px;
                    }
                }
                .history {
                    background: linear-gradient(-41deg,#03d9ff 0,#0f83e9 100%);
                }
                .favorite {
                    background: linear-gradient(-41deg,#FFA185 0,#FD5E9E 100%);
                }
                .zan {
                    background: linear-gradient(-42deg,#21E77C 0,#02CD80 100%);
                }
                .contribute {
                    background: linear-gradient(-43deg,#8BA2FC 0,#534CFC 100%);
                }
            }
            &-setting {
                vertical-align: middle;
                text-align: center;
                display: inline-block;
                margin: 0 12px;
                width: 144px;
                height: 240px;
                background: linear-gradient(136deg,#FF7857 0,#FEA840 100%);
                border-radius: 10px;
                font-size: @font-size-title-big;
                color: #dfdfdf;
                font-weight: bold;
                line-height: 240px;
                img {
                    width: 23px;
                    vertical-align: middle;
                }
                span {
                    display: inline-block;
                    vertical-align: middle;
                    margin-left: 8px;
                }
            }
        }
    }
</style>
