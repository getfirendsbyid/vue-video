<template>
  <van-nav-bar id="header" title="标题" left-text="返回" left-arrow>
    <template #right>
      <van-icon name="search" size="18" />
      123
    </template>
  </van-nav-bar>
</template>

<script>
import { Toast } from "vant";
export default {
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
  },
};
</script>

<style>
.header{
  
}
</style>
