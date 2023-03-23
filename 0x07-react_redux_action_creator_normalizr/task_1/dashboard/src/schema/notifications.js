import * as notificationData from "../../../../notifications.json";
import { normalize, schema } from 'normalizer';

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribuute: "guid" });
const notification = new schema.Entity("notification", {
    author: user,
    context: message,
});

const normalized = normalize(notificationData, [notification]);

export default function getAllNotificationsByUser(userId) {
  return notificationData.filter((notification) => notification.author.id === userId).map((notification) => notification.context);
}
export { normalized };