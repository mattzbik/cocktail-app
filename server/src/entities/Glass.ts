import { registerEnumType } from 'type-graphql';

export enum Glass {
  Boston = 'Boston',
  Collins = 'Collins',
  Flute = 'Flute',
  Goblet = 'Goblet',
  Hurricane = 'Hurricane',
  Margarita = 'Margarita',
  Martini = 'Martini',
  Old_Fashioned = 'Old Fashioned',
  Rocks = 'Rocks',
  Shot = 'Shot',
  Sling = 'Sling',
  Sour = 'Sour',
  Snifter = 'Snifter',
  Toddy = 'Toddy',
}

registerEnumType(Glass, {
  name: 'Glass',
  description: 'Glassware',
});
