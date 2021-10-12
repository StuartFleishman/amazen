import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { Store } from '../utils/Store';

export default function Shipping() {
  const { dispatch, state } = useContext(Store);
  const { userInfo } = state;
  const router = useRouter();
  const {redirect} = router.query

  if (!userInfo) {
    router.push('/login?redirect=/shipping');
  }

  return (
    <div>
      ship that ship
    </div>
  )
}
