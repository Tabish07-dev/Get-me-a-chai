import React from 'react'
import PaymentPage from '../components/PaymentPage'

const Username = async ({ params }) => {
  const resolvedParams = await params;

  

  return (
    <>
      <PaymentPage username={resolvedParams.username} />
    </>
  )
}

export default Username
 
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  return {
    title: `Support ${resolvedParams.username} - Get Me A Chai`,
  }
}