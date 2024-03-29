import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Button,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from '@material-ui/core/';
import { useSpring, animated } from 'react-spring';
import HeroBackground from './HeroBackground';
import HeroBracket from './HeroBracket';
import ProfileImage from './ProfileImage';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.grey[900],
  },
  wrapper: {
    marginBottom: theme.spacing(7),
    textAlign: 'center',
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
    marginBottom: `2rem`,
  },
  hiddenTitle: {
    width: 0,
    position: 'absolute',
    height: 0,
    fontSize: '1px',
  },
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
  const myTheme = useTheme();
  const smMediaQuery = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up('sm')
  );

  const animateButtonProps = useSpring({
    delay: 1500,
    from: {
      opacity: 0,
      transform: 'scale(0)',
    },
    to: {
      opacity: 1,
      transform: 'scale(1)',
    },
  });

  const CreateAnimateTextProps = (delay = 0) =>
    useSpring({
      from: { opacity: 0, transform: 'translateY(-50px)' },
      to: {
        opacity: 1,
        transform: 'translateY(0)',
      },
      config: {
        duration: 500,
      },
      delay,
    });

  const greetingProps = CreateAnimateTextProps();
  const roleProps = CreateAnimateTextProps(500);
  const paragraphProps = CreateAnimateTextProps(1000);

  const AnimateTypo = animated(Typography);

  return (
    <section id="home" className={classes.root}>
      <Typography component="h2" className={classes.hiddenTitle}>
        {t.introduction}
      </Typography>
      {smMediaQuery && <HeroBackground color="transparent" />}

      <Container>
        {smMediaQuery && (
          <Grid
            container
            spacing={2}
            justify="center"
            className={classes.profile}
          >
            <Grid item>
              <HeroBracket
                type="left"
                color={myTheme.palette.secondary.light}
              />
            </Grid>
            <Grid item>
              <ProfileImage src="/profile-picture.jpg" />
            </Grid>
            <Grid item>
              <HeroBracket
                type="right"
                color={myTheme.palette.secondary.light}
              />
            </Grid>
          </Grid>
        )}

        <div className={classes.wrapper}>
          <AnimateTypo
            variant="h5"
            variantMapping={{
              h5: 'h3',
            }}
            gutterBottom
            style={greetingProps}
          >
            <Typography variant="inherit" color="primary">
              {t.greetings}
            </Typography>
            {t.introduction}
          </AnimateTypo>

          <AnimateTypo variant="h3" gutterBottom style={roleProps}>
            {t.role}
          </AnimateTypo>

          <AnimateTypo
            variant="subtitle1"
            variantMapping={{
              subtitle1: 'h3',
            }}
            color="textSecondary"
            style={paragraphProps}
          >
            {t.paragraph}
          </AnimateTypo>
        </div>

        <animated.div style={animateButtonProps}>
          <Grid container spacing={2} justify="center">
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
