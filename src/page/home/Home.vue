<template>
    <div>
        2318468236487
        <div style="height:700px"></div>
        2434234
    </div>
</template>
<script>
export default {
    name: 'hello',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            message: '我是信息'
        }
    },
    beforeCreate: function () {

    },
    created: function () {
    },
    beforeMount: function () {

    },
    mounted: function () {
        // let a = new Vue({
        //     el: '.hello'
        // })
        // console.log(a)
        // let body = document.getElementsByClassName('hello')[0]
        // let child = document.getElementsByClassName('first')[0]
        // console.log(child.contains(body))
        this.api.ajax('getProList')
    },
    beforeUpdate: function () {

    },
    updated: function () {

    },
    beforeDestroy: function () {

    },
    destroyed: function () {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
