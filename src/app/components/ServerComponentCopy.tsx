// import { headers } from 'next/headers';
import React from 'react';

export interface ServerComponentProps {
  children?: React.ReactNode;
}

const ServerComponentCopy = ({ children }: ServerComponentProps) => {
  // console.log(headers());

  return (
    <div>
      <span>Server Component Copy</span>
      {children}
    </div>
  );
};

export default ServerComponentCopy;
