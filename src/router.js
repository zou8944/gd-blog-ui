import {createRouter, createWebHistory} from "vue-router";
import BlogList from "@/views/detail/BlogList.vue";
import BlogPost from "@/views/detail/BlogPost.vue";

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