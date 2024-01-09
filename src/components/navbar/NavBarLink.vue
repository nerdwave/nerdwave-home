<template>
  <li>
    <router-link
      :class="{ selected: to == route.path, unselectable: true }"
      :active="to == route.path"
      :to="to"
      ><slot
    /></router-link>
  </li>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
const { to } = defineProps<{ to: string }>();
</script>

<style scoped>
a {
  text-decoration: none;
  /* text-decoration-color: transparent; */
  color: var(--text-color);
  font-weight: var(--header-font-weight);
  font-size: 1.5rem;
  will-change: border-bottom-color filter;
  transition: filter 300ms;
  transition: border-bottom-color 200ms;
  margin: 0;
  margin-right: 40px;
  padding: 0px;
  /* will-change: filter;
  transition: filter 300ms; */
  border-bottom: 2px solid transparent;
  /* filter: drop-shadow(0 0 0.6rem rgb(from var(--primary-color) r g b / 70%)); */
}
a:hover {
  /* text-decoration: underline; */
  border-bottom-color: rgb(from var(--secondary-color) r g b / 55%);
  /* text-decoration-color: rgb(from var(--secondary-color) r g b / 65%); */
  /* filter: drop-shadow(
    0 0 0.6rem rgb(from var(--primary-alt-color) r g b / 90%)
  ); */
}
.selected {
  /* text-decoration: underline; */
  /* text-decoration-color: rgb(from var(--primary-alt-color) r g b / 65%); */
  border-bottom-color: rgb(from var(--primary-alt-color) r g b / 55%);
  /* filter: drop-shadow(
    0 0 0.6rem rgb(from var(--secondary-alt-color) r g b / 100%)
  ); */
}
</style>
