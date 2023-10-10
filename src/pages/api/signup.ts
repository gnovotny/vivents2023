import { NextApiRequest, NextApiResponse } from 'next'

const AT_TOKEN = 'patYqWa22eBTu3iww.9a6cbe46a675a7683ac0e3e39ef04fdb07ae32f4e0ad99dc59db3e052d694372'
const AT_BASE_ID = 'appRwV7irUi1MjPGe'

import Airtable from 'airtable'

import convertRequestBodyToJSObject from '@/lib/utils/req-body-to-js-obj'

Airtable.configure({ apiKey: AT_TOKEN })

const createSubscription = (data: any) => {
  return new Promise((resolve, reject) => {
    const base = new Airtable().base(AT_BASE_ID)
    base('Subscriptions').create(
      {
        Subscribed: true,
        Email: data['email'],
        // Name: data['name'],
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
