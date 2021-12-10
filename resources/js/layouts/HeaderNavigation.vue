<template>
    <div class="border-b bg-white shadow-lg">
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
                    <ul class="flex justify-center uppercase font-bold">
                        <router-link :to="{ name: 'Home' }">
                            <li class="px-8 hover:text-primary">Home</li>
                        </router-link>
                        <li class="px-8 hover:text-primary">
                            <router-link :to="{ name: 'ItemList' }">
                                My Stuff
                            </router-link>
                        </li>
                        <li class="px-8 text-secondary hover:text-primary">
                            <router-link :to="{ name: 'ItemForm' }">
                                + Add Item
                            </router-link>
                        </li>
                    </ul>
                </nav>
                <div class="flex space-x-4">
                    <a class="auth-btn" href="#"> sign in </a>
                    <a class="auth-btn" href="#"> register </a>
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
