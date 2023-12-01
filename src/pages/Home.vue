<script setup lang="ts"></script>

<template>
  <h1>Poggers Whaddup</h1>
  <p>
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames
    ac turpis egestas.
  </p>
  <p>
    w Pellentesque habitant morbi <i>tristique</i> senectus et netus et
    malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
    ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
    semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
  </p>
  <p>
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames
    ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
    tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
    ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est
    et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed,
    commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
    condimentum, eros ipsum rutrum orci, <i>sagittis tempus</i> lacus enim ac
    dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent
    dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate
    magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis,
    accumsan porttitor, facilisis luctus, metus
  </p>
</template>

<style scoped>
h1 {
  font-weight: var(--header-font-weight);
  filter: drop-shadow(
    0 0 0.6rem rgb(from var(--primary-alt-color) r g b / 70%)
  );
}
p {
  filter: drop-shadow(0 0 0.6rem rgb(from var(--primary-color) r g b / 70%));
}
i {
  filter: drop-shadow(0 0 0.6rem rgb(from var(--secondary-color) r g b / 70%));
}
</style>
