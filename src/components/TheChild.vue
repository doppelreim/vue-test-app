<template>
  <div>
    the childParam: {{ childParam }}
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class TheChild extends Vue {
    childParam = 'initial';

    created() {
      this.childParam = this.$route.query.child;
    }
  }
</script>
