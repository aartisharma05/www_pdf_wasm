<script setup>
import Page from './Page.vue'
import PageThumbnail from './PageThumbnail.vue'
import { usePageStore } from '@/stores/pdf'
const pageStore = usePageStore()

</script>
<template>
    <div class="flex-container">
        <div class="flex-child" v-if="pageStore.work_flow_state === 'LIST'">
            <PageThumbnail v-for="(item, index) in pageStore.pages.pages" :item="item" :index="index" :key="item.pg" />
        </div>
        <div class="flex-child tpages" v-if="pageStore.work_flow_state === 'LIST'">
            <Page v-for="(item, index) in pageStore.pages.pages" :item="item" :index="index" :key="item.pg" />
        </div>
        <div class="flex-child ttable" id="table-container" v-if="pageStore.work_flow_state === 'TABLE'">

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