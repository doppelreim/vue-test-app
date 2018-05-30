<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <the-child></the-child>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TheChild from './TheChild.vue';

@Component({
  components: {
    TheChild,
  },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>
