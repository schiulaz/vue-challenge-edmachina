<template>
  <q-card flat class="q-px-sm">
    <div class="row q-pa-lg">
      <div class="col-4">
        <q-avatar :size="$q.screen.gt.md ? '65px' : '50px'">
          <img src="~assets/student.png" />
        </q-avatar>
      </div>
      <div class="col">
        <h6 class="col-8 student-name">
          {{ data.profile.name }} {{ data.profile.lastname }}
        </h6>
        <div class="q-mt-sm">
          <span class="student-text">{{ data.profile.name }} </span>
        </div>
        <div class="student-text">
          <span>Status: Active </span>
        </div>
      </div>
      <div class="fit row wrap justify-between q-mt-lg ed-grey">
        <q-btn round flat icon="edit_note"></q-btn>
        <q-btn round flat icon="chat"></q-btn>
        <q-btn round flat icon="today"></q-btn>
        <q-btn round flat icon="phone"></q-btn>
        <q-btn round flat icon="edit_note"></q-btn>
        <q-btn round flat icon="more_horiz"></q-btn>
      </div>
    </div>
  </q-card>
</template>
    
<script setup>
const props = defineProps({
  data: Object,
});
</script>
<style scoped>
.student-name {
  color: #4436fd;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
@media screen and (max-width: 1280) {
  .student-name {
    font-size: 14px!important;
  }
}

.student-text {
  color: #6e6b7b;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
}

.student-avatar {
  border: 3px solid #91cc75;
  border-radius: 100%;
}
</style>
    