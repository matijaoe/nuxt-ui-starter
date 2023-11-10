<script lang="ts" setup>
</script>

<template>
  <div class="space-y-8">
    <UCard v-for="n in 20" :key="n">
      <template #header>
        <div class="flex justify-between">
          <h1>Welcome to Nuxt UI Starter</h1>
        </div>
      </template>

      <div class="flex items-center gap-3">
        <UButton icon="i-ph-book-open-duotone" to="https://ui.nuxt.com" target="_blank">
          Nuxt UI Documentation
        </UButton>
      </div>
    </UCard>
  </div>
</template>
