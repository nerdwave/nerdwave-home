<script setup lang="ts">
import NavBar from "./components/navbar/NavBar.vue";
import { useTitle } from "@vueuse/core";
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const titleText = computed(() => {
  if (route.name === null || route.name === undefined) {
    return "Nerdwave";
  } else {
    return (route.name as string) + " | Nerdwave";
  }
});
useTitle(titleText);
</script>

<template>
  <div class="background">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <NavBar />
  </div>
</template>

<style scoped>
.fade-enter-active {
  transition: opacity 0.2s ease-in;
}
.fade-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.background {
  background-color: var(--background-color);
  /* background-image: linear-gradient(
    to bottom right,
    var(--background-gradient-start),
    var(--background-gradient-middle),
    var(--background-gradient-end)
  ); */
  min-height: calc(100vh - 150px);
  /* display: flex; */
  flex: auto;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  margin-bottom: 60px;
  padding-top: 90px;
  box-shadow: 0 12px 32px 0 #0000009f;
  border: 2px solid 000000bf;
  max-width: 1152px;
}

.card {
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  flex: auto;

  /* margin: 40px; */
  padding: 90px;
  padding-top: 0;
}
</style>
