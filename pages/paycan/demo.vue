<template>
  <div class="wrap">
    <!-- <div class="switch_user" v-for="name in createUser()" :key="name">
      {{ name }}
    </div> -->
    <div class="group">
      <p class="h2">グループ一覧</p>
      <div class="flex group_main border border-2 border-dark">
        <b-list-group class="border-right border-dark">
          <b-list-group-item class="border-0" :href="`paycan/group/${group.id}`" v-for="group in Groups()" :key="group.id">
            {{ group.name }}
          </b-list-group-item>
        </b-list-group>
        <div class="group_content">

        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { User, Group } from "@/static/Paycan";

export default Vue.extend({
  layout: "paycan",

  data() {
    return {
      users: [
        { id: "d989e2b7-355e-467d-b0bc-7b07575b6465", name: "user1" },
        { id: "8b19853a-5fc3-4bd7-899f-078c4159e155", name: "user2" },
        { id: "ee1b0cb0-1ff3-4185-a6f9-ed7dabf8f277", name: "user3" },
        { id: "8b19853a-5fc3-4bd7-899f-078c4159e155", name: "user4" },
        { id: "03ba1057-4088-4c5a-800c-a1d8321984b7", name: "user5" },
      ],

      groups: [
        {
          id: "9a504391-9789-4ad1-aa6a-ac32a1a3a465",
          name: "demoGroup",
          users: [
            { id: "d989e2b7-355e-467d-b0bc-7b07575b6465", name: "user1" },
            { id: "8b19853a-5fc3-4bd7-899f-078c4159e155", name: "user2" },
            { id: "ee1b0cb0-1ff3-4185-a6f9-ed7dabf8f277", name: "user3" },
            { id: "8b19853a-5fc3-4bd7-899f-078c4159e155", name: "user4" },
            { id: "03ba1057-4088-4c5a-800c-a1d8321984b7", name: "user5" },
          ],
        },
        {
          id: "9a504391-9789-4ad1-aa6a-ac32a1a3a465",
          name: "demoGroup",
          users: [
            { id: "d989e2b7-355e-467d-b0bc-7b07575b6465", name: "user1" },
            { id: "8b19853a-5fc3-4bd7-899f-078c4159e155", name: "user2" },
            { id: "ee1b0cb0-1ff3-4185-a6f9-ed7dabf8f277", name: "user3" },
            { id: "8b19853a-5fc3-4bd7-899f-078c4159e155", name: "user4" },
            { id: "03ba1057-4088-4c5a-800c-a1d8321984b7", name: "user5" },
          ],
        },
      ],
    };
  },

  methods: {
    createUser(): string[] {
      const users = this.users.map((user) => new User(user));

      return users.map((user) => user.name);
    },

    Groups(): Group[] {
      const groups = this.groups.map((group) => new Group(group));

      return groups;
    },
  },
});
</script>
<style lang="scss" scoped>
.wrap {
  max-width: 960px;
  margin: auto;

  .group {
    text-align: center;

    .list-group{
      min-width: 200px;
    }
    
    &_main{
      min-height: 600px;

      &.border-2{
        border-width: 2px !important;
      }
    }
  }
}
</style>