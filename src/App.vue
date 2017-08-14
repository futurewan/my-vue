<template>
    <div style="height:100%;">
        <welcome></welcome>
        <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
            <x-header class="w-header" style="width:100%;position:absolute;left:0;top:0;z-index:100;" slot="header" :left-options="{showBack:false}">This is the page title.</x-header>
            <!--<nav v-if='isTopNav' class='weui-navbar top-nav'>
                    <div class='go-back'>
                        <a v-if='isToBack' v-on:click='toback'>返回</a>
                    </div>
                    <div class='navtitle flex1'>{{pageTitle | privacy(2)}}</div>
                    <div class='top-menu'></div>
                </nav>-->
            <router-view></router-view>
            <mainnav class='w-nav'></mainnav>
            <!--<loading></loading>-->
        </view-box>
    </div>
</template>  

<script>
import welcome from './components/welcome'
import mainnav from './components/mainnav'

export default {
    name: 'app',
    components: {
        welcome,
        mainnav
    },
    // router,
    data() {
        return {
            isTopNav: false,
            isLoading: true,
            message: '我是信息',
            isToBack: false
        }
    },
    // 缓存计算后的变量或是监听依赖的变量更新值
    computed: {
        pageTitle: function () {
            return '我是标题'
        }
    },
    created: () => {
        const isWx = /MicroMessenger/.test(window.navigator.userAgent)
        window['isWx'] = isWx
        // this.isLoading = false
    },
    mounted: function () {
        this.uphead(this.$route.path)

        // this.$router.afterEach((to, from) => {
        //     this.uphead(this.$route.path)
        // })
        // console.log(this.isTopNav)
        // console.log(this.api)
    },
    watch: {
        '$route'(to, from) {
            this.uphead(this.$route.path)
        }
    },
    methods: {
        toback() {
            if (history.length < 2) {
                location.href = location.host
            } else {
                history.back()
            }
        },
        uphead: function (path) {
            let white = { '/home': true, '/loan': true, '/user': true, '/find': true }[path]
            this.isTopNav = !window['isWx']
            this.isTopNav && (this.isToBack = !white)
        }
    }
}
</script>

<style lang="less">
@import 'assets/css/fonts.css';
@import 'assets/css/my.less';
</style>