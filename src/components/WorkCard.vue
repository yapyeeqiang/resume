<script setup lang="ts">
import type { WorkResult } from '@/interfaces/work'

defineProps<{
    work: WorkResult
}>()
</script>

<template>
    <div>
        <div class="space-x-2">
            <span class="font-bold">
                <a class="underline decoration-dashed decoration-gray-300 underline-offset-2" :href="work.website" target="blank"> {{ work.name }}</a>
            </span>
            <span class="text-gray-500">{{ work.role }}</span>
        </div>

        <div>
            <p class="text-gray-600 font-light text-sm">{{ work.duration }} | {{ work.location }}</p>
        </div>

        <ul v-if="work.highlights.length > 0" class="list-[circle] list-inside mt-2 ml-2">
            <li v-for="highlight in work.highlights">
                <span>{{ highlight }}</span>
            </li>
        </ul>
    </div>
</template>
