import router from "@/router/router";

export default function authGuard(store) {

  const authRoutes = ["auth"];
  router.beforeEach((to, from, next) => {
    if (authRoutes.includes(to.name) && store.state.auth.isLoggedIn) {
      return next({ name: "catalog" });
    }
    if (!authRoutes.includes(to.name) && !store.state.auth.isLoggedIn) {
      return next({ name: "auth" });
    }
    return next();
  });
}
