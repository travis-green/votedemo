<template>
  <div class="home">
    <div class="wrap">
      <login-form/>
    </div>
    <div class="wrap">
      <list/>
    </div>
  </div>
</template>

<script>
import LoginForm from "./LoginForm";
import NewOption from "./NewOption";
import Modal from "./Modal";
import List from "./List";
// import Result from "./Result";

// var drivewidth = document.documentElement.clientWidth;
// if (drivewidth == "320") {
//   document.getElementById("content").style.color = "blue";
// }
// console.log(drivewidth);

export default {
  name: "home",
  data() {
    return {
      screenWidth: document.body.clientWidth,
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: { LoginForm, NewOption, List }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  background-size: cover;
  height: 80vh;
  background-image: url("../assets/background.png");
  margin: 0;
  /* height: 100%; */
}

.wrap {
  width: 90%;
  margin: 0px auto;
}
</style>
