'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import sucimage from '../app/Public/images/icon-success.svg';

const Success = ({ email, onClose }) => {
  useEffect(() => {
    // Automatically close the success card after 5 seconds
    const timeoutId = setTimeout(onClose, 5000);

    // Clean up the timeout on unmount
    return () => clearTimeout(timeoutId);
  }, [onClose]);

  return (
    <div>
      <Image src={sucimage}></Image>
      <h2>Thanks for subscribing !</h2>
      <p>
        A confirmation email has been sent to (<strong>{email}</strong>).Please open it and click
        the button inside to confirm your subscription
      </p>
      <button onClick={onClose}>Dismiss message</button>
    </div>
  );
};

export default Success;
