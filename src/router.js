import {createRouter, createWebHistory} from "vue-router";
import BlogList from "@/views/blog/BlogList.vue";
import BlogPost from "@/views/blog/BlogPost.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: BlogList,
            props: {

            }
        },
        {
            path: "/blogs/:id",
            component: BlogPost
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { top: 0 }
    },
});

export default router