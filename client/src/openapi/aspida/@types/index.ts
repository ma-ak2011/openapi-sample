/* eslint-disable */
export type UpdateStaff = {
  /** ID */
  id: number
  /** 名 */
  firstName: string
  /** 性 */
  lastName: string
  /** 生年月日 */
  birthDate: string
}

export type UpdateStaffRequest = {
  staff: UpdateStaff
}

export type Staff = {
  id: number
  firstName: string
  lastName: string
  birthDate: string
}

export type NewStaff = {
  /** 名 */
  firstName: string
  /** 性 */
  lastName: string
  /** 生年月日 */
  birthDate: string
}

/** 新規作成するスタッフ */
export type NewStaffRequest = {
  article: NewStaff
}

export type BigInteger = {
  bit?: BigInteger | undefined
  absoluteValue: BigInteger
  get_signum$kt_math: number
  get_mag$kt_math: number[]
  bitLength: number
  signum: number
  bitCount: number
}
