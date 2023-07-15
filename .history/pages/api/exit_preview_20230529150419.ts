import type { NextApiRequest, NextApiResponse } from "next";


export default function exit(req:NextApiRequest, res:NextApiResponse){
    res.clearPreviewData(),
    res.writeHead(307, {Location: ("/")});
    res.end();
}
// 

// import { draftMode } from 'next/headers';

// export async function GET(request: Request) {
//     draftMode().disable();
//     return new Response('Draft mode is disabled');
// }