<template>
    <div class="container mx-auto py-24">
        <form @submit.prevent="addItem">
            <label for="Item">Item-Name</label>
            <input type="text" name="itemTitle" id="" />
            <button
                class="
                    py-1
                    px-3
                    bg-secondary
                    hover:bg-primary
                    font-bold
                    text-white
                "
            >
                send
            </button>
        </form>
        <div>
            {{ itemTitle }}
        </div>
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
            this.$store.commit("ADD_ITEM");
        },
    },
};
</script>
