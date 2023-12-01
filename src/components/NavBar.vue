<template>
  <header>
    <img src="/nerdwave-raleway-medium.svg" alt="Nerdwave" class="logo" />
    <nav>
      <ul>
        <li>
          <router-link class="selected" to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
  background-color: var(--background-alt-color);
  position: fixed;
  left: 0;
  right: 0;
  top: 5px;
  min-height: 60px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 16px 0 #000000ba;
  justify-content: space-between;
}
header * {
  display: inline;
}
nav {
  /* margin-bottom: 0.5rem; */
  margin-right: 1em;
}
a {
  text-decoration: underline;
  text-decoration-color: transparent;
  color: var(--text-color);
  font-weight: var(--header-font-weight);
  font-size: 1.5rem;
  will-change: text-decoration-color filter;
  transition: filter 300ms;
  transition: text-decoration-color 200ms;
  margin: 20px;
  /* will-change: filter;
  transition: filter 300ms; */
  filter: drop-shadow(0 0 0.6rem rgb(from var(--primary-color) r g b / 70%));
}
a:hover {
  /* text-decoration: underline; */
  text-decoration-color: rgb(from var(--secondary-color) r g b / 65%);
  filter: drop-shadow(
    0 0 0.6rem rgb(from var(--primary-alt-color) r g b / 90%)
  );
}
.selected {
  /* text-decoration: underline; */
  text-decoration-color: rgb(from var(--primary-alt-color) r g b / 65%);
  filter: drop-shadow(
    0 0 0.6rem rgb(from var(--secondary-alt-color) r g b / 100%)
  );
}
.logo {
  margin: 1.3em;
  margin-top: 0.83em;
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
