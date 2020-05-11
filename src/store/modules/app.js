const app = {
    state: {
        loading: false
    },
    mutations: {
        SET_LOADING: (state, loading) => {
            state.loading = loading;
        }
    },
    actions: {
        setLoading({ commit }, loading) {
            commit("SET_LOADING", loading);
        }
    }
};
export default app;
