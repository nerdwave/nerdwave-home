<script setup lang="ts">
import { computed, ref } from "vue";

const minRandom = 0;
const maxRandom = 1500;
const magicOffset = 69;
const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const countMagicNumber = magicOffset + randomNumber(minRandom, maxRandom);

const count = ref(0);
const isMagic = computed(() => count.value >= countMagicNumber);
const brdsz = computed(
  () =>
    0.9 + (2 * count.value) / countMagicNumber + (count.value % 10) * 0.9 + "em"
);
const pixelborder = computed(() => {
  const padding = [0.6, 1.2];
  const step = Math.floor(count.value / 10);
  return padding.map((p) => p * 16 + step * p + "px").join(" ");
});
const reset = () => (count.value = 0);
</script>

<template>
  <div class="card">
    <button v-if="!isMagic" class="btn" @click="count++">
      count is {{ count }}
    </button>
    <p v-if="!isMagic">
      Click the button, I dare you. Who knows what happens when it reaches a
      magic number...
    </p>
    <img
      v-if="isMagic"
      src="/8e7f4c72-0396-4c32-b511-4808b9cd.jpg"
      class="lol"
      alt="Catt"
      @click="reset"
    />
  </div>
  <p class="shmol">I'm not responsible for any repetitive strain injuries</p>
</template>

<style scoped>
.btn {
  box-shadow: 0 0 v-bind("brdsz") #b038ff77;
  padding: v-bind("pixelborder");
  will-change: filter;
  transition: filter 300ms;
}
.btn:hover {
  filter: drop-shadow(0 0 0.5em #de38ff77);
}
.shmol {
  color: #888;
}
.lol {
  width: 100%;
  height: auto;
  border-radius: 3em;
  box-shadow: 0 0 1em #b038ff;
  will-change: filter;
  transition: filter 300ms;
}
.lol:hover {
  filter: drop-shadow(0 0 1.5em #de38ff);
}
</style>
