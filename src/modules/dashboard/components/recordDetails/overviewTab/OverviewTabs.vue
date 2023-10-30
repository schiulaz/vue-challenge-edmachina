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
const stats = ref({
  recordAge: {
    icon: "today",
    title: "Record Age",
    value: "12 days",
    firsDesc: "Created on",
    secondDesc: "Jan 2, 2023",
  },
  status: {
    icon: "check_circle",
    title: "Status",
    value: "Active",
    firsDesc: "Created on",
    secondDesc: "Jan 2, 2023",
  },
  country: {
    icon: "location_on",
    title: "Country",
    value: "Mexico",
    firsDesc: "State",
    secondDesc: "Córdoba",
  },
  lastContact: {
    icon: "contact_page",
    title: "Last Contact",
    value: "2 days ago",
    firsDesc: "Oct 23, 2023",
    secondDesc: "2:43pm",
  },
  lastActivity: {
    icon: "timeline",
    title: "Last activity",
    value: "7 days ago",
    firsDesc: "Oct 21, 2023",
    secondDesc: "2:50px",
  },
});
</script>
    
    <style scoped>
:deep .q-tab__label {
  font-size: 16px;
  line-height: 1.715em;
  font-weight: 700;
  color: inherit !important;
}

.radius-4 {
  border-radius: 4px;
}
</style>