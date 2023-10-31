<template>
  <div>
    <div
      :class="`${
        $q.screen.gt.md ? 'row' : 'column'
      } justify-between items-center q-my-sm`"
    >
      <div class="col">
        <h6>Timeline</h6>
      </div>
      <div class="col">
        <div class="row q-col-gutter-sm">
          <div class="col-12 col-md-3">
            <q-select
              dense
              outlined
              v-model="year"
              :options="yearOptions"
              @update:model-value="filterByYear(year)"
              label="Year"
              min-width="150px"
            >
              <template v-if="year" v-slot:append>
                <q-icon
                  size="15px"
                  @click="year = null"
                  name="cancel"
                /> </template
            ></q-select>
          </div>
          <div class="col-12 col-md-3">
            <q-select
              dense
              outlined
              v-model="user"
              :options="userOptions"
              label="Filter By User"
            >
              <template v-if="user" v-slot:append>
                <q-icon
                  size="15px"
                  @click="user = null"
                  name="cancel"
                /> </template
            ></q-select>
          </div>
          <div class="col-12 col-md-6">
            <q-input dense outlined v-model="search" label="Search">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
        </div>
      </div>
    </div>

    <q-scroll-area
      v-if="$q.screen.gt.md"
      style="height: 520px"
      :thumb-style="thumbStyle"
      :bar-style="barStyle"
      class="row items-stretch full-width"
    >
      <q-timeline color="secondary" class="q-mt-lg q-px-md">
        <template v-for="(item, index) in results" v-bind:key="item">
          <q-timeline-entry v-if="item.icon" :icon="item.icon">
            <h6
              v-if="isNewMonth(index)"
              class="q-pa-md text-secondary timeline-entry"
            >
              {{ formatDate(item.created, "MMMM YYYY") }}
            </h6>
            <div class="bg-grey-3 radius-4">
              <div class="row justify-between">
                <div class="q-pt-sm q-px-md text-capitalize text-primary">
                  <h6 class="text-secondary">
                    {{ item.title }}
                    <span class="text-grey-7">by {{ item.user }}</span>
                  </h6>
                </div>
                <h6 class="q-ma-sm">
                  {{ formatDate(item.created, "MMM DD, YYYY") }}
                </h6>
              </div>
              <div class="q-pb-sm q-px-md text-lowercase">
                {{ item.description }}
                <span v-if="item.link"
                  ><a
                    href="item.link"
                    class="text-caption text-bold text-capitalize text-secondary"
                    >View Email</a
                  ></span
                >
              </div>
            </div>
          </q-timeline-entry>
          <q-timeline-entry v-else>
            <h6
              v-if="isNewMonth(index)"
              class="q-pa-sm text-secondary timeline-entry"
            >
              {{ formatDate(item.created, "MMMM YYYY") }}
            </h6>
            <div class="bg-grey-3 radius-4">
              <div class="row justify-between">
                <div class="q-py-sm q-px-md text-capitalize text-primary">
                  <h6 class="text-secondary">
                    {{ item.title }}
                    <span class="text-grey-7">by {{ item.user }}</span>
                  </h6>
                </div>
                <h6 class="q-ma-sm">
                  {{ formatDate(item.created, "MMM DD, YYYY") }}
                </h6>
              </div>
              <div class="q-py-sm q-px-md text-lowercase">
                {{ item.description }}
                <span v-if="item.link"
                  ><a
                    :href="item.link"
                    class="text-caption text-bold text-capitalize text-secondary"
                    >View Email</a
                  ></span
                >
              </div>
            </div>
          </q-timeline-entry>
        </template>
      </q-timeline>
    </q-scroll-area>
    <q-timeline v-else color="secondary" class="q-mt-lg q-px-md">
      <template v-for="(item, index) in data" v-bind:key="item">
        <q-timeline-entry v-if="item.icon" :icon="item.icon">
          <h6
            v-if="isNewMonth(index)"
            class="q-pa-md text-secondary timeline-entry"
          >
            {{ formatDate(item.created, "MMMM YYYY") }}
          </h6>
          <div class="bg-grey-3 radius-4">
            <div class="row justify-between">
              <div class="q-pt-sm q-px-md text-capitalize text-primary">
                <h6 class="text-secondary">
                  {{ item.title }}
                  <span class="text-grey-7">by {{ item.user }}</span>
                </h6>
              </div>
              <h6 class="q-ma-sm">{{ formatDate(item.created) }}</h6>
            </div>
            <div class="q-pb-sm q-px-md text-lowercase">
              {{ item.description }}
            </div>
          </div>
        </q-timeline-entry>
        <q-timeline-entry v-else>
          <h6
            v-if="isNewMonth(index)"
            class="q-pa-sm text-secondary timeline-entry"
          >
            {{ formatDate(item.created, "MMMM YYYY") }}
          </h6>
          <div class="bg-grey-3 radius-4">
            <div class="row justify-between">
              <div class="q-py-sm q-px-md text-capitalize text-primary">
                <h6 class="text-secondary">
                  {{ item.title }}
                  <span class="text-grey-7">by {{ item.user }}</span>
                </h6>
              </div>
              <h6 class="q-ma-sm">{{ formatDate(item.created) }}</h6>
            </div>
            <div class="q-py-sm q-px-md text-lowercase">
              {{ item.description }}
            </div>
          </div>
        </q-timeline-entry>
      </template>
    </q-timeline>
  </div>
</template>
       
       <script setup>
import { ref, computed } from "vue";
import moment from "moment";
import json from "src/json/activityTimeline.json";

const data = ref(json);
const year = ref(null);
const user = ref(null);
const search = ref(null);
const userOptions = ref(["Gerardo Moyano", "Prof. Jean Charleton"]);
const yearOptions = ref(["2023", "2022"]);

const thumbStyle = ref({
  right: "0px",
  backgroundColor: "#6e6b7b",
  width: "5px",
  opacity: 0.4,
});

const barStyle = {
  right: "2px",

  backgroundColor: "#6e6b7b",
  width: "9px",
  opacity: 0.0,
};

const results = computed(() => {
  if (year.value) return filterByYear();
  else if (user.value) return filterByUser();
  else if (search.value) return filterBySearch();
  else return data.value;
});

const filterByYear = () => {
  return data.value.filter(
    (item) => moment(item.created).format("YYYY") == year.value
  );
};

const filterByUser = () => {
  return data.value.filter((item) => user.value == item.user);
};

const filterBySearch = () => {
  console.log(data.value);
  return data.value.filter((item) =>
    item.title.toLowerCase().includes(search.value.toLowerCase())
  );
};

const formatDate = (value, format) => {
  return moment(value).format(format);
};

const isNewMonth = (index) => {
  if (
    index > 0 &&
    formatDate(data.value[index - 1], "MMMM YYYY") ==
      formatDate(data.value[index], "MMMM YYYY")
  )
    return false;
  else return true;
};
</script>
 <style scoped>
.timeline-entry {
  margin-top: -40px;
  padding: 0px 15px;
}
</style>