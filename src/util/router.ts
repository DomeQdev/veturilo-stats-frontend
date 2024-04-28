import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Index from "../components/Home/Home.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: Index,
    },
    {
        path: "/getBike",
        name: "GetBike",
        component: () => import("../components/GetBike/GetBike.vue"),
    },
];

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
