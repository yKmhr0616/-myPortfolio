<template>
  <div>
    <header>
      <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand href="/paycan">Re:Paycan</b-navbar-brand>
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/paycan/demo">demo</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Other" right>
            <b-dropdown-item>Paycan</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </header>
    <Nuxt />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      title: "Re:Paycan",
    };
  },

  methods: {},
});
</script>