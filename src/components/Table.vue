<script setup>
import { ref, onMounted } from 'vue'
import { usePageStore } from '@/stores/pdf'
const pageStore = usePageStore()
const mtable = ref()

onMounted(() => {
    const data = pageStore.table_data
    const pages = data.pages;
    for (const page of pages) {
        for (const row of page.result) {
            let trow = mtable.value.insertRow();
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
})

</script>

<template>
    <table ref="mtable" class="max-w-5xl mx-auto px-8 py-4 my-2"></table>
</template>