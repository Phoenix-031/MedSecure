import { create, createStore } from "zustand";

import { doctorSlice } from "./doctorSlice";
import { patientSlice } from "./patientSlice";
import { adminSlice } from "./adminSlice";
import { appSlice } from "./appSlice";

const store = (set) => ({
    ...appSlice(set),
    ...doctorSlice(set),
    ...adminSlice(set),
    ...patientSlice(set)
});


const useStore = create(store)


export default useStore;