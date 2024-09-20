import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {


  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  /*
  Check for duplicate contact name
  */

  useEffect(() => {
    const isDuplicate = contacts.some(contact => contact.name === name);
    setDuplicate(isDuplicate);
  }, [name, contacts]);



  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    
    if(!duplicate) {
      addContact({ name, phone, email });
      setName("");
      setPhone("");
      setEmail("");

    }
  };


  return (
    <div>
      <section className="form-container">
        <h2>Contact Form</h2> 
        <ContactForm 
         name={name}  
         setName={setName}  
         phone={phone} 
         setPhone={setPhone} 
         email={email}  
         setEmail={setEmail}  
         handleSubmit={handleSubmit} 

        />
        {duplicate && <p style={{ color: 'red' }}>This contact already exists</p>}

      </section>

     
      <section className="contact-list">
        <h2 id="contact-title">Contact List</h2>
        <div className="tile-list">
         <TileList items={contacts} />
        </div>
        
      </section>
    </div>
  );
};
