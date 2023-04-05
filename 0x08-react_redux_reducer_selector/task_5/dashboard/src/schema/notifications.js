import notificationData from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notification', {
	author: user,
	context: message,
});

const normalizedData = normalize(notificationData, [notification]);

export { normalizedData };

export function getAllNotificationsByUser(userId) {
	const notifications = normalizedData.entities.notifications;
	const messages = normalizedData.entities.messages;
    const notificationsByUser = [];

	for (const id in notifications) {
		if (notifications[id].author === userId) {
			notificationsByUser.push(messages[notifications[id].context]);
		}
	}

	return notificationsByUser;
}

const notificationsNormalizer = (data) => {
	const normalizeData = normalize(data, [notification]);
	return normalizedData.entities;
};

export default notificationsNormalizer;