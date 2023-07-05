import { AxiosResponse } from 'axios'
import API from '../axios'

interface GetTrackingRequest {
  trackingCode: string
}

export async function getTracking({
  trackingCode,
}: GetTrackingRequest): Promise<any> {
  const response: AxiosResponse<any> = await API({
    method: 'GET',
    url: `rastreamentos/${trackingCode}/grafo4g`,
  })

  return response.data
}
