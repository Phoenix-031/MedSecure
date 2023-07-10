export const doctorSlice = (set) => ({
    doctor:true,
    setDoctor: (user) => set((state) => ({ ...state, user }))
});
