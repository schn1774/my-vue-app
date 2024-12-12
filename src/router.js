import { createRouter, createWebHistory } from 'vue-router'
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import RecipeCategory from "./components/RecipeCategory.vue";
import RecipeDetail from "./components/RecipeDetail.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior() {
        return { top: 0, left: 0 }
    },
    routes: [
        // your routes go here
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            meta: {
                title: 'Simple Recipes'
            }
        },
        {
            path: '/about',
            name: 'About',
            component: About,
            meta: {
                title: 'About me'
            }
        },
        {
            path: '/recipe/:recipeName',
            name: 'RecipeDetail',
            component: RecipeDetail,
            meta: {
                title: 'Recipe Details',
            }
        },
        {
            path: "/meal-type/:mealType",
            name: "RecipeCategory",
            component: RecipeCategory,
            meta: {
                title: "Recipe Category",
            },
        }
    ]
})
// "Navigation guard"
// router.beforeEach((to, from) => {
//     let title = to.meta?.title ?? 'Default Title'
//     document.title = title + ' | ' + 'Colleen Schneider'
// })
export default router
