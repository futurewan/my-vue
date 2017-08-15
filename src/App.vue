<template>
    <div class="w-container">
        <welcome></welcome>
        <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
            <x-header class="w-header" slot="header" :left-options="{showBack:false}">{{$route.meta.title}}</x-header>
            <router-view></router-view>
            <main-nav class='w-nav'></main-nav>
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
            //  变量初始化
        }
    },
    //  计算属性：可以进行字符串/数值运算
    computed: {
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
    created() {
        //  Vue实例创建完成之后调用
    },
    beforeMount() {
        //  DOM挂载之前调用
    },
    mounted() {
        //  DOM挂载之后调用
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
    .w-header{
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 100;
    }
</style>
