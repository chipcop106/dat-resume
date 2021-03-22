import { makeStyles } from '@material-ui/core/styles';
import { Box, Fab, Typography } from '@material-ui/core/';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { NextLinkComposed } from '../Link';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 0, 2, 0),
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography component="p" variant="h6" align="center" gutterBottom>
          Dat Codero ©2021
        </Typography>
      </Box>
    </footer>
  );
}
