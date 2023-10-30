<template>
  <q-expansion-item
    v-model="expanded"
    :label="title"
    header-class="bg-white text-grey"
  >
    <template v-slot:header>
      <div class="row fit">
        <h5 class="card-title">
          <q-icon name="drag_indicator" class="q-mr-sm" />{{ props.title }}
        </h5>
      </div>
    </template>
    <q-card>
      <q-card-section>
        <slot></slot>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>
    
<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  isExpanded: {
    type: Boolean,
    default: false,
  },
});
const expanded = ref(props.isExpanded);
</script>
  
  <style>
</style>
    