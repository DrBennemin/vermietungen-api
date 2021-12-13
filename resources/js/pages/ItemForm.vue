<template>
    <div class="container mx-auto py-24">
        <form @submit.prevent="addItem" class="flex flex-col space-y-4">
            <label>Titel</label>
            <input type="text" id="" v-model="item.title" />
            <label>Beschreibung</label>
            <input type="text" id="" v-model="item.description" />
            <div>
                <label>Verfügbar</label>
                <div class="flex space-x-4">
                    <input
                        type="radio"
                        id="yes"
                        value="true"
                        v-model="item.in_stock"
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
            <input
                v-if="item.in_stock === false"
                type="date"
                v-model="item.date_return"
            />
            <button
                class="
                    py-1
                    px-3
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
                in_stock: "",
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
