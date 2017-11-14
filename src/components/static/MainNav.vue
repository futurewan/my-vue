<template>
    <tabbar>
        <tabbar-item link='/home' :selected='isHome'>
            <span :class='[isHome?"icon-home":"icon-home"]' slot='icon'></span>
            <span slot='label'>首页</span>
        </tabbar-item>
        <tabbar-item link='/form' :selected='isLoan'>
            <span :class='[isForm?"icon-css":"icon-css"]' slot='icon'></span>
            <span slot='label'>表单</span>
        </tabbar-item>
        <tabbar-item link='/more' :selected='isUser'>
            <span :class='[isMore?"icon-plugin":"icon-plugin"]' slot='icon'></span>
            <span slot='label'>更多</span>
        </tabbar-item>
    </tabbar>
</template>
<script>
export default {
    name: 'main-nav',
    computed: {
        isHome: function () {
            if (this.$route.path === '/home' || this.$route.path === '/') {
                return true
            }
        },
        isForm: function () {
            if (this.$route.path === '/form') {
                return true
            }
        },
        isMore: function () {
            if (this.$route.path === '/more') {
                return true
            }
        }
    }
}
</script>
