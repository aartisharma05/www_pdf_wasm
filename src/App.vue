<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { usePageStore } from '@/stores/pdf'  

const pageStore = usePageStore()
const worker = new Worker(new URL('./worker.js', import.meta.url))
pageStore.setWorker(worker)

</script>

<template>

 <Header />
 <RouterView />
 <Footer />
  
</template>
  
