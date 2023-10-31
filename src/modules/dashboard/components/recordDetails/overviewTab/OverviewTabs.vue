<template>
  <q-tabs
    inline-label
    v-model="tab"
    class="text-ed-grey q-mt-md"
    align="left"
    indicator-color="transparent"
  >
    <q-tab
      name="activity"
      label="activity"
      :class="`text-capitalize shadow-1 radius-t6 ${
        tab == 'activity' ? 'bg-white text-grey-8' : 'bg-grey-3 text-grey'
      }`"
    />
    <q-tab
      name="emails"
      label="emails"
      icon="mail"
      :class="`text-capitalize shadow-1 radius-t6 ${
        tab == 'emails' ? 'bg-white text-grey-8' : 'bg-grey-3 text-grey'
      }`"
    />
    <q-tab
      name="calls"
      label="calls"
      icon="call"
      :class="`text-capitalize shadow-1 radius-t6 ${
        tab == 'calls' ? 'bg-white text-grey-8' : 'bg-grey-3 text-grey'
      }`"
    />
  </q-tabs>
  <q-tab-panels
    v-model="tab"
    animated
    transition-next="fade"
    transition-prev="fade"
    transition-duration="500"
    class="bg-grey-2"
  >
    <q-tab-panel name="activity" class="q-pa-none">
      <q-card flat class="q-pa-lg">
        <ActivityTimeline />
      </q-card>
    </q-tab-panel>
    <q-tab-panel name="emails" class="q-pa-none"
      ><q-card flat class="q-pa-lg" style="height: 600px"> </q-card
    ></q-tab-panel>
    <q-tab-panel name="calls" class="q-pa-none"
      ><q-card flat class="q-pa-lg" style="height: 600px"> </q-card
    ></q-tab-panel>
  </q-tab-panels>
</template>
     
<script setup>
import { ref } from "vue";
import ActivityTimeline from "./activityTab/ActivityTimeline.vue";

const props = defineProps({
  data: Object,
});

const tab = ref("activity");
</script>
    
<style scoped>
:deep .q-tab__label {
  font-size: 16px;
  line-height: 1.715em;
  font-weight: 700;
  color: inherit !important;
}

</style>