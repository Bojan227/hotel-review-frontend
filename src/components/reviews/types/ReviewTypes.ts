import { Dispatch, SetStateAction } from 'react';
interface UserType {
  email: string;
  displayName: string;
  _id: string;
  role: string;
}

export interface ReviewType {
  _id: string;
  createdBy: UserType;
  hotelId: string;
  text: string;
  likes: (string | undefined)[];
  dislikes: (string | undefined)[];
  rating: number;
}
