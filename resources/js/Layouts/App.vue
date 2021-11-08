<template>
    <div>
        <header-navigation></header-navigation>
        <router-view class="container mx-auto"></router-view>
        <floating-action-button></floating-action-button>
        <footer-section></footer-section>
    </div>
</template>

<script>
import FloatingActionButton from "../Components/FloatingActionButton.vue";
import FooterSection from "../Components/FooterSection.vue";
import HeaderNavigation from "../Components/HeaderNavigation.vue";
export default {
    name: "app",
    components: {
        HeaderNavigation,
        FooterSection,
        FloatingActionButton,
    },
};
</script>
