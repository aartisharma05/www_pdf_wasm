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

<template class="mx-auto bg-white min-h-screen flex flex-col items-center justify-center h-full py-4 px-8 my-4">
    <div class="container max-w-5xl mx-auto h-full my-4">
      <section>
        <div class="flex flex-col gap-y-6 mt-6 px-8 my-8">
          <div v-if="!pageStore.worker_initialized" class="text-center h-full" >
          Loading....
          </div>
          <div class="bg-gray-100 rounded-md flex flex-col items-center justify-center py-10 ">
       
           <div class="h-80 flex items-center justify-center">
             <input :disabled="!pageStore.worker_initialized" type="file" accept=".pdf" id="browseFile" @change="previewFile" class="hidden" />
            
              <label for="browseFile">
                      <div class="cursor-pointer w-full bg-blue-600 text-white text-center py-5 px-10 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-700 inline-block flex-shrink-0 overflow-hidden">
                         <span>Click here to convert a PDF! </span> 
                      </div>
               </label>
            
           </div>
          </div>
           <span v-if="pageStore.worker_image_process">Loading pdf file</span>
        </div>
      </section>
    </div>
</template>
