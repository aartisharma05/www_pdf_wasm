
<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
const hoveredItem = ref(1)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleHover = (item) => {
  hoveredItem.value = item
}
</script>

<template>
  <header class=" bg-white border-b border-gray-300 z-10">
    <div class="container mx-auto bg-fixed max-w-5xl py-4 px-8">
      <div class="flex justify-between">
        <span class="flex items-center">
          <RouterLink to="/" class="pr-1">
            <svg version="1.0" width="30" height="30pt" viewBox="0 0 190 184.2" preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 130.134 3.272 C 128.054 4 126.113 6.149 125.558 8.298 C 124.9 10.863 125.42 13.013 127.188 14.989 C 129.476 17.623 129.822 17.658 144.798 17.658 L 157.831 17.658 L 122.751 52.739 C 98.035 77.489 87.497 88.234 87.116 89.136 C 86.838 89.864 86.596 91.251 86.596 92.256 C 86.63 97.871 92.177 101.373 97.168 98.877 C 97.723 98.6 114.154 82.411 133.67 62.965 C 153.152 43.483 169.097 27.71 169.132 27.884 C 169.132 28.092 169.132 33.534 169.097 40.016 C 169.097 46.984 169.236 52.565 169.444 53.709 C 169.86 55.962 170.9 57.557 172.702 58.839 C 173.881 59.671 174.401 59.775 176.689 59.775 C 178.977 59.775 179.496 59.636 180.641 58.839 C 181.403 58.354 182.408 57.349 182.894 56.586 L 183.829 55.269 L 184.003 2.752 C 184.003 2.752 131.244 2.856 130.134 3.272 Z"
                fill="#000000" stroke="none" />
              <path
                d="M 28.567 22.025 C 17.752 24.348 9.745 32.009 6.625 42.963 C 6.035 45.112 6.001 47.885 6.001 101.546 C 6.001 164.531 5.793 159.159 8.462 164.913 C 12.136 172.92 18.861 178.432 27.631 180.685 L 86.076 181.448 L 144.312 180.651 C 154.85 177.669 162.303 170.182 165.042 159.783 L 165.804 109.866 C 165.804 64.663 165.77 62.86 165.146 61.682 C 162.199 56.136 155.37 55.893 151.904 61.162 C 151.279 62.133 151.245 63.727 151.072 108.999 L 150.898 155.796 L 150.101 157.807 C 148.541 161.654 145.491 164.566 141.573 165.918 C 139.91 166.507 136.894 166.542 86.076 166.542 C 28.116 166.542 30.716 166.612 27.458 164.74 C 25.69 163.735 23.125 161.03 22.189 159.228 C 20.664 156.247 20.698 156.663 20.802 100.333 L 20.907 46.603 L 21.842 44.592 C 23.125 41.854 24.546 40.121 26.73 38.699 C 30.266 36.377 26.522 36.55 76.924 36.377 L 122.89 36.203 L 124.554 35.163 C 126.911 33.707 128.332 31.073 128.124 28.508 C 127.916 25.873 126.425 23.655 124.068 22.442 L 122.231 21.471 L 76.578 21.506 C 37.753 21.54 30.612 21.609 28.567 22.025 Z"
                fill="#000000" stroke="none" />
              <path
                d="M 31.895 130.387 L 31.999 150.943 L 36.609 151.047 L 41.185 151.151 L 41.185 142.97 L 41.185 134.824 L 46.385 134.824 C 52.035 134.824 54.288 134.477 57.026 133.195 C 59.141 132.224 60.735 130.526 61.949 127.891 C 62.747 126.227 62.851 125.534 62.851 122.345 C 62.851 118.15 62.192 116.209 59.974 113.921 C 56.75 110.558 53.457 109.866 40.977 109.866 L 31.826 109.866 L 31.895 130.387 Z M 50.718 118.254 C 52.313 119.086 53.041 120.092 53.214 121.756 C 53.457 123.87 52.555 125.638 50.856 126.505 C 49.747 127.094 48.812 127.198 45.172 127.198 L 40.839 127.198 L 40.839 122.31 L 40.839 117.387 L 45.275 117.561 C 48.326 117.665 49.99 117.908 50.718 118.254 Z"
                fill="#000000" stroke="none" />
              <path
                d="M 68.917 130.664 L 68.917 151.532 L 78.726 151.359 C 89.785 151.22 90.929 151.012 95.955 148.586 C 100.981 146.125 104.829 141.549 106.181 136.384 C 106.875 133.645 106.875 127.441 106.146 124.633 C 104.379 117.734 99.144 112.951 91.102 110.871 C 88.502 110.212 86.977 110.108 78.554 109.969 L 68.917 109.796 L 68.917 130.664 Z M 89.438 119.191 C 93.494 120.75 96.198 123.454 96.995 126.921 C 97.584 129.278 97.272 133.611 96.371 135.587 C 95.504 137.562 93.494 139.816 91.587 140.925 C 89.542 142.138 86.007 142.797 81.5 142.797 L 77.583 142.797 L 77.583 130.456 L 77.583 118.081 L 82.54 118.289 C 86.388 118.428 87.878 118.636 89.438 119.191 Z"
                fill="#000000" stroke="none" />
              <path
                d="M 113.634 130.491 L 113.634 151.116 L 118.14 151.116 L 122.647 151.116 L 122.647 135.171 L 131.313 135.171 L 139.979 135.171 L 139.979 131.011 L 139.979 126.851 L 131.313 126.851 L 122.647 126.851 L 122.647 118.185 L 132.006 118.185 L 141.366 118.185 L 141.366 114.025 L 141.366 109.866 L 127.5 109.866 L 113.634 109.866 L 113.634 130.491 Z"
                fill="#000000" stroke="none" />
            </svg>
          </RouterLink>
          <span class="text-xl font-bold">PDF Extract</span>
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
        <button v-if="!isMobileMenuOpen"
          class="block sm:hidden p-1 m-1 rounded focus:outline-none hover:bg-gray-100 group" @click="toggleMobileMenu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <!-- Mobile menu, show/hide based on menu open state.-->
        <div v-if="isMobileMenuOpen" class="sm:hidden" role="dialog" aria-modal="true">
          <!-- Background backdrop, show/hide based on slide-over state.  -->
          <div class="fixed inset-0 z-10" @click="closeMobileMenu"></div>

          <div
            class="fixed inset-y-0 right-0 z-10 w-1/2 shadow-xl overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 mx-auto">
            <div class="flex justify-end">
              <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="closeMobileMenu">
                <span class="sr-only">Close menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <RouterLink to="/"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-blue-700"
                    @click="closeMobileMenu">Home</RouterLink>
                  <RouterLink to="/blo"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-blue-700"
                    @click="closeMobileMenu">Blog</RouterLink>
                  <RouterLink to="/help"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-blue-700"
                    @click="closeMobileMenu">Help</RouterLink>
                  &nbsp;
                </div>
                <div class="space-y-2 py-6">
                  <RouterLink to="/login"
                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base text-center font-semibold leading-7 bg-blue-200 text-gray-900"
                    @click="closeMobileMenu" @mouseover="handleHover(1)" @mouseleave="handleHover(0)"
                    :class="{ 'hover:bg-blue-600 hover:text-white': hoveredItem === 1 }">
                    Log in
                  </RouterLink>

                  <RouterLink to="/register"
                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base text-center font-semibold leading-7 text-gray-900 bg-blue-200"
                    @click="closeMobileMenu" @mouseover="handleHover(2)" @mouseleave="handleHover(0)"
                    :class="{ 'hover:bg-blue-600 hover:text-white': hoveredItem === 2 }">
                    Register
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
