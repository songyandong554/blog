<template>
  <div id="app">
    <div class="wrap">
      <div class="left">
        <div class="userinfo">
          <img src="./assets/tx.webp" alt="">
          <div class="box">
            <h2>name</h2>
            <h4>我的bolg</h4>
          </div>
        </div>
        <div class="nav">
          <el-menu style="border-right: none;">
            <el-menu-item>
              <i class="el-icon-menu"></i>
              <router-link active-class="active" to="/home" class="none">首页</router-link>
            </el-menu-item>
            <el-menu-item>
              <i class="el-icon-menu"></i>
              <router-link active-class="active" to="/AddArtivle" class="none">发布</router-link>
            </el-menu-item>
            <el-menu-item>
              <i class="el-icon-menu"></i>
              <router-link active-class="active" to="/about" class="none">关于</router-link>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
      <div class="middle">
        <router-view></router-view>
      </div>
      <div class="right">
        <h3>选择查看日期</h3>
        <el-date-picker v-model="time" value-format='yyyy/MM/dd' type="date" placeholder="选择日期">
        </el-date-picker>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      time: ''
    }
  },
  watch: {
    time(newVal) {
      this.$store.commit('updataTime', newVal)
    }
  }
}
</script>

<style lang="less">
body {
  background-color: #f1f2f9;

}


.none {
  text-decoration: none;
}

.wrap {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.left,
.right,
.middle {
  height: 100%;
}

.left {
  position: fixed;
  left: 380px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  background-color: #ffffff;

  .userinfo {
    position: relative;

    img {
      position: absolute;
      left: 10px;
      width: 50px;
      height: 50px;
      border-radius: 25px;
    }

    .box {
      margin-top: 50px;
    }
  }

  .nav {}
}

.right {
  position: fixed;
  right: 500px;
  width: 120px;
  margin-left: 20px;
}

.middle {
  margin-left: 10px;
  width: 700px;
  background-color: #ffffff;
}
</style>
