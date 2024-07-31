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
  staff: NewStaff
}

export type BigInteger = {
  bit?: BigInteger | undefined
  bitLength: number
  signum: number
  bitCount: number
  get_signum$kt_math: number
  get_mag$kt_math: number[]
  absoluteValue: BigInteger
}
