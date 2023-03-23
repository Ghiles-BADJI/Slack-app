import { Chanel } from "./chanel"
import { DirectMessage } from "./direct-message";

export type UnreadMessage = {
    chanel?: Chanel;
    directMessage?: DirectMessage;
}