export const appSlice = (set) => ({
    walletaddress:'',
    user:'',
    setUser: (user) => set((state) => ({ ...state, user })),
    setWalletaddress: (walletaddress) => set((state) => ({ ...state, walletaddress })),
    doctordata:[],
    setDoctordata: (doctordata) => set((state) => ({ ...state, doctordata })),
    admin:false,
    patient:false,
    doctor:false,
    setAdmin: (admin) => set((state) => ({ ...state, admin })),
    setPatient: (patient) => set((state) => ({ ...state, patient })),
    setDoctor: (doctor) => set((state) => ({ ...state, doctor })),
});
