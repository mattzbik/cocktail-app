import {
  Alert,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useGetCocktailData } from '../../src/components/Cocktail/hooks/useGetCocktailData';
import { Wrapper } from '../../src/components/Wrapper';
import { useGetId } from '../../src/hooks/useGetId';

const Cocktail = () => {
  const id = useGetId();
  const { data, loading, error } = useGetCocktailData(id);

  return (
    <Wrapper>
      <Grid container>
        {loading && <div>Loading...</div>}
        {error && (
          <Grid item xs={12}>
            <Alert severity="error">
              <Typography>{error.message}</Typography>
              <Typography>Could not find cocktail.</Typography>
            </Alert>
          </Grid>
        )}
        {data && (
          <Grid container mt={2} spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h3">{data.name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography component="div" variant="h6">
                Description
              </Typography>
              <Typography>{data.description}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography component="div" variant="h6">
                Method
              </Typography>
              <Typography>{data.method}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography component="div" variant="h6">
                Ingredients
              </Typography>
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Ingredient</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell align="right">Measurement</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.ingredients.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.quantity}</TableCell>
                        <TableCell align="right">{row.measurement}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Wrapper>
  );
};

export default Cocktail;
