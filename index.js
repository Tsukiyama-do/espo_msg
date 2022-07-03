
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Http = new XMLHttpRequest();
const { awsSes } = require("./awsSes.js")


const url = "https://wdc.nict.go.jp/ISDJ/ionospheric-signal-i.html"; 
// const url='https://jsonplaceholder.typicode.com/posts';
Http.open("GET", url);
Http.send();

 
let deci = '';
let dvalue = '';
// Http.onreadystatechange = () => console.log(Http.responseText)
Http.onreadystatechange = () => { 

  if (Http.readyState == 4 // 通信の完了
    && Http.status == 200) { // 通信の成功

      const strwk = Http.responseText 
      const kok_position = strwk.indexOf('Kok') 
      const yam_position = strwk.indexOf('Yam') 
    //        console.log(strwk.substring(yam_position - 2,yam_position - 1 )) 
        deci = strwk.substring(yam_position - 2,yam_position - 1 )
        dvalue = "Espo : " + strwk.substring(yam_position - 6,yam_position - 1 )
        deci === '*' ? console.log(awsSes(dvalue )) : console.log("NoEspo")
    }

}

// Http.onreadystatechange = (e) => {
//    console.log(Http.responseText)
// }

//// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ses/index.html

////  https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ses-examples-sending-email.html










