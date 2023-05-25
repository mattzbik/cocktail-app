import DataLoader from 'dataloader';
import { In } from 'typeorm';
import { Glass } from '../entities/Glass';

export const createGlassLoader = () =>
  new DataLoader<string, Glass>(async (glassIds) => {
    const glasses = await Glass.find({ where: { id: In(glassIds) } });
    const glassIdToGlass: Record<string, Glass> = {};
    glasses.forEach((u) => {
      glassIdToGlass[u.id] = u;
    });

    return glassIds.map((glassId) => glassIdToGlass[glassId]);
  });
