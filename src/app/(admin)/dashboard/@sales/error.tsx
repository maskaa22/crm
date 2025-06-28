'use client';
import React from 'react';

export interface ErrorComponentProps {
  error: Error;
}

const error = ({}: ErrorComponentProps) => {
  return <div>Unexpected error inside slot sales</div>;
};

export default error;
