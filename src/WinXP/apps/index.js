import InternetExplorer from './InternetExplorer';
import Minesweeper from './Minesweeper';
import ErrorBox from './ErrorBox';
import MyComputer from './MyComputer';
import Notepad from './Notepad';
import Winamp from './Winamp';
import Paint from './Paint';
import iePaper from 'assets/windowsIcons/ie-paper.png';
import ie from 'assets/windowsIcons/ie.png';
import mine from 'assets/minesweeper/mine-icon.png';
import error from 'assets/windowsIcons/897(16x16).png';
import computer from 'assets/windowsIcons/676(16x16).png';
import computerLarge from 'assets/windowsIcons/676(32x32).png';
import notepad from 'assets/windowsIcons/327(16x16).png';
import notepadLarge from 'assets/windowsIcons/327(32x32).png';
import winamp from 'assets/windowsIcons/winamp.png';
import paintLarge from 'assets/windowsIcons/680(32x32).png';
import paint from 'assets/windowsIcons/680(16x16).png';
import recycleBin from 'assets/windowsIcons/recycling_bin.webp';
import myedenfocus from 'components/Google/myedenfocus.png';
import ragionare from 'components/Google/ragionare.png';
import googlePlay from 'components/Google/Google_Play.png';
import { resumeIcon, aboutIcon, githubIcon, linkedinIcon, workIcon } from 'components/Portfolio';

const gen = () => {
  let id = -1;
  return () => {
    id += 1;
    return id;
  };
};
const genId = gen();
const genIndex = gen();

const isMobileDevice = () => {
  const userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera;
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
};

