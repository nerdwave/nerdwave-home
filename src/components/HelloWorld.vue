<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Click the button, I dare you. Who knows what happens when it reaches a
      magic number...
    </p>
  </div>
  <p class="read-the-docs">
    I'm not responsible for any repeated strain injuries
  </p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
