<template>
    <div class="relative">
        <div class="flex" @click="pushToSearch">
            <img src="/img/search.svg" alt="search" class="w-4 absolute left-3 top-3" />
            <input
                type="text"
                name="search"
                id="search"
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
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        pushToSearch: function () {
            this.$router.push({ name: 'SearchResults' })
        },
    },
}
</script>
