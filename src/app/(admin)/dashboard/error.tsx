'use client';
import Button from '@/app/components/Button';
import React from 'react';

export interface ErrorComponentProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorComponentProps) => {
  return (
    <div>
      <p>{`Something went wrong. ${error.message}`}</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
};

export default Error;
