import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next'

export async function GET(request: Request) {
  console.log("ngrok: ", "123")

  let config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
    mode: 'no-cors',
  }
  let respone:any = await axios.get("http://d004-104-198-178-31.ngrok.io/");
  console.log("ngrok: ", respone)

  return new Response(respone)
}

// type message = {
//   message: string;
// }

// export default function  handler(
//   req: NextApiRequest,
//   res: NextApiResponse<message>
// ) {
//   async function fetchData() {
//     let config = {
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'GET, POST',
//         'Access-Control-Allow-Headers': 'Content-Type',
//      },
//      mode: 'no-cors',
//     }
//     let respone = await axios.get("http://badc-104-198-178-31.ngrok.io",config);
//     console.log("ngrok: ",respone)
//   }
//   fetchData();
//   res.status(200).json({'message':'ok'})
// }