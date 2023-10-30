<template>
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
          :icon="data.icon"
          :class="$q.screen.gt.md ? '' : 'q-mb-md'"
        />
        <div
          :class="`${
            $q.screen.gt.md ? 'column text-right' : 'text-center'
          } content-end q-mb-sm`"
        >
          <h6 class="card-title" style="margin-bottom: 0px">
            {{ data.title }}
          </h6>
          <span class="text-bold text-dark" style="font-size: 18px">{{
            data.value
          }}</span>
        </div>
      </div>
    </div>
    <q-separator class="q-my-sm" />
    <div
      :class="`${
        $q.screen.gt.md ? 'row justify-between' : 'text-center'
      }  card-title`"
    >
      <span>{{ data.firsDesc }}</span
      ><span>{{ data.secondDesc }}</span>
    </div>
  </q-card>
</template>
     
<script setup>


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