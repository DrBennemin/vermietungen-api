<template>
    <div>
        <header-navigation class="fixed top-0 w-full"></header-navigation>
        <router-view class="container mx-auto h-screen"></router-view>
        <footer-section></footer-section>
    </div>
</template>

<script>
import FooterSection from './FooterSection.vue'
import HeaderNavigation from './HeaderNavigation.vue'
export default {
    name: 'app',
    components: {
        HeaderNavigation,
        FooterSection,
    },
}
</script>
