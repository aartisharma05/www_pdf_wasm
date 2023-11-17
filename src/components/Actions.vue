<script setup>
import { usePageStore } from '@/stores/pdf'
const pageStore = usePageStore()

const cancelProcess = (e) => {
  pageStore.clearPages()
  pageStore.work_flow_state = "LANDING"
}

const showList = (e) => {
  pageStore.work_flow_state = "LIST"
}

const makeProcess = (e) => {
  const pages = pageStore.selectedPages;
  pageStore.worker_progress = true;
  pageStore.pworker.postMessage({ pages: pages, type: 2 });
}

const exportTable = (e) => {

}

</script>

<template>
  <div>
    <button type="button"
      class="text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      @click="cancelProcess" v-if="pageStore.work_flow_state === 'LIST'">Cancel</button>
    <button class="text-white bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" type="button" v-if="pageStore.work_flow_state === 'LIST'" @click="makeProcess">Convert</button>

    <button class="text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" type="button" @click="showList" v-if="pageStore.work_flow_state === 'TABLE'">Back</button>
    <button class="text-white bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" type="button" v-if="pageStore.work_flow_state === 'TABLE'" @click="exportTable">Export</button>

    <span v-if="pageStore.worker_progress">Converting</span>
  </div>
</template>