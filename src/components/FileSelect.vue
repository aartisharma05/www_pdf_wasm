<script setup>
import { usePageStore } from '@/stores/pdf'
const pageStore = usePageStore()

const previewFile = (e) => {
  let reader = new FileReader();
  reader.onload = function () {
    let data = new Uint8Array(reader.result);
    pageStore.pworker.postMessage({ f: data, type: 1 });
  }
  pageStore.worker_image_process = true
  reader.readAsArrayBuffer(e.target.files[0]);
}

</script>

<template>
    <div v-if="!pageStore.worker_initialized">
        Loading....
    </div>

    <div>
        <input :disabled="!pageStore.worker_initialized" type="file" accept=".pdf" id="browseFile" @change="previewFile" />
    </div>
    <span v-if="pageStore.worker_image_process">Loading pdf file</span>
</template>