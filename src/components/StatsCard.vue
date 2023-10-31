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
          :icon="icon"
          :class="$q.screen.gt.md ? '' : 'q-mb-md'"
        />
        <div
          :class="`${
            $q.screen.gt.md ? 'column text-right' : 'text-center'
          } content-end q-mb-sm`"
        >
          <h6 class="card-title" style="margin-bottom: 0px">
            <slot name="headerTitle"></slot>
          </h6>
          <span class="text-bold text-dark" style="font-size: 18px"
            ><slot name="headerValue"></slot
          ></span>
        </div>
      </div>
    </div>
    <q-separator class="q-my-sm" />
    <div
      :class="`${
        $q.screen.gt.md ? 'row justify-between' : 'column text-center'
      }  card-title`"
    >
      <slot name="footerContent"> </slot>
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
    type: String,
    required: true,
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