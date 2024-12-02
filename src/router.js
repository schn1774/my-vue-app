import { createRouter, createWebHistory } from 'vue-router'
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import RecipePages from "./components/RecipePages.vue";
import SortedRecipes from "./components/SortedRecipes.vue";
import RecipeCategory from "./components/RecipeCategory.vue";

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
            path: '/recipes',
            name: 'Recipes',
            children: [
                {
                    path: 'details/:id',
                    name: 'RecipePages',
                    component: RecipePages,
                    meta: {
                        title:'Recipe Pages',
                    }
                }
            ]
        },
        {
            path: '/sortedRecipes',
            name: 'SortedRecipes',
            children: [
                {
                    path: 'category/:mealType',
                    name: 'RecipeCategory',
                    component: RecipeCategory,
                    meta: {
                        title: 'Filtering by meal type',
                    }
                }
            ]
        }
    ]
})
// "Navigation guard"
router.beforeEach((to, from) => {
    let title = to.meta?.title ?? 'Default Title'
    document.title = title + ' | ' + 'Colleen Schneider'
})
export default router