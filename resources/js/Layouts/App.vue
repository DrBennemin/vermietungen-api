<template>
    <div>
        <header-navigation class="fixed top-0 w-full"></header-navigation>
        <router-view class="container mx-auto"></router-view>
        <floating-action-button
            class="fixed bottom-48 right-12"
        ></floating-action-button>
        <footer-section></footer-section>
    </div>
</template>

<script>
import FloatingActionButton from "../components/FloatingActionButton.vue";
import FooterSection from "./FooterSection.vue";
import HeaderNavigation from "./HeaderNavigation.vue";
export default {
    name: "app",
    components: {
        HeaderNavigation,
        FooterSection,
        FloatingActionButton,
    },
};
</script>
