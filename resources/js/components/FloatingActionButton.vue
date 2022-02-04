<template>
    <div>
        <div class="fab-content flex-col absolute bottom-32 right-12" :class="{ flex: isActive }">
            <div class="fixed top-0 left-0 z-40 w-screen h-screen" @click="toggleContent"></div>
            <div class="flex items-center justify-between border-b-2 px-4 pb-4 space-x-4 z-50">
                <img src="/img/close.svg" alt="Schließen" class="w-4" @click="toggleContent" />
                <h2 class="font-bold">Was möchtest du tun?</h2>
            </div>
            <div class="p-4 z-50">
                <router-link :to="{ name: 'OrderAdd' }">
                    <p class="hover:text-primary hover:font-bold pb-4">Artikel vermieten</p>
                </router-link>
                <router-link :to="{ name: 'ArticleAdd' }">
                    <p class="hover:text-primary hover:font-bold">Neuen Artikel anlegen</p>
                </router-link>
            </div>
        </div>
        <div class="fab-btn absolute bottom-12 right-12" @click="toggleContent">
            <img src="/img/plus.svg" alt="plus" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: false,
        }
    },
    methods: {
        toggleContent() {
            this.isActive = !this.isActive
        },
    },
}
</script>
