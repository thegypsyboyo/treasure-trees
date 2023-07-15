import type {NextApiResponse, NextApiRequest} from "next";

export default function preview(req: NextApiRequest, res:NextApiResponse) {
    res.setPreviewData({});
    res.writeHead(307,  {Location: "/"});
    res.end();
}


// import { draftMode } from "next/headers";

// export async function GET(request: Request) {
//     draftMode().enable();
//     return new Response('Draft mode is enabled');
// }