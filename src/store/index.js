import { createStore } from "vuex";
import users from "@/store/userModule";
import Auth from "@/store/authModule";
import CourseModule from "@/store/CourseModule"
export default createStore({
    modules:{
        users:users,
        auth:Auth,
        courseModule:CourseModule
    }
});