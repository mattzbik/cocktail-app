import { Card, CardContent, Typography } from '@mui/material';
import Link from 'next/link';

interface CocktailProps {
  description: string;
  id: string;
  name: string;
}

export const Cocktail: React.FC<CocktailProps> = ({
  name,
  description,
  id,
}) => (
  <Card elevation={6}>
    <CardContent>
      <Typography variant="h5">
        <Link href={'/cocktail/[id]'} as={`/cocktail/${id}`}>
          {name}
        </Link>
      </Typography>
      <Typography color="gray">{description}</Typography>
    </CardContent>
  </Card>
);
