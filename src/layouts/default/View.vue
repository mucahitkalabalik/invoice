<template>
  <v-main>
<router-view v-slot="{ Component, route }">
  <!-- Use any custom transition and  to `fade` -->
  <transition :name="route.meta.transition || 'fade'">
    <component :is="Component" />
  </transition>
</router-view>
  </v-main>
</template>

<script setup>
  //
</script>
<style >
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>