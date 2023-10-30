<template>
  <q-tabs
    v-model="tab"
    class="text-ed-grey primary"
    indicator-color="primary"
    style="border-bottom: 1px solid #6e6b7b"
  >
    <q-tab
      name="overview"
      label="overview"
      :class="`tabs text-capitalize ${
        tab == 'overview' ? 'text-grey-8' : 'text-grey'
      }`"
    />
    <q-tab
      name="enrollment"
      label="enrollment"
      :class="`tabs text-capitalize ${
        tab == 'enrollment' ? 'text-grey-8' : 'text-grey'
      }`"
    />
    <q-tab
      name="academic"
      label="academic"
      :class="`tabs text-capitalize ${
        tab == 'academic' ? 'text-grey-8' : 'text-grey'
      }`"
    />
    <q-separator></q-separator>
  </q-tabs>
  <q-tab-panels
    v-model="tab"
    animated
    transition-next="fade"
    transition-prev="fade"
    transition-duration="500"
    class="bg-grey-2"
  >
    <q-tab-panel name="overview" class="q-px-none">
      <OverviewStatsCards :data="stats" />

      <div><OverviewTabs /></div>
    </q-tab-panel>
    <q-tab-panel name="enrollment"
      ><div class="fit row justify-center q-my-lg">
        <q-icon
          name="visibility_off"
          size="70px"
          class="text-grey-4"
        ></q-icon></div
    ></q-tab-panel>
    <q-tab-panel name="academic"
      ><div class="fit row justify-center q-my-lg">
        <q-icon
          name="visibility_off"
          size="70px"
          class="text-grey-4"
        ></q-icon></div
    ></q-tab-panel>
  </q-tab-panels>
</template>
   
   <script setup>
import { ref } from "vue";
import OverviewStatsCards from "../recordDetails/overviewTab/OverviewStatsCards.vue";
import OverviewTabs from "../recordDetails/overviewTab/OverviewTabs.vue";

import json from "src/json/overviewStats.json";

const props = defineProps({
  data: Object,
});

const tab = ref("overview");
const stats = ref(json);
</script>
  
  <style scoped>
:deep .q-tab__label {
  font-size: 16px;
  line-height: 1.715em;
  font-weight: 700;
  color: inherit !important;
}
</style>