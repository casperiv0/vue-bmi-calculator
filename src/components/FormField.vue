<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<template>
  <div class="flex flex-col mb-6">
    <label class="font-medium mb-3">{{ label }}</label>
    <slot />
  </div>
</template>
