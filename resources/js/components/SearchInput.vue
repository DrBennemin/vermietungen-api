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
                        w-full
                        py-2
                        bg-gray-200
                        rounded-lg
                        pl-10
                        border-none
                        focus:border-primary focus:ring-primary focus:bg-white
                    " />
            </form>
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
    methods: {
        pushToSearch: function () {
            this.$router.push({ name: 'SearchResults', params: { searchTerm: this.searchTerm } })
        },
    },
}
</script>
