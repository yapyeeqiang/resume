<script setup lang="ts"></script>

<template>
    <div class="p-5 md:p-10 max-w-3xl md:max-w-6xl mx-auto">
        <div class="flex flex-col space-y-4 md:space-y-0 md:space-x-4 lg:space-x-0 md:flex-row h-screen">
            <div class="p-4 md:w-1/4">
                <slot name="secondary" />
            </div>
            <div class="flex-1 p-4 md:w-3/4 space-y-8">
                <slot name="primary" />
            </div>
        </div>
    </div>
</template>
