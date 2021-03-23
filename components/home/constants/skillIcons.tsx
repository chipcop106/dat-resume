import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiGit,
  SiNodeDotJs,
  SiReact,
  SiMongodb,
  SiJest,
  SiMaterialUi,
  SiBootstrap,
  SiNextDotJs,
  SiTypescript,
  SiWebpack,
  SiBabel,
  SiGulp,
} from 'react-icons/si';
import { BsLightning } from 'react-icons/bs';

const skillLogos = {
  framework: [
    {
      icon: <SiReact title="React" />,
      label: 'React',
    },
    {
      icon: <SiNextDotJs title="NextJS" />,
      label: 'NextJS',
    },
    {
      icon: <SiNodeDotJs title="Node" />,
      label: 'Node',
    },
    {
      icon: <SiMongodb title="MongoDB" />,
      label: 'MongoDB',
    },
    {
      icon: <BsLightning title="Chakra UI" />,
      label: 'Chakra UI',
    },
    {
      icon: <SiMaterialUi title="Material UI" />,
      label: 'Material UI',
    },
    {
      icon: <SiBootstrap title="Bootstrap" />,
      label: 'Bootstrap',
    },
    {
      icon: <SiJest title="Jest" />,
      label: 'Jest',
    },
  ],
  languages: [
    {
      icon: <SiHtml5 title="Html5" />,
      label: 'Html5',
    },
    {
      icon: <SiCss3 title="CSS3" />,
      label: 'CSS3',
    },
    {
      icon: <SiJavascript title="JavaScript" />,
      label: 'JavaScript',
    },
    {
      icon: <SiTypescript title="TypeScript" />,
      label: 'TypeScript',
    },
  ],
  tools: [
    {
      icon: <SiSass title="SASS" />,
      label: 'SASS',
    },
    {
      icon: <SiGit title="Git" />,
      label: 'Git',
    },
    {
      icon: <SiWebpack title="Webpack" />,
      label: 'Webpack',
    },
    {
      icon: <SiGulp title="Gulp" />,
      label: 'Gulp',
    },
    {
      icon: <SiBabel title="Babel" />,
      label: 'Babel',
    },
  ],
};

export default skillLogos;
