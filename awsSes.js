const { SESClient, CloneReceiptRuleSetCommand, SendEmailCommand } = require("@aws-sdk/client-ses");

const { fromIni } = require("@aws-sdk/credential-providers");


const awsSes =  ( msg ) => {

      // a client can be shared by different commands.
      const client = new SESClient({ region: "us-east-1" ,credentials: fromIni({profile: "yuichi01"})});

      const params = {
        Destination: {
          /* required */
          CcAddresses: [
            /* more items */
          ],
          ToAddresses: [
//            "yuichisierra_kusc_fm@willcom.com", //RECEIVER_ADDRESS
            "yuichi.sr.hirose@gmail.com", //RECEIVER_ADDRESS
            /* more To-email addresses */
          ],
        },
        Message: {
          /* required */
          Body: {
            /* required */
            Html: {
              Charset: "UTF-8",
              Data: msg,
            },
            Text: {
              Charset: "UTF-8",
              Data: msg ,
            },
          },
          Subject: {
            Charset: "UTF-8",
            Data: msg,
          },
        },
        Source: "noreply@jj1pow.com", // SENDER_ADDRESS
        ReplyToAddresses: [
          /* more items */
        ],  
      };
        
    // const command = new CloneReceiptRuleSetCommand(params);
            
      const msg_success = "Message is sent in success";      
      const msg_error = "Error occurred in sending the message.";      
      const run = async () => {
        try {
          const data = await client.send(new SendEmailCommand(params));
//          console.log("Success", data);
          return msg_success  ;
        } catch (err) {
//          console.log("Error", err);
          return msg_error ;
}
      };
      run();

};
      
exports.awsSes = awsSes;

