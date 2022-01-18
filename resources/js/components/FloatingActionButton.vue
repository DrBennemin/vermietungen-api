<template>
    <!-- <div class="action-btn">
        <button class="p-4 bg-secondary hover:bg-primary hover:text-white shadow-2xl rounded-full">
            <img src="img/plus.svg" alt="plus" />
            <ul class="flyin bg-secondary relative bottom-24 right-0">
                <li>
                    <router-link :to="{ name: 'ItemList' }"> Neuer Gegenstand </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'ItemList' }"> Neuer Verleih </router-link>
                </li>
            </ul>
        </button>
    </div> -->
    <div @click="toggleContent">
        <div class="fab-content flex-col" :class="{ flex: isActive }">
            <router-link :to="{ name: 'ItemAdd' }"> Neuer Gegenstand </router-link>
            <router-link :to="{ name: 'OrderAdd' }"> Neuer Verleih </router-link>
        </div>
        <div class="fab-btn">
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
