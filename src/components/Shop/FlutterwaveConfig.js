export const config = {
  public_key: process.env.REACT_APP_PUBLIC_KEY,
  tx_ref: Date.now(),
  amount: 100,
  currency: 'NGN',
  payment_options: 'card,mobilemoney,ussd',
  customer: {
    email: 'user@gmail.com',
    phonenumber: '07064586146',
    name: 'joel ugwumadu',
  },
  customizations: {
    title: 'my Payment Title',
    description: 'Payment for items in cart',
    logo:
      'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
  },
};
