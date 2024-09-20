import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm"
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, addAppointment, contacts}) => {
  
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
   
    addAppointment({title, contact, date, time});
    setTitle("");
    setContact("");
    setTime("");
    setDate("");
   
  };

  return (
    <div>
      <section className="form-container">
    
      <h2>Add Appointment</h2>
        <AppointmentForm 

          title={title}
          setTitle={setTitle}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          contact={contact}
          setContact={setContact}
          contacts={contacts}
          handleSubmit={handleSubmit}
        />
      </section>
    
      <section className="appoint-list">
        <h2 id="appoint-title">Upcoming Appointments</h2>
        <div>
        <TileList items={appointments} />
        </div>
      </section>
    </div>
  );
};