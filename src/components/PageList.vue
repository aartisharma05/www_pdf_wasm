<script setup>
import Page from './Page.vue'
import PageThumbnail from './PageThumbnail.vue'
import { usePageStore } from '@/stores/pdf'
const pageStore = usePageStore()

</script>
<template class="mx-auto min-h-screen">
    <div class="flex container max-w-5xl mx-auto rounded-md h-96 px-8">
        <div class=" p-4 overflow-y-scroll bg-slate-200" v-if="pageStore.work_flow_state === 'LIST'">
            <PageThumbnail v-for="(item, index) in pageStore.pages.pages" :item="item" :index="index" :key="item.pg" />
        </div>
        <div class=" p-4 tpages overflow-y-scroll bg-slate-400" v-if="pageStore.work_flow_state === 'LIST'">
            <Page v-for="(item, index) in pageStore.pages.pages" :item="item" :index="index" :key="item.pg" />
        </div>
    </div>
</template>
<style>
.flex-container {
    display: flex;
}

table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
}

table#alter tr:nth-child(even) {
  background-color: #eee;
}

table#alter tr:nth-child(odd) {
  background-color: #fff;
}

table#alter th {
  color: white;
  background-color: gray;
}

</style>

