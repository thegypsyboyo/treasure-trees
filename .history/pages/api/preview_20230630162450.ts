import type { NextApiRequest, NextApiResponse } from 'next'

// export default function preview(req: NextApiRequest, res:NextApiResponse) {
//     res.setPreviewData({});
//     res.writeHead(307,  {Location: "/"});
//     res.end();
// }


export default function preview(req: NextApiRequest, res: NextApiResponse) {
    res.setDraftMode({ enable: true })
    res.writeHead(307, { Location: '/' })
    res.end()
}