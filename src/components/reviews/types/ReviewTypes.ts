interface UserType {
  email: string;
  displayName: string;
  _id: string;
}

export interface ReviewType {
  createdBy: UserType;
  hotelId: string;
  text: string;
  likes: UserType[];
  dislikes: UserType[];
  rating: number;
}
