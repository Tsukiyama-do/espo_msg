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
            "yuichisierra_kusc_fm@willcom.com", //RECEIVER_ADDRESS
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
            Data: "EMAIL_ESPO",
          },
        },
        Source: "noreply@jj1pow.com", // SENDER_ADDRESS
        ReplyToAddresses: [
          /* more items */
        ],  
      };
        
        // const command = new CloneReceiptRuleSetCommand(params);
            
            
      const run = async () => {
        try {
          const data = await client.send(new SendEmailCommand(params));
//          console.log("Success", data);
          return "Success" + data ;
        } catch (err) {
//          console.log("Error", err);
          return "Error" + err;
}
      };
      run();

};
      
exports.awsSes = awsSes;

