<template>
    <div class="flex justify-between items-center">
        <div class="ml-6">
            <a href="/">
                <img src="/img/vermietung-api-logo.svg" alt="logo" class="w-12 h-12" />
            </a>
        </div>
        <div class="flex relative">
            <img src="/img/search.svg" alt="search" class="w-4 absolute left-3 top-3" />
            <button class="cursor-pointer">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="SUCHE..."
                    class="
                        py-2
                        bg-gray-200
                        rounded-lg
                        pl-10
                        border-none
                        focus:border-primary focus:ring-primary focus:bg-white
                    " />
            </button>
        </div>
        <div class="flex mr-6">
            <img src="/img/notifications.svg" alt="notification" class="w-6" />
        </div>
    </div>
</template>

<script>
export default {}
</script>
