import { getDateTemplate } from "./getDateTemplate";

import md5 from 'md5';
const baseUrl = 'https://api.valantis.store:41000/'

export async function getIds(limit: number, offset: number = 1) {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'X-Auth': md5(`Valantis_${getDateTemplate()}`),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      action: 'get_ids',
      params: {
        offset,
        limit
      }
    })
  })

  const data = await response.json()

  return data.result
}