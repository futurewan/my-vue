<template>
    <div>
        <div class="box-l">
            <div class="item">1</div>
        </div>
  </div>
</template>

<script>
export default {
    mounted: function () {
    },
    data() {
        return {
            msg: 'login'
        }
    }
}
</script>

<style>
.box-l {
    width:200px;
    height: 200px;
    background: #F7F9FB;
    /* flex-direction: row;
     flex-wrap:wrap; 
     flex-flow:<flex-direction> || <flex-wrap>
    justify-content: center; 
    align-items:flex-start;
    align-content: space-between; */
}
.item-s{
    width:20px;
    height: 20px;

}
.flex .item {
    /* flex: 1; 
    width: 50px;
    height: 50px;
    background: #08bdbd;
    border: 1px solid #ff9914;*/
}
.flex .item2 {
    /* flex: 1;
    width: 100px;
    height: 100px;
    background: #08bdbd;
    border: 1px solid #ff9914; */
}
</style>