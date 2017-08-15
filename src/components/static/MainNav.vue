<template>
    <tabbar slot="bottom">
        <tabbar-item link='/home' :selected='isHome'>
            <span :class='[isHome?"icon-sy-index-on":"icon-sy-index"]' slot='icon'></span>
            <span slot='label'>首页</span>
        </tabbar-item>
        <tabbar-item link='/loan' :selected='isLoan'>
            <span :class='[isLoan?"icon-sy-loan-on":"icon-sy-loan"]' slot='icon'></span>
            <span slot='label'>借款</span>
        </tabbar-item>
        <tabbar-item link='/find' :selected='isFind'>
            <span :class='[isFind?"icon-sy-find-on":"icon-sy-find"]' slot='icon'></span>
            <span slot='label'>发现</span>
        </tabbar-item>
        <tabbar-item link='/user' :selected='isUser'>
            <span :class='[isUser?"icon-sy-my-on":"icon-sy-my"]' slot='icon'></span>
            <span slot='label'>我的</span>
        </tabbar-item>
    </tabbar>
</template>
<script>
export default {
    name: 'main-nav',
    computed: {
        isHome() {
            if (this.$route.path === '/home' || this.$route.path === '/') {
                return true
            }
        },
        isLoan() {
            if (this.$route.path === '/loan') {
                return true
            }
        },
        isFind() {
            if (this.$route.path === '/find') {
                return true
            }
        },
        isUser() {
            if (this.$route.path === '/user') {
                return true
            }
        }
    }
}
</script>
