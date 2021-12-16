import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default {
    getItems() {
        return apiClient.get("/items");
    },
    getItem(id) {
        return apiClient.get("/items/" + id);
    },
    postItem(item) {
        return apiClient.post("/items", item);
    },
    deleteItem(id) {
        return apiClient.delete("/items", +id);
    },
};