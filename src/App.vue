<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import SplitLayout from './layouts/SplitLayout.vue'
import { GitHubIcon, LinkedInIcon, TwitterIcon, InstagramIcon, AvatarIcon } from './assets'
import Section from './components/Section.vue'
import ProjectCard from './components/ProjectCard.vue'
import EducationCard from './components/EducationCard.vue'
import WorkCard from './components/WorkCard.vue'
import { getResumeData } from './api/gist'
import type { LanguageRaw, SkillResult, ProjectResult, ProfileResult, EducationResult, WorkResult } from './interfaces'

const socialMediasMap = {
    GitHub: GitHubIcon,
    LinkedIn: LinkedInIcon,
    Twitter: TwitterIcon,
    Instagram: InstagramIcon,
    'Personal Website': AvatarIcon,
}

const name = ref('')
const role = ref('')
const email = ref('')
const mailTo = computed(() => `mailto:${email.value}`)
const about = ref('')
const socialMedias = ref<ProfileResult[]>([])
const projects = ref<ProjectResult[]>([])
const languages = ref<LanguageRaw[]>([])
const skills = ref<SkillResult[]>([])
const educations = ref<EducationResult[]>([])
const works = ref<WorkResult[]>([])

onMounted(async () => {
    const { personalInfo, projects: resumeProjects, languages: myLanguages, skills: mySkills, educations: myEducations, works: myWorks } = await getResumeData()

    name.value = personalInfo.name
    role.value = personalInfo.role
    email.value = personalInfo.email
    about.value = personalInfo.about
    socialMedias.value = personalInfo.socialMedias
    projects.value = resumeProjects
    languages.value = myLanguages
    skills.value = mySkills
    educations.value = myEducations
    works.value = myWorks
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
                    <p>{{ about }}</p>
                </div>
            </Section>

            <Section title="Projects">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div v-for="(project, index) in projects" :key="index">
                        <ProjectCard :project="project" />
                    </div>
                </div>
            </Section>

            <Section title="Work Experience">
                <div class="space-y-8">
                    <div v-for="work in works">
                        <WorkCard :work="work" />
                    </div>
                </div>
            </Section>

            <Section title="Stacks">
                <div class="grid grid-cols-[max-content_auto] gap-4">
                    <template v-for="skill in skills">
                        <h3 class="text-right font-bold">{{ skill.name }}</h3>

                        <div>{{ skill.keywords }}</div>
                    </template>
                </div>
            </Section>

            <Section title="Education">
                <div>
                    <div v-for="education in educations">
                        <EducationCard :education="education" />
                    </div>
                </div>
            </Section>

            <Section title="Languages">
                <div>
                    <div class="inline" v-for="(language, index) in languages">
                        <span class="font-bold">{{ language.language }}</span> (<span>{{ language.fluency }}</span
                        >){{ languages.length - 1 === index ? '' : ', ' }}
                    </div>
                </div>
            </Section>
        </template>
    </SplitLayout>
</template>
