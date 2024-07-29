/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    status: 200
    /** OK */
    resBody: Types.Staff[]
  }

  post: {
    status: 200
    /** OK */
    resBody: Types.Staff
    reqBody: Types.NewStaffRequest
  }
}
