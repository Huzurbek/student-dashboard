import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import CourseDashboard from "@/views/CourseDashboard.vue";

import MainPage from "@/views/CoursePages/MainPage.vue";
import LessonPage from "@/views/CoursePages/LessonPage.vue";
import SlaydPage from "@/views/CoursePages/SlaydPage.vue";
import TestPage from "@/views/CoursePages/TestPage.vue";
import VocabularyPage from "@/views/CoursePages/VocabularyPage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/courseDashboard",
        name: "CourseDashboard",
        component: CourseDashboard,
        children: [
            {
                path: '/mainPage',
                name: 'MainPage',
                component: MainPage
            },
            {
                path: '/lessonPage',
                name: 'LessonPage',
                component: LessonPage
            },
            {
                path: '/slaydPage',
                name: 'SlaydPage',
                component: SlaydPage
            },
            {
                path: '/slaydPage',
                name: 'SlaydPage',
                component: SlaydPage
            },
            {
                path: '/testPage',
                name: 'TestPage',
                component: TestPage
            },
            {
                path: '/vocabularyPage',
                name: 'VocabularyPage',
                component: VocabularyPage,
            },

        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;