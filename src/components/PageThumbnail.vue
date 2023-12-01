<script setup>
defineProps(['item'])
</script>

<template class="">
    <div class="mb-3 mx-auto">
        <div class="flex justify-between">
            <h1 class="text-xs"> Page:{{ item.pg }}</h1>
            <input type="checkbox" :name="item.pg" :id="'chk_' + item.pg" v-model="item.selected" class="" />
        </div>
        <label :for="'chk_' + item.pg">
            <img :src="item.image" class="thumb" />
        </label>
    </div>
</template>
<style scoped>
.thumb {
    width: 200px;
}
</style>