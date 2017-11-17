<template>
    <div>
        <div class="dix box1">
            <div class="item-m"></div>
        </div>
        <div class="dix box2">
            <div class="item-m"></div>
        </div>
        <div class="dix box3">
            <div class="item-s"></div>
            <div class="item-s"></div>
        </div>
        <div class="dix box4">
            <div class="item-s"></div>
            <div class="item-s"></div>
        </div>
        <div class="dix box5">
            <div class="item-s"></div>
            <div class="item-s"></div>
            <div class="item-s"></div>
        </div>
        <div class="dix box6">
            <div class="column">
                <div class="item-s"></div>
                <div class="item-s"></div>
            </div>
            <div class="column">
                <div class="item-s"></div>
                <div class="item-s"></div>
            </div>
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

<style lang="less">
@E1E3E5:#E1E3E5;
.bg-E1E3E5{background: @E1E3E5;}
.mg10{margin:10px}
.box-l {
    width:200px;
    height: 200px;
}
.box-s {
    width:100px;
    height: 100px;
}
.box1{
    .box-s;
    .mg10;
    .bg-E1E3E5;
    justify-content:flex-end;
    align-items: flex-end;
}
.box2{
    .box-s;
    .mg10;
    .bg-E1E3E5;
    justify-content:center;
    align-items: center;
}
.box3{
    .box-s;
    .mg10;
    .bg-E1E3E5;
    justify-content: space-between;
    align-items: center;
}
.box4{
    .box-s;
    .mg10;
    .bg-E1E3E5;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.box5{
    .box-s;
    .mg10;
    .bg-E1E3E5;
    flex-direction: column;
    justify-content: space-between;
}
.box5 .item-s:nth-child(2){
    align-self: center;
}
.box5 .item-s:nth-child(3){
    align-self: flex-end;
}
.box6{
    .box-s;
    .mg10;
    .bg-E1E3E5;
    flex-wrap:wrap;
    align-content: space-between;
}
.box6 .column{
    flex:0 1 100%; 
    display:flex;
    justify-content: space-between;
}



.item-s{
    width:20px;
    height: 20px;
    background: #552424;
}

.item-m{
    width:50px;
    height: 50px;
    background: #5BC0EB;
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