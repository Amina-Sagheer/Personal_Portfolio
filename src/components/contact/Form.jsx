// src/components/contact/Form.jsx
import React from 'react';

export default function Form() {
  const email = "aminasagheer4@gmail.com"; // Replace with your email address
  const subject = "Contact Form Submission";
  const body = "Hello,\n\nI would like to get in touch with you regarding the following:\n\n";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    
      <a
        href={mailtoLink}
        className="px-4 py-2 rounded-md shadow-lg bg-background border border-accent/30 border-solid
        hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
      >
        Send Email
      </a>
   
  );
}

