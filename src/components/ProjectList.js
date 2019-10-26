import React from 'react';
const projectList = [
  {
    name: 'Bookmarker 9000',
    description: (
      <p>
        This app was constructed using an API. Users can input title, rating,
        description, and URL. Inputs will be used to construct a list. Users can
        also filter by selecting a minimum rating, edit rating and description,
        and click on the title to be directed to the site.
      </p>
    ),
    stack: (
      <div>
        <i className='devicon-html5-plain colored'></i>
        <i className='devicon-css3-plain colored'></i>
        <i className='devicon-javascript-plain colored'></i>
        <i className='devicon-jquery-plain colored'></i>
      </div>
    ),
    imageLink: './images/bookmarker.png',
    liveSite: 'https://thinkful-ei-heron.github.io/julio-bookmark-v2/',
    codeURL: 'https://github.com/thinkful-ei-heron/julio-bookmark-v2',
  },
  {
    name: 'The Office Quiz',
    description: (
      <p>
        This app is a short run quiz that tests your knowledge on the show The
        Office. It was built to learn app architecture and accessing variables
        within the root directory. Made with a partner :{' '}
        <a
          href='https://github.com/wjacobs71086'
          target='_blank'
          rel='noopener noreferrer'
        >
          Wesley Jacobs
        </a>
        .
      </p>
    ),
    stack: (
      <div>
        <i className='devicon-html5-plain colored'></i>
        <i className='devicon-css3-plain colored'></i>
        <i className='devicon-javascript-plain colored'></i>
        <i className='devicon-jquery-plain colored'></i>
      </div>
    ),
    imageLink: './images/The Office Quiz.png',
    liveSite: 'https://thinkful-ei-heron.github.io/q-app-julio-wesley/',
    codeURL: 'https://github.com/thinkful-ei-heron/q-app-julio-wesley',
  },
];
export default projectList;
