<template>
  <q-page class="bg-grey-2 flex q-pr-md q-py-md">
    <div class="row items-stretch full-width q-col-gutter-md">
      <div class="col-12 col-md-3">
       <StudentDetails :data="data"/>
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

import StudentDetails from "../components/studentDetails/StudentDetails.vue";
import Breadcrumb from "../../../components/Breadcrumb.vue";
import RecordDetails from "../components/recordDetails/RecordDetails.vue";

import json from "src/json/profile.json";

const data = ref(json); // recuperable via actions si estuviera la API disponible

const breadcrumbText = ref("Record Details / " + data.value.student.profile.id);


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
  