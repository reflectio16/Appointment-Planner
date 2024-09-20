import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>

      <input 
       type="text"
       value={name}
       onChange={(e) => setName(e.target.value)}
       placeholder="Name"
       required
       />

      <input
       type="tel"
       value={phone}
       onChange={(e) => setPhone(e.target.value)}
       placeholder="Phone"
       pattern="^\+(\d{1,3})[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{0,4}$"
        title="Please enter a valid phone number, e.g., +33 1234 567890"
        required
       />

      <input 
       type="email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       placeholder="Email"
       required
      />
      
      <button type="submit">Add Contact</button>
      
    </form>
    </>
  );
};

