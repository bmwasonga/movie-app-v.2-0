import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      color: 'black',
      justifyContent: 'center',
    },
  },
}));

export default function Navigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button href="#text-buttons" variant="outlined" color="primary">
        Movies
      </Button>
      <Button href="#text-buttons" variant="outlined" color="primary">
        Drama
      </Button>
      <Button href="#text-buttons" variant="outlined" color="primary">
        Children
      </Button>
    </div>
  );
}
