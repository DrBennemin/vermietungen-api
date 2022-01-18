<template>
    <div class="border-b bg-white shadow-lg z-10">
        <div class="container mx-auto">
            <div class="flex justify-between items-center">
                <a href="/">
                    <img src="/img/vermietung-api-logo.svg" alt="logo" class="w-12 h-12 m-4" />
                </a>
                <nav class="flex">
                    <div class="flex relative">
                        <img src="/img/search.svg" alt="search" class="w-4 absolute left-3 top-3" />
                        <button class="cursor-pointer">
                            <input
                                type="text"
                                name="search"
                                id="search"
                                placeholder="SUCHE..."
                                class="
                                    py-2
                                    bg-gray-200
                                    rounded-lg
                                    pl-10
                                    border-none
                                    focus:border-primary focus:ring-primary focus:bg-white
                                " />
                        </button>
                    </div>
                    <ul class="flex content-center items-center uppercase font-bold">
                        <router-link :to="{ name: 'Home' }">
                            <li class="px-8 py-1 hover:text-primary active:text-secondary">Start</li>
                        </router-link>
                        <li class="add-btn">
                            <router-link :to="{ name: 'ItemAdd' }"> + Add Item </router-link>
                        </li>
                        <li class="add-btn">
                            <router-link :to="{ name: 'OrderAdd' }"> + Add Order </router-link>
                        </li>
                    </ul>
                </nav>
                <div class="flex space-x-4">
                    <img src="/img/notifications.svg" alt="notification" class="w-6" />
                    <img src="/img/user.svg" alt="user" class="w-6" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            query: '',
        }
    },
    methods: {
        printQuery: function () {
            console.log(this.query)
        },
    },
}
</script>
