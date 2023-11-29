<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <a href="https://nerdwave.io/" target="_self">
      <img src="./assets/nerdwave-text.svg" class="logo" alt="Nerdwave logo" />
    </a>
  </div>
  <HelloWorld />
</template>

<style scoped>
.logo {
  height: 8em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 1.5em #de38ff);
}
.logo {
  filter: drop-shadow(0 0 1em #b038ff);
}
</style>
