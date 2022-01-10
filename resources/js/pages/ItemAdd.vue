<template>
    <div class="container mx-auto py-24">
        <form @submit.prevent="addItem" class="flex flex-col space-y-4">
            <label>Titel</label>
            <input
                type="text"
                id=""
                v-model="item.title"
                class="rounded-lg focus:border-primary focus:ring-primary"
                required
            />
            <label>Beschreibung</label>
            <input
                type="text"
                id=""
                v-model="item.description"
                class="rounded-lg focus:border-primary focus:ring-primary"
                required
            />
            <div class="flex justify-between">
                <div class="flex flex-col space-x-4">
                    <label>Verfügbar</label>
                    <div class="flex space-x-4 items-center">
                        <input
                            type="radio"
                            class="text-primary focus:ring-primary"
                            id="yes"
                            :value="true"
                            v-model="item.available"
                        />
                        <label for="yes">ja</label>
                        <input
                            type="radio"
                            class="text-primary focus:ring-primary"
                            id="no"
                            :value="false"
                            v-model="item.available"
                        />
                        <label for="no">nein</label>
                    </div>
                </div>

                <div v-show="!item.available" class="w-1/2">
                    <label>Rückgabedatum</label>
                    <input
                        class="w-full rounded-lg"
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
                    hover:bg-secondary
                    bg-primary
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
import Api from "../services/api.js";

export default {
    data: function () {
        return {
            item: {
                id: "",
                title: "",
                description: "",
                available: true,
                date_return: "",
            },
        };
    },
    methods: {
        addItem() {
            Api.postItem(this.item)
                .then(() => {
                    this.$store.dispatch("item_added", this.item);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>
