import { Message } from "./message"
import { User } from "./user";

export type AllMessagesResponse = {
    messages : Message[];
    user: User;
}