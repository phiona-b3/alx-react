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
  const output = [];
  const notifications = normalized.entities.notification;
  const messages = normalized.entities.messages;
  
  for (const id in notifications) {
    if (notifications[id].author === userId) {
      output.push(messages[notifications[id].context]);
    }
  }

  return output;
}

export { normalized };