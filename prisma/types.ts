export type User = {
  email: string;
  password: string;
};

export type Code = {
  id: number;
  question: string;
  answer: string;
  userId: string;
  likes: number;
};
