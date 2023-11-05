<script lang="ts" setup>
const colorOptions = ['system', 'light', 'dark'];
</script>


<template>
  <ClientOnly>
    <ColorScheme>
      <USelect class="mr-4" size="sm" v-model="$colorMode.preference" variant="outline" :options="colorOptions" />
    </ColorScheme>
  </ClientOnly>
</template>
