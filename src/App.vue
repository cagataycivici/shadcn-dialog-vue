<script setup>
import { ref } from 'vue';

const visible = ref(false);
</script>

<template>
  <ThemeSwitcher />
  <section
    class="
      bg-white
      text-gray-900
      dark:bg-black dark:text-white dark:border-gray-500/40
      p-10
      rounded-lg
      flex flex-col
      items-center
      gap-6
      max-w-3xl
    "
  >
    <span class="text-black dark:text-white font-light text-center text-lg">
      Shadcn Skin for PrimeVue Dialog
    </span>
    <Button label="Edit Profile" @click="visible = true" />

    <Dialog
      v-model:visible="visible"
      modal
      header="Edit profile"
      :style="{ width: '50vw' }"
    >
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Shadcn Skin for PrimeVue Dialog using Unstyled Mode and Tailwind.
      </p>
      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <label
            class="
              text-sm
              font-medium
              leading-none
              peer-disabled:cursor-not-allowed peer-disabled:opacity-70
              text-right text-black
              dark:text-white
            "
            for="name"
            >Name</label
          ><InputText id="name" value="Pedro Duarte" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <label
            class="
              text-sm
              font-medium
              leading-none
              peer-disabled:cursor-not-allowed peer-disabled:opacity-70
              text-right text-black
              dark:text-white
            "
            for="name"
            >Username</label
          ><InputText id="username" value="@peduarte" />
        </div>
      </div>
      <div
        class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"
      >
        <Button
          class="
            inline-flex
            items-center
            justify-center
            rounded-md
            text-sm
            font-medium
            ring-offset-background
            transition-colors transition-duration-200
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-ring
            focus-visible:ring-offset-2
            disabled:pointer-events-none disabled:opacity-50
            bg-gray-900
            text-white
            dark:bg-white dark:text-black dark:hover:bg-white/90
            hover:bg-gray-700
            h-10
            px-4
            py-2
          "
          type="submit"
        >
          Save changes
        </Button>
      </div>
    </Dialog>
  </section>
</template>

<style scoped></style>
