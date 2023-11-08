<script setup>
defineProps(['item'])
</script>

<template>
    <div>
        <h1> Page: {{ item.pg }}</h1>
        <img :src="item.image" :class="item.selected ? 'page_image': 'page_image_lowop'" />
    </div>
</template>

