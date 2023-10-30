<template>
  <div :class="`${$q.screen.gt.sm ? 'row wrap' : ''}  q-gutter-md`">
    <q-card flat class="col q-pa-md">
      <div class="">
        <div
          :class="`${$q.screen.gt.md ? 'row justify-between' : 'text-center'} `"
        >
          <q-avatar
            :size="`${$q.screen.gt.md ? '40px' : '35px'}`"
            :font-size="`${$q.screen.gt.md ? '25px' : '20px'}`"
            color="accent"
            text-color="white"
            icon="today"
            :class="$q.screen.gt.md ? '' : 'q-mb-md'"
          />
          <div
            :class="`${
              $q.screen.gt.md ? 'column text-right' : 'text-center'
            } content-end q-mb-sm`"
          >
            <h6 class="card-title" style="margin-bottom: 0px">Record Age</h6>
            <span class="text-bold text-dark" style="font-size: 18px">{{
              data.recordAge.value
            }}</span>
          </div>
        </div>
      </div>
      <q-separator class="q-my-sm" />
      <div
        :class="`${
          $q.screen.gt.md ? 'row justify-between' : 'column text-center'
        }  card-title`"
      >
        <span class="q-mr-sm">Created on</span
        ><span>{{ formatDate(data.recordAge.created, "MMM DD, YYYY") }}</span>
      </div>
    </q-card>
    <q-card flat class="col q-pa-md">
      <div class="">
        <div
          :class="`${$q.screen.gt.md ? 'row justify-between' : 'text-center'} `"
        >
          <q-avatar
            :size="`${$q.screen.gt.md ? '40px' : '35px'}`"
            :font-size="`${$q.screen.gt.md ? '25px' : '20px'}`"
            color="accent"
            text-color="white"
            icon="check_circle"
            :class="$q.screen.gt.md ? '' : 'q-mb-md'"
          />
          <div
            :class="`${
              $q.screen.gt.md ? 'column text-right' : 'text-center'
            } content-end q-mb-sm`"
          >
            <h6 class="card-title" style="margin-bottom: 0px">Sataus</h6>
            <span class="text-bold text-dark" style="font-size: 18px">{{
              data.status.value
            }}</span>
          </div>
        </div>
      </div>
      <q-separator class="q-my-sm" />
      <div
        :class="`${
          $q.screen.gt.md ? 'row justify-between' : 'column text-center'
        }  card-title`"
      >
        <span>Updated</span
        ><span>{{ formatDate(data.status.created, "MMM DD, YYYY") }}</span>
      </div>
    </q-card>
    <q-card flat class="col q-pa-md">
      <div class="">
        <div
          :class="`${$q.screen.gt.md ? 'row justify-between' : 'text-center'} `"
        >
          <q-avatar
            :size="`${$q.screen.gt.md ? '40px' : '35px'}`"
            :font-size="`${$q.screen.gt.md ? '25px' : '20px'}`"
            color="accent"
            text-color="white"
            icon="location_on"
            :class="$q.screen.gt.md ? '' : 'q-mb-md'"
          />
          <div
            :class="`${
              $q.screen.gt.md ? 'column text-right' : 'text-center'
            } content-end q-mb-sm`"
          >
            <h6 class="card-title" style="margin-bottom: 0px">Country</h6>
            <span class="text-bold text-dark" style="font-size: 18px">{{
              data.country.name
            }}</span>
          </div>
        </div>
      </div>
      <q-separator class="q-my-sm" />
      <div
        :class="`${
          $q.screen.gt.md ? 'row justify-between' : 'column text-center'
        }  card-title`"
      >
        <span>State</span><span>{{ data.country.state }}</span>
      </div>
    </q-card>
    <q-card flat class="col q-pa-md">
      <div class="">
        <div
          :class="`${$q.screen.gt.md ? 'row justify-between' : 'text-center'} `"
        >
          <q-avatar
            :size="`${$q.screen.gt.md ? '40px' : '35px'}`"
            :font-size="`${$q.screen.gt.md ? '25px' : '20px'}`"
            color="accent"
            text-color="white"
            icon="contact_page"
            :class="$q.screen.gt.md ? '' : 'q-mb-md'"
          />
          <div
            :class="`${
              $q.screen.gt.md ? 'column text-right' : 'text-center'
            } content-end q-mb-sm`"
          >
            <h6 class="card-title" style="margin-bottom: 0px">Last Contact</h6>
            <span class="text-bold text-dark" style="font-size: 18px"
              >{{ calculateDiff(data.lastContact.created) }} days ago
            </span>
          </div>
        </div>
      </div>
      <q-separator class="q-my-sm" />
      <div
        :class="`${
          $q.screen.gt.md ? 'row justify-between' : 'column text-center'
        }  card-title`"
      >
        <span>{{ formatDate(data.lastContact.created, "MMM DD, YYYY") }}</span
        ><span>{{ formatDate(data.lastContact.created, "hh:mm a") }}</span>
      </div>
    </q-card>
    <q-card flat class="col q-pa-md">
      <div class="">
        <div
          :class="`${$q.screen.gt.md ? 'row justify-between' : 'text-center'} `"
        >
          <q-avatar
            :size="`${$q.screen.gt.md ? '40px' : '35px'}`"
            :font-size="`${$q.screen.gt.md ? '25px' : '20px'}`"
            color="accent"
            text-color="white"
            :icon="data.lastActivity.icon"
            :class="$q.screen.gt.md ? '' : 'q-mb-md'"
          />
          <div
            :class="`${
              $q.screen.gt.md ? 'column text-right' : 'text-center'
            } content-end q-mb-sm`"
          >
            <h6 class="card-title" style="margin-bottom: 0px">
              {{ data.lastActivity.title }}
            </h6>
            <span class="text-bold text-dark" style="font-size: 18px"
              >{{ calculateDiff(data.lastActivity.created) }} days ago</span
            >
          </div>
        </div>
      </div>
      <q-separator class="q-my-sm" />
      <div
        :class="`${
          $q.screen.gt.md ? 'row justify-between' : 'column text-center'
        }  card-title`"
      >
        <span>{{ formatDate(data.lastActivity.created, "MMM DD, YYYY") }}</span
        ><span>{{ formatDate(data.lastActivity.created, "hh:mm a") }}</span>
      </div>
    </q-card>
  </div>
</template>
       
  <script setup>
import { ref } from "vue";
import moment from "moment";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  icon: {
    type: Boolean,
    default: false,
  },
});

const formatDate = (value, format) => {
  return moment(value).format(format);
};
const calculateDiff = (date) => {
  return moment().diff(date, "days");
};
</script>
      
      <style scoped>
.tabs {
  color: #6e6b7b;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
}

.overview-stats-card {
  width: 20%;
}
</style>