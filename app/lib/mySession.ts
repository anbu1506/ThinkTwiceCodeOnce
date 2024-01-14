import { Session } from "next-auth";

export interface MySession extends Session {
  user: {
    id: string;
    name: string;
    email: string;
    image: string;
  };
}
