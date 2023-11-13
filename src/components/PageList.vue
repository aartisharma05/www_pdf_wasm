<script setup>
import Page from './Page.vue'
import PageThumbnail from './PageThumbnail.vue'
import { usePageStore } from '@/stores/pdf'
const pageStore = usePageStore()

</script>
<template>
    <div class="flex-container" v-if="pageStore.totalpages > 0">
        <div class="flex-child" v-if="pageStore.nodata">
            <PageThumbnail v-for="(item, index) in pageStore.pages.pages" :item="item" :index="index" :key="item.pg" />
        </div>
        <div class="flex-child tpages" v-if="pageStore.nodata">
            <Page v-for="(item, index) in pageStore.pages.pages" :item="item" :index="index" :key="item.pg" />
        </div>
        <div class="flex-child ttable" id="table-container">

        </div>
    </div>
</template>
<style scoped>
.flex-container {
    display: flex;
}
</style>