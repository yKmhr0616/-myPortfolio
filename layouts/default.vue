<template>
  <div>
    <header>
      <div class="flex">
        <h1 class="h1">{{ title }}</h1>
      </div>
      <Header></Header>
    </header>
    <Nuxt />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { BootstrapVueIcons } from "bootstrap-vue";
Vue.use(BootstrapVueIcons);
export default Vue.extend({
  data() {
    return {
      title: "K'sPortFolio",
    };
  },
});
</script>
<style scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-width: 960px;
  margin: 0 auto 2.5rem;
  height: 270px;
}

h1 {
  margin: 0 auto;
}
</style>
<style>
.flex {
  display: flex;
}
.flex.right{
    justify-content: right;
}
</style>
