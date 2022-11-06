import React from 'react';
import  { Paystack }  from 'react-native-paystack-webview';
import { Alert, View } from 'react-native';
import getEnvVars from "../services/env"
import { useSelector } from 'react-redux';

function PayStack( {setShow,amount,subMitdata}) {
  const user = useSelector(({ user }) => user?.data);
  return (
    <View style={{ flex: 1 }}>
      <Paystack  
        paystackKey={getEnvVars().paystackclient}
        amount={amount}
        billingEmail= {user?.userData?.email}
        activityIndicatorColor="green"
        onCancel={(e) => {
          // handle response here
          setShow(false)
        }}
        onSuccess={(res) => {
          // handle response here
         const trxref=res?.data?.transactionRef?.reference
        
         subMitdata({trxref})
   
         setShow(false)
        }}
        autoStart={true}
      />
    </View>
  );
}
export default PayStack