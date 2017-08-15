<template>
    <div class="w-container">
        <welcome></welcome>
        <view-box ref="viewBox" :body-padding-top="bodyTopCP" body-padding-bottom="55px">
            <x-header v-if='isShowTop' class="w-header" style="width:100%;position:absolute;left:0;top:0;z-index:100;" slot="header" :left-options="{showBack:false}">{{$route.meta.title}}{{mmm}}</x-header>
            <router-view class="w-body"></router-view>
            <main-nav slot="bottom" class='w-nav'></main-nav>
        </view-box>
    </div>
</template>
<script>
import Welcome from './components/static/Welcome'
import MainNav from './components/static/Main-nav'

export default {
    name: 'app',
    components: {
        Welcome,
        MainNav
    },
    data() {
        return {
            title: this.$children.title,
            bodyTop: '0px'
        }
    },
    // 缓存计算后的变量或是监听依赖的变量更新值
    computed: {
        isShowTop: function () {
            return !window['isWx']
        },
        bodyTopCP: function () {
            if (this.isShowTop) {
                return '45px'
            }
        }
    },
    created() {
        const isWx = /MicroMessenger/.test(window.navigator.userAgent)
        window['isWx'] = isWx
        // this.isLoading = false
    },
    mounted() {
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
        },
        mmm: function () {
            return new Date()
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
        uphead(path) {
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
