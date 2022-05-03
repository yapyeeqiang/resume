<script setup lang="ts">
import type { EducationResult } from '@/interfaces/education'

const props = defineProps<{
    education: EducationResult
}>()

console.log(props.education)
</script>

<template>
    <div>
        <div>
            <span v-if="education.area">{{ education.area }}<span>, </span></span>
            <span class="font-bold">{{ education.studyType }}<span>, </span></span>
            <span>{{ education.institution }}</span>
        </div>
        <div>
            <p class="text-gray-600 font-light text-sm">
                {{ education.duration }}
            </p>
        </div>
        <ul v-if="education.activities">
            <li v-for="activity in education.activities">
                <span>{{ activity }}</span>
            </li>
        </ul>
    </div>
</template>
