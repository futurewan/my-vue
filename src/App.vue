<template>
    <div class="w-container">
        <welcome></welcome>
        <view-box ref="viewBox" :body-padding-top="bodyTopCP" :body-padding-bottom="bodyBottomCP">
            <x-header v-if='isTop' class="w-header" slot="header" :left-options="{showBack:!isNav}">{{$route.meta.title}}</x-header>
            <router-view class="w-body"></router-view>
            <main-nav v-show='isNav'  slot="bottom" class='w-nav'></main-nav>
        </view-box>
    </div>
</template>
<script>
//  公共css引入
import '@/assets/css/fonts.css'
import '@/assets/css/my.less'
//  文件名：必须一致，精确匹配
//  组件名：把MainNav写成main-nav标签
import Welcome from './components/static/Welcome'
import MainNav from './components/static/MainNav'
export default {
    name: 'app',
    components: {
        Welcome,
        MainNav
    },
    data() {
        return {
            // title: this.$children.title
            //  变量初始化
        }
    },
    //  计算属性：可以进行字符串/数值运算
    computed: {
        isTop: function () {
            return !window['isWx']
        },
        bodyTopCP: function () {
            if (this.isTop) {
                return '45px'
            } else {
                return '0'
            }
        },
        bodyBottomCP: function() {
            if (this.isNav) {
                return '45px'
            } else {
                return '0'
            }
        },
        isNav: function () {
            return { '/': true, '/home': true, '/loan': true, '/user': true, '/find': true }[this.$route.path]
        }
    },
    created() {
        console.log(this.$children)
        const isWx = /MicroMessenger/.test(window.navigator.userAgent)
        window['isWx'] = isWx
        // this.isLoading = false
    },
    mounted() {
        // this.$router.afterEach((to, from) => {
        //     this.uphead(this.$route.path)
        // })
        // console.log(this.isTopNav)
        // console.log(this.api)
    },
    //  监听属性
    watch: {
    },
    //  方法
    methods: {
    },
    //  Vue生命周期钩子函数
    beforeCreate() {
        //  Vue实例初始化之后调用
    },
    beforeMount() {
        //  DOM挂载之前调用
    },
    beforeUpdate() {
        //  数据更新时,重新渲染DOM之前调用
    },
    updated() {
        //  数据更新时,重新渲染DOM之后调用
    },
    activated() {
        //  组件激活时调用
    },
    deactivated() {
        //  组件停用时调用
    },
    beforeDestroy() {
        //  Vue实例销毁之前调用
    },
    destroyed() {
        //  Vue实例销毁之后调用
    }
}
</script>
<style lang="less" scoped>
.w-header {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
}
</style>
