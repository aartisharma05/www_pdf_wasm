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

</script>

<template>
    <div>
        <button @click="cancelProcess" v-if="pageStore.work_flow_state === 'LIST'">Cancel</button>
        <button v-if="pageStore.work_flow_state === 'LIST'" @click="makeProcess">Convert</button>

        <button @click="showList" v-if="pageStore.work_flow_state === 'TABLE'">Back</button>
        <button v-if="pageStore.work_flow_state === 'TABLE'" @click="makeProcess">Export</button>

        <span v-if="pageStore.worker_progress">Converting</span>
    </div>
</template>