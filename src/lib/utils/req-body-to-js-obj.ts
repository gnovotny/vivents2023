import { NextApiRequest } from 'next'

export const convertRequestBodyToJSObject = <T = unknown>(req: NextApiRequest): any => {
  let parsedBody: any = {}

  if (typeof req?.body === 'string' && req?.body?.length > 0) {
    parsedBody = JSON.parse(req?.body)
  } else {
    parsedBody = req.body
  }

  return parsedBody
}

export default convertRequestBodyToJSObject
