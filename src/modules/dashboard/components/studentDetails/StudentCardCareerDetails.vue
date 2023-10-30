<template>
  <CardExpansion :title="'Career Details'">
    <q-card flat class="q-my-none q-px-md">
      <h6>Career Name::</h6>
      <q-select
        dense
        outlined
        :options="options"
        v-model="data.careerDetail.career"
        option-value="careerId"
        option-label="name"
        :readonly="emailReadOnly"
        class="q-mb-md"
        style="margin-top: -5px"
      >
        <template v-slot:after>
          <q-btn
            v-if="emailReadOnly"
            @click="emailReadOnly = !emailReadOnly"
            round
            dense
            flat
            icon="edit"
            size="xs"
          />
          <q-btn
            v-else
            @click="emailReadOnly = !emailReadOnly"
            round
            dense
            flat
            icon="save"
            size="xs"
          />
        </template>
      </q-select>
      <h6>Career ID:: <br />{{ data.careerDetail.career.careerId }}</h6>

      <h6>Type: <br />{{ data.careerDetail.type }}</h6>

      <h6>Modality:: <br />{{ data.careerDetail.modality }}</h6>
      <h6>Status: <br />{{ data.careerDetail.status }}</h6>
      <h6>Student ID: <br />{{ data.careerDetail.studentId }}</h6>
    </q-card>
  </CardExpansion>
</template>
  
  <script setup>
import { ref } from "vue";
import CardExpansion from "src/components/CardExpansion.vue";
import jsonOptions from "src/json/careers.json"

const props = defineProps({
  data: Object,
});

const emailReadOnly = ref(true);
const options = ref(jsonOptions);

const selectedCareer = ref({ id: 1, name: "Software Engineering" });

const saveEmail = () => {
  // Update email calling API
};
</script>
      <!-- <style scoped>
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
           -->