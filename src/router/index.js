import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue';
import SignInView from "@/views/SignInView.vue";
import SignUpView from "@/views/SignUpView.vue";

const routes = [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/about', name: 'About', component: AboutView },
    { path: '/login', name: 'Login', component: SignInView },
    { path: '/register', name: 'SignUp', component: SignUpView },
]

export default routes
