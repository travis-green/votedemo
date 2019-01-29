<template>
  <div>
    <Button type="primary" @click="modal1 = true">普通组件使用方法</Button>
    <Modal v-model="modal1" title="普通组件使用方法" @on-ok="ok" @on-cancel="cancel">
      <h1>普通组件使用方法</h1>//自定义内容
    </Modal>
  </div>
</template>
<script>
export default {
  name: "normalModal",
  data() {
    return {
      modal1: false
    };
  },
  methods: {
    ok() {},
    cancel() {}
  }
};
</script>
<style scoped>
</style>