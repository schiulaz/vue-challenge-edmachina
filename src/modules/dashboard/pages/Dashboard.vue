<template>
  <q-page class="bg-grey-2 flex q-pr-md q-py-md">
    <div class="row items-stretch full-width q-col-gutter-md">
      <div class="col-12 col-md-3">
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
      </div>

      <div class="col-12 col-md-9">
        <q-card flat class="bg-grey-2">
          <Breadcrumb :title="breadcrumbText" />
          <RecordDetails :data="data" />
        </q-card>
      </div>
    </div>
  </q-page>
</template>
  
<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import StudentCardProfile from "../components/studentDetails/StudentCardProfile.vue";
import StudentCardAboutResume from "../components/studentDetails/StudentCardAboutResume.vue";
import StudentCardAbout from "../components/studentDetails/StudentCardAbout.vue";
import StudentCardCareerDetails from "../components/studentDetails/StudentCardCareerDetails.vue";
import WidgetsCard from "../components/studentDetails/WidgetsCard.vue";
import Breadcrumb from "../../../components/Breadcrumb.vue";
import RecordDetails from "../components/recordDetails/RecordDetails.vue";

import json from "src/json/profile.json";

const data = ref(json); // recuperable via actions si estuviera la API disponible

const breadcrumbText = ref("Record Details / " + data.value.student.profile.id);

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

onMounted(() => {
  // dispatch de action para obtener datos si hubiera llamado a API
});
</script>

<style>
.card-title {
  font-size: 14px;
  font-weight: 700;
  color: #6e6b7b;
  margin-bottom: 8px;
}

.card-text {
  font-size: 12px;
  font-weight: 700;
  color: #6e6b7b;
}

.student-info {
  max-height: 750px;
  overflow: auto;
}

@media screen and (max-width: 1280px) {
  .card-title {
    font-size: 12px;
    font-weight: 700;
    color: #6e6b7b;
    margin-bottom: 8px;
  }
}
</style>
  