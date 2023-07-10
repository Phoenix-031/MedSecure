import React, { useState } from 'react';
import './AppointmentForm.css';

const AppointmentForm = () => {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [city, setCity] = useState('');
  const [hospital, setHospital] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !age || !phone || !symptoms || !city || !hospital || !selectedDoctor || !appointmentDate) {
      alert('Please fill in all required fields.');
      return;
    }

    // submission logic 

    setFullName('');
    setAge('');
    setPhone('');
    setSymptoms('');
    setCity('');
    setHospital('');
    setSelectedDoctor('');
    setAppointmentDate('');
  };

  return (
    <div className="appointment-form">
      <h2 className="form-title">Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="symptoms">Medical Condition/Symptoms</label>
          <textarea
            id="symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <select
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          >
            <option value="">Select City</option>
            <option value="City A">City A</option>
            <option value="City B">City B</option>
            <option value="City C">City C</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="hospital">Hospital</label>
          <select
            id="hospital"
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
            required
          >
            <option value="">Select Hospital</option>
            <option value="Hospital A">Hospital A</option>
            <option value="Hospital B">Hospital B</option>
            <option value="Hospital C">Hospital C</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="selectedDoctor">Doctor</label>
          <select
            id="selectedDoctor"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            required
          >
            <option value="">Select Doctor</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. Johnson">Dr. Johnson</option>
            <option value="Dr. Williams">Dr. Williams</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="appointmentDate">Date</label>
          <input
            type="date"
            id="appointmentDate"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
