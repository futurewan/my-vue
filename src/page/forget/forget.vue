<template>
  <div class="main clearfix">
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
    <div class="box4"></div>
    <div class="box5"></div>
    <div class="box6"></div>
    <div class="box7"></div>
    <div class="box8"></div>
    <div class="box9"></div>
  </div>
</template>

<script>
export default {
  methods: {
    console() {
      console.log('click')
    }
  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
}

.main {

  background-color: #fff;
  width: 90%;
  padding-bottom: 90%;
}

.main>div {
  width: 26%;
  padding-bottom: 26%;
  border: 1% solid #fff;
  background-color: #E78326;
  border-radius: 3%;
  float: left;
  margin: 1%;
}
</style>

