import router from "@/router/router";

export default function authGuard(store) {
  const authRoutes = ["login", "signup", "forgot_password"];
  router.beforeEach((to, from, next) => {
    if (authRoutes.includes(to.name) && store.state.auth.isLoggedIn) {
      return next({ name: "catalog" });
    }
    if (!authRoutes.includes(to.name) && !store.state.auth.isLoggedIn) {
      return next({ name: "login" });
    }
    return next();
  });
}
