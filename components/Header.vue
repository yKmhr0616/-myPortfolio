<template>
  <b-nav tabs align="right">
    <b-nav-item><NuxtLink to="/">Home</NuxtLink></b-nav-item>
    <b-nav-item><NuxtLink to="/about">About</NuxtLink></b-nav-item>
    <b-nav-item v-bind:disabled="isDisabled()">work</b-nav-item>
    <b-nav-item disabled>contanct</b-nav-item>
  </b-nav>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    data(){
        return {
            active:"home",
        }
    },

    methods:{
      isDisabled():boolean{
        return true;
      }
    }
});
</script>
