<style>
* {
  margin: 0;
  padding: 0;
}
.ball-area {
  display: flex;
  padding: 150px 30px 60px 30px;
  justify-content: space-around;
  width: 100%;
  box-sizing: border-box;
}
.ball-area > div {
  color: #f54646;
  border: 1.5px solid #f54646;
  display: flex;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.ball-area .blue {
  color: #39f;
  border: 1.5px solid #39f;
  margin-left: 10px;
}
#btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  background-color: #f54646;
  color: #fff;
  border-radius: 25px;
  font-size: 18px;
  border: none;
  margin: 50px auto;
}
.main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
</style>


<template>
  <div class="main">
    <!--我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富我要暴富-->
    <div class="ball-area">
      <div>**</div>
      <div>**</div>
      <div>**</div>
      <div>**</div>
      <div>**</div>
      <div>**</div>
      <div class="blue">**</div>
    </div>
    <div id="btn">随机选号</div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  mounted() {
    const btn = document.getElementById("btn");

    const redArr = [];
    const blueArr = [];
    const dom = document.getElementsByClassName("ball-area")[0];
    for (let i = 1; i <= 33; i++) {
      redArr.push(i);
    }
    for (let i = 1; i <= 16; i++) {
      blueArr.push(i);
    }

    function sortArr(arr, limit) {
      const chosenArr = [];
      const tempArr = [];
      Object.assign(tempArr, arr);
      for (let i = 0; i < limit; i++) {
        chosenArr.push(
          tempArr.splice(Math.floor(Math.random() * tempArr.length), 1)
        );
      }
      return chosenArr;
    }

    btn.addEventListener("click", () => {
      const chosen_red_arr = sortArr(redArr, 6).sort((a, b) => {
        return a - b;
      });
      const chosen_blue_arr = sortArr(blueArr, 1).sort((a, b) => {
        return a - b;
      });
      let str = "";
      for (let i = 0; i < chosen_red_arr.length; i++) {
        const item = chosen_red_arr[i];
        str += `<div>${item}</div>`;
      }
      str += `<div class="blue">${chosen_blue_arr[0]}</div>`;
      dom.innerHTML = str;
    });
    document.body.addEventListener("touchmove", e => {
      e.preventDefault();
    });
  }
};
</script>
