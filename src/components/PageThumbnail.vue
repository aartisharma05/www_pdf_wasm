<script setup>
defineProps(['item'])
</script>

<template>
    <div>
        <h1> Page:{{ item.pg }}</h1>
        <input type="checkbox" :name="item.pg" :id="'chk_' + item.pg" v-model="item.selected" />
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