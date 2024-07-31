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
  /** メールアドレス */
  email: string
}

export type UpdateStaffRequest = {
  staff: UpdateStaff
}

export type Staff = {
  id: number
  firstName: string
  lastName: string
  birthDate: string
  email: string
}

export type NewStaff = {
  /** 名 */
  firstName: string
  /** 性 */
  lastName: string
  /** 生年月日 */
  birthDate: string
  /** メールアドレス */
  email: string
}

/** 新規作成するスタッフ */
export type NewStaffRequest = {
  staff: NewStaff
}

export type BigInteger = {
  bit?: BigInteger | undefined
  get_signum$kt_math: number
  get_mag$kt_math: number[]
  absoluteValue: BigInteger
  bitLength: number
  signum: number
  bitCount: number
}
