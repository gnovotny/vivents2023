import { NextApiRequest, NextApiResponse } from 'next'

const AT_TOKEN = 'pat4vIHOUYEZkS3CI.42b8b934208d1495bd9aa55642d4833d6a091bf0b12b9689d66bc67fa94e5bdd'
const AT_BASE_ID = 'appdkHMUd2frNhhFP'

import Airtable from 'airtable'

import convertRequestBodyToJSObject from '@/lib/utils/req-body-to-js-obj'

Airtable.configure({ apiKey: AT_TOKEN })

const createSubscription = (data: any) => {
  return new Promise((resolve, reject) => {
    const base = new Airtable().base(AT_BASE_ID)
    base('Subscriptions').create(
      {
        Status: 'Subscribed',
        Email: data['email'],
        Name: data['name'],
      },
      function (err: any, records: any) {
        if (err) {
          console.error(err)
          return reject({})
        }
        resolve(records)
      }
    )
  })
}

export default async function signup(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = convertRequestBodyToJSObject(req)

    if (data) {
      const newSub = (await createSubscription(data)) as any

      if (newSub) {
        return res.json({
          success: true,
          data: newSub?.fields,
        })
      }
    }

    return res.status(500).json({
      success: false,
      error: 'unknown',
    })
  } catch (e: any) {
    return res.status(e.statusCode || 500).json({
      success: false,
      error: e.message,
    })
  }
}
