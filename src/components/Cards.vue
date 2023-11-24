<script setup></script>

<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto my-4 py-4 px-8 gap-8"
  >
    <div class="container flex flex-col items-center p-2 w-full md:w-50 md:h-50 rounded-md">
      <img
        src="https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-shield-with-a-check-mark-safe-and-protect-logo-icon-png-image_1870456.jpg"
        alt="secure_logo"
        class="h-40"
      />
      <h2 class="text-xl font-bold mb-2">Secure</h2>
      <p class="text-md text-gray-700 mb-2 text-center">
        With years of experience in banking we comply with strict standards when handling your
        files.
      </p>
    </div>

    <div class="container flex flex-col items-center p-2 w-full md:w-50 md:h-50 rounded-md">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKXZOlVOUgT1GuyLy18Ng6FvqXdhIwaTBNM19A58aEzQ&s"
        alt="institute_logo"
        class="h-40"
      />
      <h2 class="text-xl font-bold my-2">Institutional</h2>
      <p class="text-md text-gray-700 mb-2 text-center">
        We've provided our services to thousands of reputable financial, accounting and legal firms.
      </p>
    </div>

    <div class="container flex flex-col items-center p-2 w-full md:w-50 md:h-50 rounded-md">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjWOWH2twctD83eyJbaliI8OjFn5ZZArFWu3kuKZHpSQ&s"
        alt="accurate_logo"
        class="h-40"
      />
      <h2 class="text-xl font-bold my-2">Accurate</h2>
      <p class="text-md text-gray-700 mb-2 text-center">
        We're continually improving our algorithms. If a file doesn't convert to your expectations,
        email us and we'll fix it.
      </p>
    </div>
  </div>

  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto my-4 py-4 px-8 gap-8"
  >
    <div
      class="container flex flex-col border border-gray-300 p-2 w-full md:w-50 md:h-50 rounded-md"
    >
      <h2 class="text-xl font-bold my-2">Anonymous</h2>
      <p class="text-md text-gray-700 mb-2">Anonymous conversions with no need to sign up</p>
      <ul class="flex items-center my-2">
        <span class="mr-1 text-gray-700">1</span>
        <p class="text-gray-700 text-md">page every 24 hours</p>
      </ul>
      <div class="">
        <h2 class="font-bold text-xl pt-2">Free</h2>
      </div>
    </div>

    <div
      class="container flex flex-col border border-gray-300 p-2 w-full md:w-50 md:h-50 rounded-md"
    >
      <h2 class="text-xl font-bold my-2">Registered</h2>
      <p class="text-md text-gray-700 mb-2">Registration is free</p>
      <ul class="flex items-center my-2">
        <span class="mr-1 text-gray-700">5</span>
        <p class="text-gray-700 text-md">pages every 24 hours</p>
      </ul>
      <div class="flex items-center justify-between py-2 my-5">
        <h2 class="font-bold text-xl">Free</h2>
        <RouterLink to="/register" class="text-blue-700 hover:underline"> Register </RouterLink>
      </div>
    </div>

    <div
      class="container flex flex-col border border-gray-300 w-full p-2 md:w-50 md:h-50 rounded-md"
    >
      <h2 class="text-xl font-bold my-2">Subscribe</h2>
      <p class="text-md text-gray-700 mb-2">Subscribe to convert more documents</p>
      <ul class="flex items-center p-5 lg:p-8"></ul>
      <div class="flex items-center justify-between py-2">
        <RouterLink to="/register" class="text-blue-700 hover:underline"> Register </RouterLink>
      </div>
    </div>
  </div>
</template>
