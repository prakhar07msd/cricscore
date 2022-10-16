import { Button, CardActions, CardContent, Grid, Typography } from "@material-ui/core";
import Card from '@mui/material/Card';
import React from "react";
const MyCard=({match})=>{

  const getMatchCard=()=>{
    return (
      <Card>
        <CardContent>
          <Grid container justifyContent="center" alignItems="center" spacing={4}>
            <Grid item>
              <Typography variant="h5">First Team</Typography>
              </Grid>
            <Grid item>
              <img style={{width: 85}} src={require("./img/vs1.jpg")} alt=""></img>
              </Grid>
            <Grid item>
            <Typography variant="h5">Second Team</Typography>
              </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container justifyContent="center">
          <Button item variant="contained" color="primary">
               Show details
          </Button>
          <Button item variant="contained" color="primary">
               {new Date().toString()}
          </Button>
          </Grid>
        </CardActions>
      </Card>
    );
  }

  return getMatchCard();
};

export default MyCard;