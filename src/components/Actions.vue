<script setup>
import { usePageStore } from '@/stores/pdf'
const pageStore = usePageStore()

const cancelProcess = (e) => {
  pageStore.clearPages()
  pageStore.work_flow_state = "LANDING"
}

const showList = (e) => {
  pageStore.work_flow_state = "LIST"
  pageStore.clearTableData()
}

const makeProcess = (e) => {
  const pages = pageStore.selectedPages;
  pageStore.worker_progress = true;
  pageStore.pworker.postMessage({ pages: pages, type: 2 });
}

const exportTable = (e) => {

}

pageStore.pworker.onmessage = function (e) {
  let payload = e.data;
  if (payload.type === 0) {
    pageStore.worker_initialized = true
  } else if (payload.type === 1) {
    pageStore.worker_image_process = false
    let urlCreator = window.URL || window.webkitURL;
    pageStore.clearPages();
    payload.data.forEach((element, index) => {
      let imageUrl = urlCreator.createObjectURL(element);
      pageStore.addPage(imageUrl, index + 1);
    });
    pageStore.work_flow_state = "LIST"
  } else if (payload.type === 2) {
    pageStore.work_flow_state = "TABLE"
    pageStore.worker_progress = false;
  } else if (payload.type === 3) {
    try {
      const data = JSON.parse(payload.data);
      pageStore.setTableData(data)
    } catch (e) {
      console.log(e)
    }
  }
}

</script>

<template>
  <div>
    <Transition name="slide-fade">
      <button type="button" class="text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        @click="cancelProcess" v-if="pageStore.work_flow_state === 'LIST'">Cancel</button>
    </Transition>
    <Transition name="slide-fade">
      <button :disabled="pageStore.selectedPages.length == 0"
        class="text-white bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" type="button"
        v-if="pageStore.work_flow_state === 'LIST'" @click="makeProcess">Convert
      </button>
    </Transition>

    <Transition name="slide-fade">
      <button class="text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" type="button"
        @click="showList" v-if="pageStore.work_flow_state === 'TABLE'">Back</button>
    </Transition>
    <Transition name="slide-fade">
      <button class="text-white bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" type="button"
        v-if="pageStore.work_flow_state === 'TABLE'" @click="exportTable" :disabled="pageStore.worker_progress">Export</button>
    </Transition>

    <span v-if="pageStore.worker_progress">Converting</span>
  </div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: opacity 0.5s ease;
}

.slide-fade-enter-from {
  opacity: 0;
}
</style>