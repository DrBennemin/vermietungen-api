<template>
    <div>
        <header-navigation class="fixed top-0 w-full border-b bg-white shadow-md py-4 z-10"></header-navigation>
        <div class="flex">
            <sidebar-section></sidebar-section>
            <router-view class="flex-grow h-screen"></router-view>
        </div>
        <floating-action-button class="relative"></floating-action-button>
        <modal-card></modal-card>
    </div>
</template>

<script>
import FloatingActionButton from '../components/FloatingActionButton.vue'
import ModalCard from '../components/ModalCard.vue'
import HeaderNavigation from './HeaderNavigation.vue'
import SidebarSection from './SidebarSection.vue'
export default {
    name: 'app',
    components: {
        HeaderNavigation,
        SidebarSection,
        FloatingActionButton,
        ModalCard,
    },
}
</script>
