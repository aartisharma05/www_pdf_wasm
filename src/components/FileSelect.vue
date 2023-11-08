<script setup>
import { usePageStore } from '@/stores/pdf'
const pageStore = usePageStore()

const cancelProcess = (e) => {
    pageStore.clearPages()
    pageStore.nodata = true
}

const makeProcess = (e) => {
    const pages = pageStore.selectedPages;
    pageStore.worker_progress = true;
    pageStore.pworker.postMessage({ pages: pages, type: 2 });
}

const previewFiles = (e) => {
    let reader = new FileReader();
    reader.onload = function () {
        let data = new Uint8Array(reader.result);
        pageStore.worker_image_process = true
        pageStore.pworker.postMessage({ f: data, type: 1 });
    }
    reader.readAsArrayBuffer(event.target.files[0]);
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
    } else if (payload.type === 2) {
        pageStore.worker_progress = false;
        const table = document.createElement('table');
        const data = JSON.parse(payload.data);
        const pages = data.pages;
        pageStore.nodata = false;
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

    <div v-if="!pageStore.worker_initialized">
        Loading....
    </div>

    <div v-if="pageStore.worker_image_process">
        Loading pdf pages....
    </div>

    <div v-if="pageStore.totalpages == 0">
        <input :disabled="!pageStore.worker_initialized" type="file" accept=".pdf" id="browseFile"
            @change="previewFiles" />
    </div>
    <div v-else>
        <button @click="cancelProcess">Cancel</button>
        &nbsp;
        <button v-if="!pageStore.worker_progress" @click="makeProcess">Convert</button>
        <button v-else disabled>Converting</button>
    </div>


    
</template>
