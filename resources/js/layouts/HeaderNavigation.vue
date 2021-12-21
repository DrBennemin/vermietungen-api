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
                <nav>
                    <ul class="flex content-center uppercase font-bold">
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
                            <router-link :to="{ name: 'ItemForm' }">
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
    name: "navbar",
};
</script>
