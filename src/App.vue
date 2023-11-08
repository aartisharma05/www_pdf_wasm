<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { usePageStore } from '@/stores/pdf'

const worker = new Worker(new URL('./worker.js?type=classic&worker_file', import.meta.url));
const pageStore = usePageStore()
pageStore.setWorker(worker);

</script>

<template>
  <header class="bg-gray-100">
    <nav>
      <div>
        <h2>
          <RouterLink to="/">PDF</RouterLink>
        </h2>
        extract text based pdf tables into exportable formats cvs & excel
      </div>

      <RouterLink to="/">Home</RouterLink>
      &nbsp;
      <RouterLink to="/register">register</RouterLink>
      &nbsp;
      <RouterLink to="/login">login</RouterLink>
      &nbsp;
      <RouterLink to="/blo">blog</RouterLink>
      &nbsp;
      <RouterLink to="/help">help</RouterLink>
    </nav>
  </header>
  <br>
  <RouterView />
  <footer
    class="fixed bottom-0 flex w-full flex-wrap items-center justify-between text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
    <p>Author: Vijay</p>
  </footer>
</template>
  
