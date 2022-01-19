<template>
    <div>
        <header-navigation class="fixed top-0 w-full border-b bg-white shadow-md py-4 z-10"></header-navigation>
        <div class="flex">
            <sidebar-section></sidebar-section>
            <router-view class="flex-grow h-screen"></router-view>
        </div>
        <floating-action-button class="fixed bottom-12 right-12"></floating-action-button>
    </div>
</template>

<script>
import FloatingActionButton from '../components/FloatingActionButton.vue'
import HeaderNavigation from './HeaderNavigation.vue'
import SidebarSection from './SidebarSection.vue'
export default {
    name: 'app',
    components: {
        HeaderNavigation,
        SidebarSection,
        FloatingActionButton,
    },
}
</script>
