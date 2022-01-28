<template>
    <div>
        <div class="fab-content flex-col absolute bottom-32 right-12" :class="{ flex: isActive }">
            <router-link :to="{ name: 'ArticleAdd' }">
                <div class="flex items-center space-x-2">
                    <img src="/img/plus-black.svg" class="w-2 h-2" alt="plus" />
                    <p class="hover:text-primary">Neuer Gegenstand</p>
                </div>
            </router-link>
            <router-link :to="{ name: 'OrderAdd' }">
                <div class="flex items-center space-x-2">
                    <img src="/img/plus-black.svg" class="w-2 h-2" alt="plus" />
                    <p class="hover:text-primary">Neuer Vorgang</p>
                </div>
            </router-link>
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
