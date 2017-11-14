<template>
  <div>
    <div class="flex">
		<div class="item">1</div>
		<div class="item">2</div>
		<div class="item">3</div>
		<div class="item2">3</div>
		<div class="item">3</div>
		<div class="item">3</div>
		<div class="item2">3</div>
		<div class="item">3</div>
		<div class="item">3</div>
	</div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'loan'
        }
    }
}
</script>

<style>
.flex {
    height: 300px;
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    /* flex-flow:<flex-direction> || <flex-wrap> */
    justify-content: center; /* x轴对齐方式*/
    align-items:flex-start;
    align-content: center;
}
.flex .item {
    /* flex: 1; */
    width: 50px;
    height: 50px;
    background: #08bdbd;
    border: 1px solid #ff9914;
}
.flex .item2 {
    /* flex: 1; */
    width: 100px;
    height: 100px;
    background: #08bdbd;
    border: 1px solid #ff9914;
}
</style>
