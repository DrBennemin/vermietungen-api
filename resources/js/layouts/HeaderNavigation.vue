<template>
    <div class="flex justify-between items-center">
        <div class="ml-6">
            <a href="/">
                <img src="/img/vermietung-api-logo.svg" alt="logo" class="w-12 h-12" />
            </a>
        </div>
        <div class="w-1/3">
            <search-input></search-input>
        </div>
        <div class="flex mr-6">
            <img src="/img/notifications.svg" alt="notification" class="w-6" />
        </div>
    </div>
</template>

<script>
import SearchInput from '@/components/SearchInput.vue'
export default {
    components: { SearchInput },
}
</script>
