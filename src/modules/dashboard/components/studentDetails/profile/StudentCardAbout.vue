<template>
  <CardExpansion :title="'About'">
    <q-card flat class="q-my-none q-px-md">
      <h6>First Name: <br />{{ data.profile.name }}</h6>

      <h6>Last Name: <br />{{ data.profile.lastname }}</h6>
      <!-- EDITABLE -->
      <h6 class="q-mb-none">Email:</h6>

      <q-input
        dense
        v-model="data.profile.email"
        :readonly="emailReadOnly"
        class="q-mb-md"
        style="margin-top: -10px"
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
      </q-input>

      <h6>Phone Number: <br />{{ data.profile.phoneNumber }}</h6>
      <h6>Country: <br />{{ data.profile.country }}</h6>
      <h6>Category: <br />{{ data.profile.category }}</h6>
    </q-card>
  </CardExpansion>
</template>

<script setup>
import { ref } from "vue";
import CardExpansion from "src/components/CardExpansion.vue";
const props = defineProps({
  data: Object,
});

const emailReadOnly = ref(true);

const saveEmail = () => {
  // Update email calling API
};
</script>
  