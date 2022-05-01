<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>

<template>
    <div>
        <div class="flex pr-10">
            <h3 class="bg-black text-white pl-1 pr-3 font-bold">{{ title }}</h3>
        </div>

        <div class="py-4 md:p-4">
            <slot />
        </div>
    </div>
</template>
