<template>
  <!-- DESKTOP -->
  <q-scroll-area
    v-if="$q.screen.gt.md"
    style="height: 100%"
    :thumb-style="thumbStyle"
    :bar-style="barStyle"
  >
    <StudentCardProfile :data="data.student" class="q-mb-md" />
    <StudentCardAboutResume :data="data.student" class="q-my-md" />
    <StudentCardAbout :data="data.student" class="q-my-md" />
    <StudentCardCareerDetails :data="data.student" class="q-my-md" />
    <WidgetsCard :data="data.student" class="q-my-md" />
  </q-scroll-area>
  <!-- MOBILE -->
  <template v-else>
    <StudentCardProfile :data="data.student" class="q-mb-md" />
    <StudentCardAboutResume :data="data.student" class="q-my-md" />
    <StudentCardAbout :data="data.student" class="q-my-md" />
    <StudentCardCareerDetails :data="data.student" class="q-my-md" />
    <WidgetsCard :data="data.student" class="q-my-md" />
  </template>
</template>
    
  <script setup>
import { onMounted } from "vue";

import StudentCardProfile from "src/modules/dashboard/components/studentDetails/Profile/StudentCardProfile.vue";
import StudentCardAboutResume from "src/modules/dashboard/components/studentDetails/Profile/StudentCardAboutResume.vue";
import StudentCardAbout from "src/modules/dashboard/components/studentDetails/Profile/StudentCardAbout.vue";
import StudentCardCareerDetails from "src/modules/dashboard/components/studentDetails/Profile/StudentCardCareerDetails.vue";
import WidgetsCard from "src/modules/dashboard/components/studentDetails/Profile/WidgetsCard.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const thumbStyle = {
  right: "0px",
  backgroundColor: "#6e6b7b",
  width: "5px",
  opacity: 0.4,
};

const barStyle = {
  right: "2px",

  backgroundColor: "#6e6b7b",
  width: "9px",
  opacity: 0.0,
};

onMounted(() => {});
</script>
 
    