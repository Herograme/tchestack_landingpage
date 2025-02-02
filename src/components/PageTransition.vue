<template>
  <transition
    name="page"
    mode="out-in"
    appear
  >
    <div 
      :key="$route.path"
      class="page-wrapper"
    >
      <slot />
    </div>
  </transition>
</template>

<style scoped>
.page-wrapper {
  width: 100%;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.page-enter-to,
.page-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style> 