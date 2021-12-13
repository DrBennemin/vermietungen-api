<template>
    <div class="container mx-auto py-24">
        <form @submit.prevent="">
            <label for="Item">Item-Name</label>
            <input type="text" name="itemTitle" id="" v-model="itemTitle" />
            <button
                class="
                    py-1
                    px-3
                    bg-secondary
                    hover:bg-primary
                    font-bold
                    text-white
                "
                @click="addItem"
            >
                send
            </button>
        </form>
        <!-- <div>
            {{ $store.state.items }}
        </div> -->
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            itemTitle: "",
        };
    },
    methods: {
        addItem() {
            this.$store.commit("ADD_ITEM", this.itemTitle);
            this.itemTitle = "";
        },
    },
};
</script>
