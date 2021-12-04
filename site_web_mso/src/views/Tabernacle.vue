<template>
  <div id="singleTabernacle">
    <Header></Header>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  components: {
    Header,
  },
  name: "Tabernacle",
  props: ["id_tabernacle"],
};
</script>

<style>
</style>