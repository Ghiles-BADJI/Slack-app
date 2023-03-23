import { Chanel } from "./chanel";
import { DirectMessage } from "./direct-message";
import { UnreadMessage } from "./unread-message";

export type AllConversationsResponse = {
    unreadMessages: UnreadMessage[];
    chanelList: Chanel[];
    directMessageList: DirectMessage[];
}