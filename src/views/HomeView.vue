<script setup>
import FileSelect from '../components/FileSelect.vue'
import PageList from '../components/PageList.vue'
import Actions from '../components/Actions.vue'
import Table from '../components/Table.vue'

import { usePageStore } from '@/stores/pdf'
const pageStore = usePageStore()

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
  <main>
    <FileSelect />
    <Actions />
    <PageList />
    <Transition name="slide-fade">
      <Table v-if="pageStore.isTable" />
    </Transition>
  </main>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: opacity 4.5s ease;
}

.slide-fade-enter-from {
  opacity: 0;
}
</style>
