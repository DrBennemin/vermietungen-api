<template>
    <div>
        <div class="fab-content flex-col" :class="{ flex: isActive }">
            <router-link :to="{ name: 'ItemAdd' }"> Neuer Gegenstand </router-link>
            <router-link :to="{ name: 'OrderAdd' }"> Neuer Verleih </router-link>
        </div>

        <div class="fab-btn" @click="toggleContent">
            <img src="img/plus.svg" alt="plus" />
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            isActive: false,
        }
    },
    methods: {
        toggleContent: function () {
            this.isActive = !this.isActive
        },
    },
}
</script>
