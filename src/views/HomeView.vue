<script setup>
import FileSelect from '../components/FileSelect.vue'
import PageList from '../components/PageList.vue'
import Actions from '../components/Actions.vue'


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
    const table = document.createElement('table');
    const data = JSON.parse(payload.data);
    const pages = data.pages;
    for (const page of pages) {
      for (const row of page.result) {
        let trow = table.insertRow();
        let col_num = 0;
        for (const col of row) {
          if (col_num !== col[0].column) {
            let blank = col[0].column - col_num;
            for (let f = 0; f < blank; f++) {
              let cell = trow.insertCell();
              let text = document.createTextNode(" ");
              cell.appendChild(text);
            }
            col_num = col[0].column;
          }
          col_num++
          let cell = trow.insertCell();
          let text = document.createTextNode(col[0].text);
          cell.appendChild(text);
        }

        let col_span = data.cols - col_num;
        for (let f = 0; f < col_span; f++) {
          let cell = trow.insertCell();
          let text = document.createTextNode(" ");
          cell.appendChild(text);
        }
      }
    }
    let place_holder = document.querySelector("#table-container");
    place_holder.innerHTML = "";
    place_holder.appendChild(table);
  }
}

</script>

<template>
  <main>
    <FileSelect />
    <Actions />
    <PageList />
  </main>
</template>
