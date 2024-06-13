import { reactive } from "vue";

export const store = reactive({
   apiUrl: 'http://127.0.0.1:8000',
   linksRoute: [
    {
        label: 'HomePage',
        route: 'home'
    },
    {
        label: 'projects',
        route: 'projects'
    },
    {
        label: 'contact',
        route: 'contact'
    }
]
});