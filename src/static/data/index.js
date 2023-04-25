import tictactoe1 from '../img/project/tic-tac-toe/1.png';
import tictactoe2 from '../img/project/tic-tac-toe/1.png';
import tictactoe3 from '../img/project/tic-tac-toe/1.png';

import chatapp1 from '../img/project/chatapp/1.png';
import chatapp2 from '../img/project/chatapp/1.png';
import chatapp3 from '../img/project/chatapp/1.png';
import chatapp4 from '../img/project/chatapp/1.png';

import tevily1 from '../img/project/tevily/1.png';
import tevily2 from '../img/project/tevily/1.png';
import tevily3 from '../img/project/tevily/1.png';
import tevily4 from '../img/project/tevily/1.png';

import portfolio1 from '../img/project/portfolio/1.png';
import portfolio2 from '../img/project/portfolio/1.png';
import portfolio3 from '../img/project/portfolio/1.png';
import portfolio4 from '../img/project/portfolio/1.png';

import hotelbooking1 from '../img/project/bookinghotel/1.png';
import hotelbooking2 from '../img/project/bookinghotel/2.png';
import hotelbooking3 from '../img/project/bookinghotel/3.png';
import hotelbooking4 from '../img/project/bookinghotel/4.png';
import hotelbooking5 from '../img/project/bookinghotel/5.png';
import hotelbooking6 from '../img/project/bookinghotel/6.png';

export const projects = [
  {
    name: 'tic tac toe',
    images: [tictactoe1, tictactoe2, tictactoe3],
    desc: 'A small project was created during the first year of studying at Ton Duc Thang University. This tic tac toe project was a major assignment to join the ICON club of the computer science department.',
    created: 'Feb 19, 2021',
    role: 'FE Developer',
    frontend: ['HTML', 'CSS', 'JS'],
    backend: null,
    tags: ['html', 'css', 'js', 'game', 'web design'],
    demo: 'https://tic-tac-toe-icon-test.vercel.app/',
    source: 'https://github.com/DangTinh422003/TicTacToe_IconTest',
  },
  {
    name: 'chat app real time',
    images: [chatapp1, chatapp2, chatapp3, chatapp4],
    desc: 'The midterm assignment for the NodeJs course involved using the socket.io library and the expressjs framework, along with the handlebars view engine, to build a real-time chat application.',
    created: 'Mar 22, 2023',
    role: 'FE + BE Developer',
    frontend: ['HTML', 'CSS', 'JS', 'SCSS', 'Handlebars', 'Bootstrap'],
    backend: [
      'NodeJS',
      'ExpressJS',
      'Socket.io',
      'MongoDB',
      'Mongoose',
      'Hanlebars',
    ],
    tags: [
      'html',
      'css',
      'js',
      'scss',
      'handlebars',
      'bootstrap',
      'nodejs',
      'expressjs',
      'socket.io',
      'mongodb',
      'mongoose',
      'web design',
    ],
    demo: null,
    source: 'https://github.com/DangTinh422003/chat-app-socket.io',
  },
  {
    name: 'Tevily Travel',
    images: [tevily1, tevily2, tevily3, tevily4],
    desc: 'The first ReactJS project that was both studied and worked on was a midterm assignment on the topic of Single-Page-Application in the Basic Web Programming course.',
    created: 'Nov 21, 2022',
    role: 'FE Developer',
    frontend: ['React', 'SCSS'],
    backend: null,
    tags: [
      'html',
      'css',
      'js',
      'jquery',
      'bootstrap',
      'react',
      'scss',
      'ui/ux',
      'responsive',
      'animation',
      'web design',
    ],
    demo: 'https://react-travel-spa.vercel.app/',
    source: 'https://github.com/DangTinh422003/ReactTravel_SPA',
  },
  {
    name: 'my portfolio',
    images: [portfolio1, portfolio2, portfolio3, portfolio4],
    desc: 'Project description of personal information, including skills and programming languages. Experiences and jobs during the time as a student, including information about other personal projects. Finally, include contact information.',
    created: 'Apr 19, 2023',
    role: 'FE Developer',
    frontend: ['React', 'SCSS'],
    backend: null,
    tags: [
      'react',
      'scss',
      'ui/ux',
      'responsive',
      'animation',
      'portfolio',
      'web design',
    ],
    demo: 'https://portfolio-bay-one-82.vercel.app/',
    source: 'https://github.com/DangTinh422003/portfolio',
  },
  {
    name: 'booking hotel',
    images: [
      hotelbooking1,
      hotelbooking2,
      hotelbooking3,
      hotelbooking4,
      hotelbooking5,
      hotelbooking6,
    ],
    desc: 'The final assignment for the NodeJS course was a group project on the topic of a hotel booking system and an admin website for managing the hotel with a focus on server-side rendering.',
    created: '15 Feb, 2023',
    role: 'FE + BE Developer',
    frontend: ['HTML', 'CSS', 'JS', 'SCSS', 'Handlebars', 'Bootstrap'],
    backend: ['NodeJS', 'ExpressJS', 'MongoDB', 'Hanlebars', 'PassportJS'],
    tags: [
      'html',
      'css',
      'js',
      'jquery',
      'bootstrap',
      'nodejs',
      'expressjs',
      'mongodb',
      'handlebars',
      'passportjs',
      'web design',
    ],
    demo: null,
    source: 'https://github.com/DangTinh422003/Booking-hotel',
  },
];