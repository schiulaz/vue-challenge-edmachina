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
      <div :class="`${$q.screen.gt.sm ? 'row wrap' : ''}  q-gutter-md`">
        <StatsCard :data="stats" :icon="'today'">
          <template v-slot:headerTitle>Record Age</template>
          <template v-slot:headerValue>{{ stats.recordAge.value }}</template>
          <template v-slot:footerContent>
            <span class="q-mr-sm">Created on</span>
            <span>{{
              formatDate(stats.recordAge.created, "MMM DD, YYYY")
            }}</span>
          </template>
        </StatsCard>
        <StatsCard :data="stats" :icon="'check_circle'">
          <template v-slot:headerTitle>Status</template>
          <template v-slot:headerValue>{{ stats.status.value }}</template>
          <template v-slot:footerContent>
            <span class="q-mr-sm">Updated</span>
            <span>{{ formatDate(stats.status.created, "MMM DD, YYYY") }}</span>
          </template>
        </StatsCard>
        <StatsCard :data="stats" :icon="'location_on'">
          <template v-slot:headerTitle>Country</template>
          <template v-slot:headerValue>{{ stats.country.name }}</template>
          <template v-slot:footerContent>
            <span class="q-mr-sm">State</span>
            <span>{{ stats.country.state }}</span>
          </template>
        </StatsCard>
        <StatsCard :data="stats" :icon="'contact_page'">
          <template v-slot:headerTitle>Last Contact</template>
          <template v-slot:headerValue
            >{{ calculateDiff(stats.lastContact.created) }} days ago</template
          >
          <template v-slot:footerContent>
            <span>{{
              formatDate(stats.lastContact.created, "MMM DD, YYYY")
            }}</span
            ><span>{{ formatDate(stats.lastContact.created, "hh:mm a") }}</span>
          </template>
        </StatsCard>
        <StatsCard :data="stats" :icon="'timeline'">
          <template v-slot:headerTitle>Last Activity</template>
          <template v-slot:headerValue
            >{{ calculateDiff(stats.lastActivity.created) }} days ago</template
          >
          <template v-slot:footerContent>
            <span>{{
              formatDate(stats.lastActivity.created, "MMM DD, YYYY")
            }}</span
            ><span>{{
              formatDate(stats.lastActivity.created, "hh:mm a")
            }}</span>
          </template>
        </StatsCard>
      </div>

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
import moment from "moment";
import StatsCard from "src/components/StatsCard.vue";

import OverviewTabs from "../recordDetails/overviewTab/OverviewTabs.vue";

import json from "src/json/overviewStats.json";

const props = defineProps({
  data: { type: Object },
});

const tab = ref("overview");
const stats = ref(json);

const formatDate = (value, format) => {
  return moment(value).format(format);
};
const calculateDiff = (date) => {
  return moment().diff(date, "days");
};
</script>
  
  <style scoped>
:deep .q-tab__label {
  font-size: 16px;
  line-height: 1.715em;
  font-weight: 700;
  color: inherit !important;
}
</style>