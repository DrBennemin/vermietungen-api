<template>
    <nav>
        <ul class="flex justify-center text-xl">
            <li class="px-8 hover:text-purple-500">
                <router-link :to="{ name: 'Home' }"> Home </router-link>
            </li>
            |
            <li class="px-8 hover:text-purple-500">
                <router-link :to="{ name: 'About' }"> About </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "navbar",
};
</script>
