<script setup>
</script>

<template>
  <div id="app" class="bg-gray-50">
    <router-view />
  </div>
</template>

<style>

#app {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}


.router-view-enter-active,
.router-view-leave-active {
  transition: opacity 0.3s ease;
}

.router-view-enter-from,
.router-view-leave-to {
  opacity: 0;
}
</style>