export const defaultAppState = isMobileDevice() ? [
  {
    component: ErrorBox,
    header: {
      icon: error,
      title: 'Windows XP',
      buttons: ['close'],
      noFooterWindow: true,
    },
    defaultSize: {
      width: 380,
      height: 0,
    },
    defaultOffset: {
      x: window.innerWidth / 2 - 190,
      y: window.innerHeight / 2 - 60,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    id: genId(),
    zIndex: genIndex(),
    injectProps: {
      message: 'Please open this website on a desktop browser for the best experience.'
    }
  }
] : [
  {
    component: InternetExplorer,
    header: {
      title: 'Internet Explorer',
      icon: iePaper,
    },
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 300,
      y: 20,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    id: genId(),
    zIndex: genIndex(),
  },
  {
    component: MyComputer,
    header: {
      title: 'My Computer',
      icon: computer,
    },
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 820,
      y: 40,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    id: genId(),
    zIndex: genIndex(),
  },
];

export const defaultIconState = [
  {
    id: 0,
    icon: computerLarge,
    title: 'My Computer',
    component: MyComputer,
    isFocus: false,
  },
  {
    id: 1,
    icon: recycleBin,
    title: 'Recycle Bin',
    component: null,
    isFocus: false,
  },
  {
    id: 2,
    icon: ie,
    title: 'Internet Explorer',
    component: InternetExplorer,
    isFocus: false,
  },
  {
    id: 4,
    icon: notepadLarge,
    title: 'Notepad',
    component: Notepad,
    isFocus: false,
  },
  {
    id: 6,
    icon: paintLarge,
    title: 'Paint',
    component: Paint,
    isFocus: false,
  },
  {
    id: 13,
    icon: googlePlay,
    title: 'Google Play',
    isExternalLink: true,
    url: 'https://play.google.com/store/apps/dev?id=5026387568268103858',
    component: null,
    isFocus: false,
  },
  {
    id: 7,
    icon: myedenfocus,
    title: 'MyedenFocus',
    isExternalLink: true,
    url: 'https://myedenfocus.rf.gd/',
    component: null,
    isFocus: false,
  },
  {
    id: 8,
    icon: ragionare,
    title: 'Ragionare',
    isExternalLink: true,
    url: 'https://play.google.com/store/apps/details?id=com.gorai.ragionare',
    component: null,
    isFocus: false,
  },
  {
    id: 9,
    icon: resumeIcon,
    title: 'Resume',
    isExternalLink: true,
    component: InternetExplorer,
    isFocus: false,
    injectProps: {
      defaultUrl: '/subhajit-resume.pdf'
    }
  },
  {
    id: 10,
    icon: aboutIcon,
    title: 'About Me',
    isExternalLink: true,
    component: Notepad,
    isFocus: false,
    injectProps: {
      defaultText: "Hi, I'm Subhajit Gorai, and I'm a 3rd year student at Heritage Institute of Technology.\n\n\n" +
        "I have been passionate about tech since my childhood. I started building websites with PHP as back-end since the late 2016 and used free domains from Freenom.com paired with Cloudflare CDN to host them on shared hosting sites. Although, I have moved on to different tech stacks now, the experience that I've brought from the past by building stuff, remains consistent.\n\n\n" +
        "Why Windows XP themed portfolio?\n\n" +
        "I think differently from others and I try to be more creative. While others are busy in picking the ultra-flashy templates to build their portfolio websites, I decided to extend ShizukuIchi's work on winXP and add extra features & changes to it to make it look more like a portfolio. I have maintained the retro-styles, and also made the Internet Explorer browsable, so that it can browse through my links.\n" +
        "Windows XP was my favourite Windows Operating System in my childhood, this is one of the reasons of using of a such themed portfolio.\n\n\n" +
	      "My work on mobile development:\n\n" + 
        "I'm really into building mobile apps, and I love working with React Native and in Kotlin with Jetpack Compose. You can find my work - I developed Ragionare and MyedenFocus, which are out there on Google Play. I develop top-class apps and I've gotten pretty good at using most of the tools that React Native & Android Studio offer."
    }
  },
  {
    id: 11,
    icon: githubIcon,
    title: 'GitHub',
    isExternalLink: true,
    url: 'https://github.com/sbhjt-gr',
    component: null,
    isFocus: false,
  },
  {
    id: 12,
    icon: linkedinIcon,
    title: 'LinkedIn',
    isExternalLink: true,
    url: 'https://www.linkedin.com/in/sbhjt-gr/',
    component: null,
    isFocus: false,
  },
  {
    id: 14,
    icon: workIcon,
    title: 'My Work',
    isExternalLink: true,
    component: InternetExplorer,
    isFocus: false,
    injectProps: {
      defaultUrl: '/work.html'
    }
  }
];

export const appSettings = {
  'Internet Explorer': {
    header: {
      icon: iePaper,
      title: 'InternetExplorer',
    },
    component: InternetExplorer,
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 140,
      y: 30,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  Minesweeper: {
    header: {
      icon: mine,
      title: 'Minesweeper',
    },
    component: Minesweeper,
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 190,
      y: 180,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
  Error: {
    header: {
      icon: error,
      title: 'C:\\',
      buttons: ['close'],
      noFooterWindow: true,
    },
    component: ErrorBox,
    defaultSize: {
      width: 380,
      height: 0,
    },
    defaultOffset: {
      x: window.innerWidth / 2 - 190,
      y: window.innerHeight / 2 - 60,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
  'My Computer': {
    header: {
      icon: computer,
      title: 'My Computer',
    },
    component: MyComputer,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 260,
      y: 50,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: false,
  },
  Notepad: {
    header: {
      icon: notepad,
      title: 'Untitled - Notepad',
    },
    component: Notepad,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 270,
      y: 60,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  Winamp: {
    header: {
      icon: winamp,
      title: 'Winamp',
      invisible: true,
    },
    component: Winamp,
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 0,
      y: 0,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: false,
  },
  Paint: {
    header: {
      icon: paint,
      title: 'Untitled - Paint',
    },
    component: Paint,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 280,
      y: 70,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
};

export { InternetExplorer, Minesweeper, ErrorBox, MyComputer, Notepad, Winamp };
