export const patientSlice = (set) => ({
    patient:true,
    setPatient: (user) => set((state) => ({ ...state, user }))
});
