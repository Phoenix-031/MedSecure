
import { Routes,Route } from "react-router-dom"

import { Home,About, Fundraiser, BookAppointment, Login } from "./pages"
import { Navbar } from "./components"

import './styles/output.css'
import PatientHome from "./pages/Patient/PatientHome"
import DoctorHome from "./pages/Doctor/DoctorHome"
import AdminPage from "./pages/Admin/AdminPage"
import AddDoctor from "./pages/Doctor/AddDoctor"
import Testing from "./pages/Testing/Testing"
import AddFundraiser from "./pages/AddFundraiser"
import GetAllDoctors from "./components/contractcom/GetAllDoctors"
import PatientDetaills from "./pages/PatientDetaills"

// import { ThirdwebProvider } from "@thirdweb-dev/react"



function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/test' element={<Testing />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/fundraiser' element={<Fundraiser />} />
        <Route path='/book-appointment' element={<BookAppointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/patienthome" element={<PatientHome />} />
        <Route path="/doctorhome" element={<DoctorHome />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/adddoc" element={<AddDoctor />} />
        <Route path="/fundraiser/info" element={<AddFundraiser />} />
        <Route path="/getall/" element={<GetAllDoctors />} />
        <Route path="/adddoc/" element={<AddDoctor />} />
        <Route path="/patient-details" element={<PatientDetaills />} />
      </Routes>
    </>
  )
}

export default App
