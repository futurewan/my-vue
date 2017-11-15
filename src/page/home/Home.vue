<template>
    <div>
        <group label-width="4.5em">
            <cell title="flexbox" is-link link="/home/flexbox" inline-desc=""></cell>
            <cell title="Cell" is-link></cell>
        </group>
        <router-view></router-view>
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
        this.api.ajax('getProList',
            {
                data: { iPage: 1, pageSize: 3 }
            })
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