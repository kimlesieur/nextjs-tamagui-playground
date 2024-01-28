import { wait } from '@/lib/wait';
import React, { Suspense } from 'react';

function demo() {
  return (
    <>
    <div>Page de démo avec du contenu</div>
    <Suspense fallback={<div>Loading...</div>}>
      <Users />
    </Suspense>
    </>
  )
}

async function Users() {
  await wait(3000);
  return <div>Users</div>;
}

export default demo;