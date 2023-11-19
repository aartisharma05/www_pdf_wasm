<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { usePageStore } from '@/stores/pdf'

const pageStore = usePageStore()
const worker = new Worker(new URL('./worker.js', import.meta.url));
pageStore.setWorker(worker);

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-white border-b border-gray-300 z-10">
      <div class="container mx-auto bg-fixed max-w-5xl py-4 px-8">
        <div class="flex justify-between">
          <span class="flex items-center">
            <RouterLink to="/" class="pr-1">
              <img src="assets/img/logo.svg" />
            </RouterLink>
            PDF Extract
          </span>

          <div class="hidden sm:flex items-center justify-between px-2">
            <nav>
              <RouterLink to="/" class="text:black hover:text-blue-600">Home</RouterLink>
              &nbsp;
              <RouterLink to="/blo" class="text:black hover:text-blue-600">Blog</RouterLink>
              &nbsp;
              <RouterLink to="/help" class="text:black hover:text-blue-600">Help</RouterLink>
              &nbsp;
            </nav>

            <div class="flex items-center justify-between">
              <RouterLink to="/login" class="text:black hover:text-blue-600 px-2">Login</RouterLink>
              &nbsp;
              <RouterLink to="/register">
                <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Register
                </button>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu open state.-->
      <div class="md:hidden" role="dialog" aria-modal="true">
        <!-- Background backdrop, show/hide based on slide-over state.  -->
        <div class="fixed inset-0 z-10"></div>

        <div
          class="fixed inset-y-0 right-0 z-10 w-2/3 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 mx-auto">
          <div class="flex items-center justify-between">
            <RouterLink to="/" class="-m-1.5 p-1.5">
              <span class="sr-only">PDF Extract</span>
              <img src="assets/img/logo.svg" />
            </RouterLink>
            <div class="flex items-center">
              <RouterLink to="/register">
                <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 mx-2 rounded float-right">
                  Register
                </button>
              </RouterLink>

              <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                <span class="sr-only">Close menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <RouterLink to="/"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-blue-700">
                  Home</RouterLink>
                <RouterLink to="/blo"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-blue-700">
                  Blog</RouterLink>
                <RouterLink to="/help"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-blue-700">
                  Help</RouterLink>
                &nbsp;
              </div>
              <div class="py-6">
                <RouterLink to="/login"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-blue-600">
                  Log in</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <br>
    <RouterView />
    <footer class="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-center fixed bottom-0 w-full">
      <div class="p-4 text-center text-neutral-700 dark:text-neutral-200">
        <p class="text-neutral-800 dark:text-neutral-400">© 2023 Copyright: Vijay Anand</p>
      </div>
    </footer>
  </div>
</template>
  
