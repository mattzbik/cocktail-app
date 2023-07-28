import DataLoader from 'dataloader';
import { In } from 'typeorm';
import { User } from '../entities/User';

export const userLoader = () =>
  new DataLoader<string, User>(async (userIds) => {
    const users = await User.findBy({ id: In(userIds) });
    const userIdToUser: Record<string, User> = {};
    users.forEach((u) => {
      userIdToUser[u.id] = u;
    });
    return userIds.map((userId) => userIdToUser[userId]);
  });
