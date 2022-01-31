<template>
    <div class="relative">
        <div class="flex">
            <img src="/img/search.svg" alt="search" class="w-4 absolute left-3 top-3" />
            <form @submit.prevent="pushToSearch">
                <input
                    type="text"
                    name="search"
                    id="search"
                    v-model="searchTerm"
                    placeholder="SUCHE..."
                    class="
                        py-2
                        bg-gray-200
                        rounded-lg
                        pl-10
                        border-none
                        focus:border-primary focus:ring-primary focus:bg-white
                    " />
            </form>
            <img
                src="/img/close.svg"
                class="w-4 absolute right-3 top-3 cursor-pointer"
                alt="close-filter"
                @click="closeSearch" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchTerm: '',
        }
    },
    computed: {
        isSearch() {
            return this.$route.name === 'SearchResults'
        },
    },
    methods: {
        pushToSearch() {
            this.$router.push({ name: 'SearchResults', params: { searchTerm: this.searchTerm } })
        },
        closeSearch() {
            this.searchTerm = ''
            if (this.isSearch) {
                this.$router.go(-1)
            } else {
                return
            }
        },
    },
}
</script>
