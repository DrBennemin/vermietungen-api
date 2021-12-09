<template>
    <div class="action-btn">
        <button
            class="
                p-4
                bg-secondary
                hover:bg-primary hover:text-white
                shadow-2xl
                rounded-full
            "
        >
            <img src="img/plus.svg" alt="plus" />
            <ul class="flyin bg-secondary relative bottom-24 right-0">
                <li>
                    <router-link :to="{ name: 'ItemList' }">
                        Add Item
                    </router-link>
                </li>
            </ul>
        </button>
    </div>
</template>

<script>
export default {};
</script>
