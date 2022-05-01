<script setup lang="ts">
import { computed, markRaw, onMounted, ref } from 'vue'
import SplitLayout from './layouts/SplitLayout.vue'
import { GitHubIcon, LinkedInIcon, TwitterIcon, InstagramIcon, AvatarIcon } from './assets'
import Section from './components/Section.vue'
import ProjectCard from './components/ProjectCard.vue'
import { getResumeData } from './api/gist'

const name = ref('Yap Yee Qiang')
const role = ref('Software Developer')
const email = ref('yapyeeqiang@gmail.com')
const mailTo = computed(() => `mailto:${email.value}`)

const socialMediasMap = {
    GitHub: GitHubIcon,
    LinkedIn: LinkedInIcon,
    Twitter: TwitterIcon,
    Instagram: InstagramIcon,
    'Personal Website': AvatarIcon,
}

const socialMedias = ref([
    {
        name: 'GitHub',
        url: 'https://yeeqiang.me/github',
    },
    {
        name: 'LinkedIn',
        url: 'https://yeeqiang.me/linkedin',
    },
    {
        name: 'Twitter',
        url: 'https://yeeqiang.me/twitter',
    },
    {
        name: 'Instagram',
        url: 'https://yeeqiang.me/instagram',
    },
    {
        name: 'Personal Website',
        url: 'https://yeeqiang.me',
    },
])

const projects = ref([
    {
        title: 'title',
        description: 'project description',
        githubURL: 'github url',
        websiteURL: 'website url',
        stars: 0,
    },
    {
        title: 'title',
        description: 'project description',
        githubURL: 'github url',
        websiteURL: 'website url',
        stars: 0,
    },
    {
        title: 'title',
        description: 'project description project description project description project description',
        githubURL: 'github url',
        websiteURL: 'website url',
        stars: 0,
    },
    {
        title: 'title',
        description: 'project description',
        githubURL: 'github url',
        websiteURL: 'website url',
        stars: 0,
    },
])

onMounted(async () => {
    const { personalInfo, projects: resumeProjects } = await getResumeData()

    name.value = personalInfo.name
    email.value = personalInfo.email
    role.value = personalInfo.role
    socialMedias.value = personalInfo.socialMedias
    projects.value = resumeProjects
})
</script>

<template>
    <SplitLayout>
        <template #secondary>
            <div class="flex flex-col justify-center items-center md:items-start">
                <div>
                    <h1 class="text-2xl font-bold">{{ name }}</h1>
                </div>
                <div>
                    <h2 class="text-gray-600 font-light">{{ role }}</h2>
                </div>
                <div class="my-2">
                    <a class="text-xs underline decoration-dashed decoration-gray-400 underline-offset-4" :href="mailTo">{{ email }}</a>
                </div>
                <div class="flex space-x-4 mt-6">
                    <a class="text-gray-500 hover:text-gray-800 transition-all" v-for="socialMedia in socialMedias" :href="socialMedia.url" target="blank">
                        <component :is="socialMediasMap[socialMedia.name]" />
                    </a>
                </div>
            </div>
        </template>
        <template #primary>
            <Section title="About">
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus voluptatem saepe, reiciendis, eos illo ab ratione eum debitis, rerum facere natus repellendus ea sint! In facilis dolore laudantium ex illum!</p>
                </div>
            </Section>

            <Section title="Projects">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-4 lg:gap-x-8">
                    <div v-for="(project, index) in projects" :key="index">
                        <ProjectCard :project="project" />
                    </div>
                </div>
            </Section>
        </template>
    </SplitLayout>
</template>
