<template>
  <CardExpansion :title="'Sobre el estudiante'" :isExpanded="true" class="q-my-md">
    <q-card flat class="q-my-none q-px-md">
      <h6>Periodo: {{ data.about.period }}</h6>
      <h6>Status: {{ data.about.status }}</h6>
      <h6>Colegio: {{ data.about.college }}</h6>
      <h6>Mod Admission: {{ data.about.admission }}</h6>
      <h6>Segmento: {{ data.about.segment ? data.about.segment : "Sin Información" }}</h6>
      <h6>Segmento Detalle: {{ data.about.segmentDetail ? data.about.segmentDetail : "Sin Información"}}</h6>
      <q-separator class="q-my-md" color="grey-2"></q-separator>
      <h5 class="card-title">Detalle Riesgo de Ingreso</h5>
      <div>
        <div v-for="item in data.riskDetail" v-bind:key="item" class="row">
          <div :class="`col-12 col-lg-5 ${!$q.screen.gt.md ? 'q-pt-md' : ''} `">
            <span class="card-text">{{ item.detail }}</span>
          </div>
          <div class="col-12 col-lg-7">
            <span class="card-text">{{
              item.risk ? item.risk : "Riesgo Sin Definir"
            }}</span
            ><br />
            <span class="card-text"
              >(Nota: {{ item.note ? item.note : "Sin información" }})</span
            >
          </div>
        </div>
      </div>

      <div class="row q-pa-md">
        <div class="col-4"></div>
        <div class="col"></div>
      </div>
    </q-card>
  </CardExpansion>
</template>
      
<script setup>
import CardExpansion from "src/components/CardExpansion.vue";
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
      