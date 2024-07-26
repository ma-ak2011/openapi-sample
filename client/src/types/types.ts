
export type User = {
  id: number;
  token: string;
  ownerUserId: number;
  name: string;
};

export type Staff = {
  staffId: number;
  firstName: string;
  lastName: string;
  storeCode: string | null;
  staffCode: string;
  memo: string;
};
