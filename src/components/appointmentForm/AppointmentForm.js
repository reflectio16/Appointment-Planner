import React from "react";
import { Form } from "react-router-dom/dist";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};


export const AppointmentForm = ({
  title,
  setTitle,
  date,
  setDate,
  time,
  setTime,
  contact,
  setContact,
  contacts,
  handleSubmit
}) => {


  return (
    <>
    <Form onSubmit={handleSubmit}>
      <label>
        Appointment Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>

      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={getTodayString()}
          required
        />
      </label>
      <label>
        Time:
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </label>
      <label>
        Contact:
        <ContactPicker
          contacts={contacts}
          value={contact}  // Bind the contact state value
          onChange={(e) => setContact(e.target.value)}  // Update contact state when a contact is selected
        />
      </label>
      <button type="submit">Add Appointment</button>
    </Form>

    </>
  );
};

