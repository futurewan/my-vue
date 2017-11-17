<template>
    <div>
        <group label-width="4.5em">
            <cell  v-for="group in grouplist" v-bind:title="group.title" is-link :link="group.link" inline-desc=""></cell>
        </group>
    </div>
</template>
<script>
export default {
    name: 'hello',
    data() {
        return {
            grouplist: [{
                title: 'flexbox',
                link: '/home/flexbox'
            },
            {
                title: 'transform',
                link: '/home/transform'
            }]
        }
    },
    beforeCreate: function () {

    },
    created: function () {
    },
    beforeMount: function () {

    },
    mounted: function () {
        // this.api.ajax('getProList',
        //     {
        //         data: { iPage: 1, pageSize: 3 }
        //     })
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