<script setup>
defineProps(['item'])
</script>

<template>
    <div class="flex flex-col items-center my-2">
        <h1 class="font-semibold px-2 py-0.5"> Page: {{ item.pg }}</h1>
        <img :src="item.image" :class="item.selected ? 'page_image': 'page_image_lowop'"
        class="w-3/4 h-auto px-2 py-0.5 " />
    </div>
</template>

