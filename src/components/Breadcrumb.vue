<template>
  <div class="fit row wrap justify-between q-pa-md">
    <h6 class="text-primary">{{title}}</h6>
    <q-icon name="app_registration" size="24px" class="text-link"></q-icon>
  </div>
</template>
      
  <script setup>
const props = defineProps(
  {
    title: String,
    required: true,
  },
  {
    link: String,
    default: "#"
  }
);
</script>
    
    <style>
</style>
      