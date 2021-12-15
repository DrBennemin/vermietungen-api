<template>
    <div class="container mx-auto my-32">
        <div class="grid grid-cols-2 gap-4 space-y-8 lg:space-y-0">
            <div
                class="
                    p-8
                    rounded-md
                    shadow-xl
                    border-t-4 border-red-500
                    space-y-4
                "
            >
                <h2 class="font-bold text-xl text-center">
                    Gegenstände auf Lager
                </h2>
                <p class="text-8xl text-center font-bold text-red-500">
                    {{ inStock }}
                </p>
            </div>
            <div class="p-8 rounded-md shadow-xl border-t-4 border-red-500">
                <h2 class="font-bold text-xl text-center">
                    Gegenstände verliehen
                </h2>
                <p class="text-8xl text-center font-bold text-red-500">
                    {{ outOfStock }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import Api from "../services/api.js";

export default {
    created() {
        Api.getItems()
            .then((response) => {
                this.items = response.data;
                this.$store.commit("UPDATE_ITEMS", this.items);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    computed: {
        inStock: function () {
            return this.$store.getters.get_available.length;
        },
        outOfStock: function () {
            return this.$store.getters.get_unavailable.length;
        },
    },
};
</script>
