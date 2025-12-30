declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.pdf';

declare module "./Components/*/*" {
  import React from 'react';
  const Component: React.ComponentType<any>;
  export default Component;
}

declare module 'react-router-hash-link';

declare module "./Components/Nav/Navbar";
declare module "./Components/Home/Hero";
declare module "./Components/About/Aboutsec";
declare module "./Components/Projects/Projects";
declare module "./Components/Contact/Contacts";
