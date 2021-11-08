<template>
    <button
        class="
            p-4
            bg-secondary
            hover:bg-primary hover:text-white
            shadow-2xl
            rounded-full
            absolute
            bottom-48
            right-12
            z-10
        "
        @click="$store.commit('INCREMENT')"
    >
        <a href="#" class="font-bold">
            <img src="img/plus.svg" alt="plus" />
        </a>
    </button>
</template>

<script>
export default {};
</script>
