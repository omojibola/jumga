export const createSubAccount = (profile) => {
  var request = require('request');
  var options = {
    method: 'POST',
    url:
      'https://cors-anywhere.herokuapp.com/https://api.flutterwave.com/v3/subaccounts',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer FLWSECK-15368e2760dc17de2eda65870b339848-X',
    },
    body: JSON.stringify({
      account_bank: '033',
      account_number: profile.accountNumber,
      business_name: profile.shopName,
      business_email: profile.email,
      business_contact: profile.shopName,
      business_contact_mobile: profile.phoneNumber,
      business_mobile: profile.phoneNumber,
      country: profile.country,

      meta: [{ meta_name: 'mem_adr', meta_value: '0x16241F327213' }],
      split_type: 'flat',
      split_value: 50,
    }),
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });
};
