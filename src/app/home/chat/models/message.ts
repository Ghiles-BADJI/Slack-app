import { User } from "./user";

export type Message = {
    sender : User,
    date: Date,
    text: string,
    send: boolean
}