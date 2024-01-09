<template>
  <header>
    <div v-if="!isMobile" class="nav-container">
      <router-link to="/">
        <img
          src="/nerdwave-raleway-semibold.svg"
          alt="Nerdwave"
          class="logo unselectable"
        />
      </router-link>
      <nav>
        <ul>
          <NavBarLink to="/">Home</NavBarLink>
          <NavBarLink to="/about">About</NavBarLink>
          <NavBarLink to="/contact">Contact</NavBarLink>
        </ul>
      </nav>
    </div>
    <div v-if="isMobile" class="nav-container nav-container-mobile">
      Mobile!
    </div>
  </header>
</template>

<script setup lang="ts">
import NavBarLink from "./NavBarLink.vue";
import { useScreenSizes } from "../../util/screen-size";
const screenSize = useScreenSizes();

const isMobile = screenSize.mdUnder;
</script>
<style scoped>
header {
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  top: 0px;
  min-height: 60px;
  align-items: center;
  display: flex;
  justify-content: center;
}
.nav-container * {
  display: inline;
}
nav {
  margin-bottom: 0.5rem;
  /* margin-right: 1em; */
}
.nav-container {
  background-color: var(--background-alt-color);
  /* background-image: linear-gradient(
    to right,
    var(--background-gradient-start),
    var(--background-gradient-middle),
    var(--background-gradient-end)
  ); */
  box-shadow: 0 0 16px 0 #000000ba;
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  justify-content: space-between;
  /* margin-left: 30px;
  margin-right: 30px; */
  backdrop-filter: blur(5px);
  max-width: 1142px;
}

.nav-container-mobile {
  height: 60px;
}
.logo {
  margin: 1.3em;
  margin-top: 0.9em;
  margin-left: 0;
  padding-left: 40px;
  height: 3rem;
  will-change: filter;
  transition: filter 200ms;
  filter: drop-shadow(0 0 0.6rem rgb(from var(--primary-color) r g b / 80%));
}
.logo:hover {
  filter: drop-shadow(
    0 0 0.8rem rgb(from var(--primary-alt-color) r g b / 90%)
  );
}
</style>
