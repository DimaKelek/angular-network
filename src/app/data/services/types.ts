export interface IProfile {
  id: number;
  username: string;
  avatarUrl: string | null;
  subscribersAmount: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
  stack: string[];
  city: string;
  description: string;
}

export interface IBaseResponse<ItemType = IProfile> {
  items: ItemType[];

  total: number;
  page: number;
  size: number;
  pages: number;
}
