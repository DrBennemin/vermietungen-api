<template>
    <div class="border-b bg-white shadow-lg z-10">
        <div class="container mx-auto">
            <div class="flex justify-between items-center">
                <a href="/">
                    <img
                        src="/img/vermietung-api-logo.svg"
                        alt="logo"
                        class="w-12 h-12 m-4"
                    />
                </a>
                <nav class="flex">
                    <form method="GET">
                        <div class="relative text-gray-500">
                            <span
                                class="
                                    absolute
                                    inset-y-0
                                    left-0
                                    flex
                                    items-center
                                    pl-2
                                "
                            >
                                <button
                                    type="submit"
                                    class="
                                        p-1
                                        focus:outline-none focus:shadow-outline
                                    "
                                >
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        ></path>
                                    </svg>
                                </button>
                            </span>
                            <input
                                class="
                                    py-2
                                    bg-gray-200
                                    rounded-lg
                                    pl-10
                                    border-none
                                    focus:border-primary
                                    focus:ring-primary
                                    focus:bg-white
                                "
                                placeholder="SUCHE"
                                v-model="query"
                                :change="printQuery"
                            />
                        </div>
                    </form>

                    <ul
                        class="
                            flex
                            content-center
                            items-center
                            uppercase
                            font-bold
                        "
                    >
                        <router-link :to="{ name: 'Home' }">
                            <li
                                class="
                                    px-8
                                    py-1
                                    hover:text-primary
                                    active:text-secondary
                                "
                            >
                                Start
                            </li>
                        </router-link>
                        <li
                            class="
                                px-8
                                py-1
                                hover:text-primary
                                active:text-secondary
                            "
                        >
                            <router-link :to="{ name: 'ItemList' }">
                                Mein Kram
                            </router-link>
                        </li>
                        <li class="add-btn">
                            <router-link :to="{ name: 'ItemAdd' }">
                                + Add Item
                            </router-link>
                        </li>
                    </ul>
                </nav>
                <div class="flex space-x-4">
                    <img
                        src="img/notifications.svg"
                        alt="notification"
                        class="w-6 h-6"
                    />
                    <img src="img/user.svg" alt="user" class="w-6 h-6" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            query: "",
        };
    },
    methods: {
        printQuery: function () {
            console.log(this.query);
        },
    },
};
</script>
