<script setup lang="ts">
import { GitHubIcon, ExternalLinkIcon } from '@/assets'
import type { ProjectResult } from '@/interfaces'
import StarIcon from '@/assets/StarIcon.vue'

defineProps<{
    project: ProjectResult
}>()
</script>

<template>
    <div class="rounded-lg">
        <div class="flex items-center space-x-2">
            <h4 class="font-bold md:text-lg">{{ project.title }}</h4>

            <a class="text-gray-500 hover:text-gray-800 transition-all" :href="project.githubURL">
                <GitHubIcon />
            </a>

            <a class="text-gray-500 hover:text-gray-800 transition-all" :href="project.websiteURL">
                <ExternalLinkIcon />
            </a>
        </div>

        <div>
            <p class="text-gray-600 font-light text-sm">{{ project.description }}</p>
        </div>

        <div class="pt-3">
            <div class="flex items-center space-x-1 h-3 text-gray-500">
                <StarIcon />
                <span class="pt-0.5 text-sm">{{ project.stars }}</span>
            </div>
        </div>
    </div>
</template>
