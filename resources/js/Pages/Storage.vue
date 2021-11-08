<template>
    <div class="container mx-auto py-24">
        <storage-items
            v-for="(item, key) in items"
            :key="key"
            :item="item"
        ></storage-items>
    </div>
</template>

<script>
import StorageItems from "../Components/StorageItems.vue";
export default {
    components: { StorageItems },
    name: "Storage",
    data: function () {
        return {
            items: [
                {
                    id: 1,
                    title: "Fahrrad",
                    description:
                        "justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
                    in_stock: true,
                    date_return: "2022-02-13",
                },
                {
                    id: 2,
                    title: "Fahrrad",
                    description:
                        "venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo",
                    in_stock: false,
                    date_return: "2022-01-17",
                },
                {
                    id: 3,
                    title: "Verlängerungskabel",
                    description:
                        "fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel",
                    in_stock: true,
                    date_return: "2021-12-28",
                },
                {
                    id: 4,
                    title: "Stuhlhussen",
                    description:
                        "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor",
                    in_stock: false,
                    date_return: "2022-07-23",
                },
                {
                    id: 5,
                    title: "Inline-Skater",
                    description:
                        "phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac",
                    in_stock: false,
                    date_return: "2021-12-12",
                },
                {
                    id: 6,
                    title: "Fahrrad",
                    description:
                        "mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae",
                    in_stock: false,
                    date_return: "2021-11-09",
                },
                {
                    id: 7,
                    title: "Inline-Skater",
                    description:
                        "mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum",
                    in_stock: false,
                    date_return: "2022-04-17",
                },
                {
                    id: 8,
                    title: "Stehtische",
                    description:
                        "et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis",
                    in_stock: false,
                    date_return: "2022-03-17",
                },
                {
                    id: 9,
                    title: "Verlängerungskabel",
                    description:
                        "eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare",
                    in_stock: true,
                    date_return: "2022-03-05",
                },
                {
                    id: 10,
                    title: "Stuhlhussen",
                    description:
                        "elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget",
                    in_stock: true,
                    date_return: "2022-05-10",
                },
                {
                    id: 11,
                    title: "Bierzelt-Garnitur",
                    description:
                        "sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor",
                    in_stock: true,
                    date_return: "2022-10-20",
                },
                {
                    id: 12,
                    title: "Verlängerungskabel",
                    description:
                        "cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec",
                    in_stock: true,
                    date_return: "2022-02-19",
                },
                {
                    id: 13,
                    title: "Verlängerungskabel",
                    description:
                        "morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo",
                    in_stock: false,
                    date_return: "2022-06-05",
                },
                {
                    id: 14,
                    title: "Fahrrad",
                    description:
                        "aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet",
                    in_stock: false,
                    date_return: "2022-09-29",
                },
                {
                    id: 15,
                    title: "Bierzelt-Garnitur",
                    description:
                        "commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget",
                    in_stock: false,
                    date_return: "2022-02-04",
                },
                {
                    id: 16,
                    title: "Stehtische",
                    description:
                        "nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus",
                    in_stock: false,
                    date_return: "2021-12-03",
                },
                {
                    id: 17,
                    title: "Inline-Skater",
                    description:
                        "turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis",
                    in_stock: true,
                    date_return: "2021-12-07",
                },
                {
                    id: 18,
                    title: "Inline-Skater",
                    description:
                        "et magnis dis parturient montes nascetur ridiculus mus etiam vel augue",
                    in_stock: false,
                    date_return: "2022-10-23",
                },
            ],
        };
    },
};
</script>
