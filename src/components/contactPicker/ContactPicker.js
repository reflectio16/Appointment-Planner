import React from "react";

export const ContactPicker = ({ contacts = [], value, name, onChange }) => {
  return (
    <select value={value} name={name} onChange={onChange}>
      <option value="">No Contact Selected</option>  {/* Default option */}
      {contacts.map((contact, index) => (
        <option key={index} value={contact.name}>
          {contact.name} {/* Display contact name */}
        </option>
      ))}
    </select>
  );
};
