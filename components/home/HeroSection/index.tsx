import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, Typography, Grid, useTheme, useMediaQuery } from '@material-ui/core/';
import HeroBackground from './HeroBackground';
import HeroBracket from './HeroBracket';
import ProfileImage from './ProfileImage';
import {useSpring, animated} from 'react-spring'


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.grey[900],
  },
  wrapper: {
    marginBottom: theme.spacing(7),
    textAlign: 'center'
  },
  responsiveButtonSize: {
    [theme.breakpoints.down('xs')]: {
      padding: '6px 16px',
      fontSize: theme.typography.button.fontSize,
    },
  },
  responsiveOutlinedButtonSize: {
    [theme.breakpoints.down('xs')]: {
      padding: '5px 15px',
      fontSize: theme.typography.button.fontSize,
    },
  },
  profile: {
    marginBottom: `2rem`
  }
}));

interface HeroData {
  greetings: string;
  introduction: string;
  role: string;
  paragraph: string;
  button1: string;
  button2: string;
}

export default function Hero({ heroData: t }: { heroData: HeroData }) {
  const classes = useStyles();
  const theme = useTheme();
  const smMediaQuery = useMediaQuery(theme => theme.breakpoints.up('sm'))

  const animateButtonProps = useSpring({
    delay: 1500,
    from: {
      opacity: 0,
      transform: 'scale(0)',
    },
    to: {
      opacity: 1,
      transform: 'scale(1)',
    }
  })

  const createAnimateTextProps = (delay = 0) => {
    return useSpring({
      from: {opacity: 0, transform: 'translateY(-50px)'},
      to: {
        opacity: 1,
        transform: 'translateY(0)',
      },
      config: {
        duration: 500
      },
      delay
    });
  }

  const greetingProps = createAnimateTextProps();
  const roleProps = createAnimateTextProps(500);
  const paragraphProps = createAnimateTextProps(1000);

  const AnimateTypo = animated(Typography);

  return (
    <section id="home" className={classes.root}>
      {
        smMediaQuery && <HeroBackground color="transparent"/>
      }

      <Container>
        {
          smMediaQuery &&    <Grid container spacing={2} justify={`center`} className={classes.profile}>
            <Grid item>
              <HeroBracket type="left" color={theme.palette.secondary.light}/>
            </Grid>
            <Grid item>
              <ProfileImage src="/profile-picture.jpg"/>
            </Grid>
            <Grid item>
              <HeroBracket type="right" color={theme.palette.secondary.light}/>
            </Grid>
          </Grid>
        }

        <div className={classes.wrapper}>
          <AnimateTypo component="h4" variant="h5" gutterBottom  style={greetingProps}>
            <Typography variant="inherit" color="primary">
              {t.greetings}
            </Typography>
            {t.introduction}
          </AnimateTypo>

          <AnimateTypo component="h1" variant="h2" gutterBottom style={roleProps}>
            {t.role}
          </AnimateTypo>

          <AnimateTypo component="p" variant="subtitle1" color="textSecondary" style={paragraphProps}>
            {t.paragraph}
          </AnimateTypo>
        </div>

        <animated.div style={animateButtonProps}>
        <Grid container spacing={2} justify="center" >
          <Grid item>
            <Button
              href="#portfolio"
              variant="contained"
              color="primary"
              size="large"
              className={classes.responsiveButtonSize}
            >
              {t.button1}
            </Button>
          </Grid>
          <Grid item>
            <Button
              href="#contact"
              variant="outlined"
              color="primary"
              size="large"
              className={classes.responsiveOutlinedButtonSize}
            >
              {t.button2}
            </Button>
          </Grid>
        </Grid>
        </animated.div>
      </Container>
    </section>
  );
}
