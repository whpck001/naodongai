import { NextRequest } from "next/server";

const handler = async (req: NextRequest) => {
    const regex = /http[\S\s]*?\/api\/openai\//;

    const path = req.url.replace(regex, '');
    // const path = req.url.pathname.slice(12);
    // const { path } = req.query;
    let headers : { [key: string]: any } = {};

    // for (const key in req.headers) {
    //     headers[key] = req.headers[key];
    // }

    // req.headers.
    // req.headers.forEach((v,k,p) => {
    //   headers[k] = v;
    // })
    // let headers : { [key: string]: any } = {};
    // console.log(req.headers)
    // console.log(req.headers.toString())
    headers['Authorization'] = req.headers.get('Authorization')
    const res = await fetch( 
        `https://api.openai.com/${path}`,
        {
            method: req.method,
            body: req.body,
            headers: headers,
        }
        
    );
    return res;
    
}
export default handler

export const config = {
    runtime: 'edge',
  };
  
  
  