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
                        <li class="px-8 hover:text-primary">
                            <router-link :to="{ name: 'Home' }">
                                Home
                            </router-link>
                        </li>
                        <li class="px-8 hover:text-primary">
                            <router-link :to="{ name: 'Storage' }">
                                My Stuff
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
