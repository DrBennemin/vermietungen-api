<template>
    <div>
        <header-navigation></header-navigation>
        <router-view></router-view>
    </div>
</template>

<script>
import HeaderNavigation from "../js/Components/HeaderNavigation.vue";
export default {
    name: "app",
    components: {
        HeaderNavigation,
    },
};
</script>
