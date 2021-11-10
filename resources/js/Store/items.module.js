export const state = {
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
        }
    ],
};

export const actions = {};

export const mutations = {};

export const getters = {
    ['items'](state) {
        return state.items
    }
};

export default {
    state,
    actions,
    mutations,
    getters,
};