<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/about/5">Take 5</router-link>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator';
  import { Route } from 'vue-router';

  @Component
  export default class extends Vue {
    @Watch('$route')
    private async onParamChanged(newRoute: Route, oldRoute: Route) {
      console.log('oldRoute', oldRoute.params.id, typeof oldRoute.params.id);
      console.log('newRoute', newRoute.params.id, typeof newRoute.params.id);
    }
  }
</script>
