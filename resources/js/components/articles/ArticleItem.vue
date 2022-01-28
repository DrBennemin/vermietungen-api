<template>
    <ul class="article-card">
        <router-link class="flex-grow" :to="{ name: 'ArticleDetails', params: { id: article.id } }">
            <li class="flex space-x-6 items-center">
                <div class="min-w-max">
                    <div v-if="article.available" class="rounded-full bg-tertiary w-4 h-4"></div>
                    <div v-else class="rounded-full bg-primary w-4 h-4"></div>
                </div>
                <div>
                    <p class="font-bold">
                        {{ article.title }}
                    </p>
                    <p>
                        {{ article.description }}
                    </p>
                    <p v-if="!article.available">
                        Artikel wird am
                        <b>{{ article.date_return }}</b> zurückgegeben.
                    </p>
                </div>
            </li>
        </router-link>
        <context-menu class="cursor-pointer my-auto min-w-max" :id="article.id"></context-menu>
    </ul>
</template>

<script>
import ContextMenu from '@/components/ContextMenu.vue'

export default {
    components: { ContextMenu },
    props: {
        article: {
            type: Object,
            required: true,
        },
    },
}
</script>
