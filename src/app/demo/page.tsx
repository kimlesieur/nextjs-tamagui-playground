import { notFound } from 'next/navigation';
import React from 'react';

function demo() {
  notFound();
  return (
    <div>Page de démo</div>
  )
}

export default demo;