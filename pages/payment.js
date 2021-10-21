import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useEffect, useContext, useState } from 'react';
import { Store } from '../utils/Store';
import Layout from '../components/Layout'
import CheckoutWizard from '../components/CheckoutWizard';

export default function Payment() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('')
  const { state, dispatch } = useContext(Store);
  const {
    cart: { shippingAddress },
  } = state;

  useEffect(() => {
    if (!shippingAddress.address) {
      router.push('/shipping');
    } else {
      setPaymentMethod(Cookies.get('paymentMethod') || '');
    }
  }, []);
  return <Layout title="Payment Method">
        <CheckoutWizard activeStep={2}></CheckoutWizard>
        
  </Layout>;
}
