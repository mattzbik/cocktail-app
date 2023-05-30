import { Container, Grid } from '@mui/material';
import { Cocktail } from '../src/components/Cocktail';
import { useCocktailsQuery } from '../src/generated/types';

export default function Home() {
  const { data, loading, error } = useCocktailsQuery({
    variables: { limit: 10, cursor: null },
  });

  console.log(data, loading, error);

  return (
    <Container maxWidth="lg" sx={{ p: 4 }}>
      <Grid container spacing={2}>
        {data?.cocktails.cocktails.map((c, i) => (
          <Grid item key={i} xs={4}>
            <Cocktail name={c.name} description={c.description} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
