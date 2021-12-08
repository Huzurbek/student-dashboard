import { createStore } from "vuex";
import users from "@/store/userModule";
import Auth from "@/store/authModule";
import OrderModule from "@/store/OrdersModule"
export default createStore({
    modules:{
        users:users,
        auth:Auth,
        orderModule:OrderModule
    }
});