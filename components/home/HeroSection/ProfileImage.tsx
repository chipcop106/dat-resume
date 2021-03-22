import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

interface ImageProps {
  src: string;
}

const useStyles = makeStyles((theme) => ({
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%'
  },
}));

const ProfileImage: FC<ImageProps> = ({ src }) => {
  const classes = useStyles();

  return (
    <div className="column profile">
      <figure className={classes.image}>
        <img src={src} alt="profile" className={classes.img} />
      </figure>
      <style jsx>{`
        .profile {
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
        figure {
          cursor: pointer;
          margin: 0 auto;
          width: 300px;
          height: 300px;
        }
        @media screen and (max-width: 769px) {
          figure {
            width: 250px;
            height: 250px;
          }
        }
        img {
          -webkit-transition: -webkit-transform 1s ease-in-out;
          transition: transform 1s ease-in-out;
          -webkit-animation: flip 1s;
          animation: flip 1s;
        }
        img:hover {
          -webkit-transform: rotateY(360deg);
          transform: rotateY(360deg);
        }
        @-webkit-keyframes flip {
          from {
            transform: rotateY(360deg) scale(0);
          }
          to {
            transform: rotateY(0deg) scale(1);
          }
        }
        @keyframes flip {
          from {
            transform: rotateY(360deg) scale(0);
          }
          to {
            transform: rotateY(0deg) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default ProfileImage;
