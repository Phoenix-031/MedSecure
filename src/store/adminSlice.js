export const adminSlice = (set) => ({
    admin:true,
    setAdmin: (user) => set((state) => ({ ...state, user }))
});
