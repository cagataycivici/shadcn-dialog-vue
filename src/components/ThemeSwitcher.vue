<template>
  <div class="card flex justify-end p-2 mb-4 fixed right-0 top-0">
    <button
      type="button"
      class="
        flex
        bg-transparent
        border-none
        rounded-full
        p-3
        hover:bg-white/70
        cursor-pointer
        dark:hover:bg-gray-500/70
        transition-duration-200
      "
      @click="onThemeToggler"
    >
      <i :class="`dark:text-white pi ${iconClass}`" />
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const iconClass = ref('pi-moon');

const onThemeToggler = () => {
  const root = document.getElementsByTagName('html')[0];

  root.classList.toggle('dark');
  iconClass.value = iconClass.value === 'pi-moon' ? 'pi-sun' : 'pi-moon';
};
</script>
