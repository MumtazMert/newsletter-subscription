import '../globals.css';
import React from 'react';
// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
