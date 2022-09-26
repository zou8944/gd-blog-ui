import {createRouter, createWebHistory} from "vue-router";
import BlogList from "@/components/BlogList.vue";
import BlogPost from "@/components/BlogPost.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: BlogList
        },
        {
            path: "/blogs/:id",
            component: BlogPost,
        }
    ]
});

export default router