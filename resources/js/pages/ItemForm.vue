<template>
    <div class="container mx-auto py-24">
        <form @submit.prevent="addItem" class="flex flex-col space-y-4">
            <label>Titel</label>
            <input type="text" id="" v-model="item.title" required />
            <label>Beschreibung</label>
            <input type="text" id="" v-model="item.description" required />
            <div class="flex justify-between">
                <div class="flex flex-col space-x-4">
                    <label>Verfügbar</label>
                    <div class="flex space-x-4 items-center">
                        <input
                            type="radio"
                            id="yes"
                            value="true"
                            v-model="item.in_stock"
                            checked
                        />
                        <label for="yes">ja</label>
                        <input
                            type="radio"
                            id="no"
                            value="false"
                            v-model="item.in_stock"
                        />
                        <label for="no">nein</label>
                    </div>
                </div>

                <!-- v-if vs. v-show for date_return -> show only if in_stock === false -->

                <div class="w-1/2">
                    <label>Rückgabedatum</label>
                    <input
                        class="w-full"
                        type="date"
                        v-model="item.date_return"
                    />
                </div>
            </div>

            <button
                class="
                    py-2
                    px-4
                    rounded-lg
                    bg-secondary
                    hover:bg-primary
                    font-bold
                    text-white
                "
                type="submit"
            >
                send
            </button>
        </form>
    </div>
</template>

<script>
import ItemsService from "../services/Items.js";

export default {
    data: function () {
        return {
            item: {
                id: "",
                title: "",
                description: "",
                in_stock: true,
                date_return: "",
            },
        };
    },
    methods: {
        addItem() {
            ItemsService.postItem(this.item)
                .then(() => {
                    this.$store.commit("ADD_ITEM", this.item);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>
