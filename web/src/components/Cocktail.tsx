import { Card, CardContent, Typography } from '@mui/material';

interface CocktailProps {
  name: string;
  description: string;
}

export const Cocktail: React.FC<CocktailProps> = ({ name, description }) => (
  <Card elevation={6}>
    <CardContent>
      <Typography variant="h5">{name}</Typography>
      <Typography>{description}</Typography>
    </CardContent>
  </Card>
);
