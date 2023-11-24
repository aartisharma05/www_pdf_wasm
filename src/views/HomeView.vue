<script setup>
import FileSelect from '../components/FileSelect.vue'
import PageList from '../components/PageList.vue'
import Actions from '../components/Actions.vue'
import Table from '../components/Table.vue'
import Cards from '../components/Cards.vue'
import { usePageStore } from '@/stores/pdf'

const worker = new Worker(new URL('../worker.js', import.meta.url))
const pageStore = usePageStore()
pageStore.setWorker(worker)

</script>

<template>
  <main class="flex-1 overflow-y-auto">
    <FileSelect v-if="pageStore.work_flow_state === 'LANDING'" />
    <Actions />
    <Cards v-if="pageStore.work_flow_state === 'LANDING'" />
    <PageList />
    <Transition name="slide-fade">
      <Table v-if="pageStore.isTable" />
    </Transition>
  </main>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: opacity 0.5s ease;
}

.slide-fade-enter-from {
  opacity: 0;
}
</style>
