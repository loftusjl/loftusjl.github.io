const portfolio = [
  {
    name: 'JobPiper',
    image: './assets/images/boardroom.jpg',
    description: `
      <p>
        JobPiper is a (MERN) full-stack web application built to make the job search process simple and easy to do.
      </p>
      <h3>Features</h3>
      <ul>
      <li>Google authentication</li>
      <li>Google Calendar Integration with drag-and-drop functionality</li>
      <li>Account based saved jobs listing along with notes and the ability to quickly add a job to your personal calendar</li>
      <li>Web scraping of Dice.com and yCombinator based on location selected</li>
      <li>Fuzzy search logic to allow for multiple search terms and spellings within a single search</li>
      <li>Job search oragainzer with the abiltiy to update status on jobs you've applied, interviewed for, etc...</li>
      </ul>`,
    technologies:
      'MongoDB, Express, React, NodeJS, Material UI, Google Authentication, Firebase, Cheerio.js, Fuse.js, Axios',
    live: 'https://job-piper.herokuapp.com/',
    github: 'https://github.com/ScriptKiddie1337/JobPiper.io',
    types: ['fullStack']
  },
  {
    name: 'Dynamite Kitchen Supplier',
    image: './assets/images/dk.jpg',
    description: `<p>
        Dynamite Kitchen Supplier (DkS) is a full-stack web-app that will allow for role based users to input orders for purchase using a restaurant kitchen as its model. Users will need to login or create a new user which will be stored in the database. <br /><br /> 
        Demo Login Username: supervisor, Password: password
      </p>
      <h3>Features</h3>
      <ul>
        <li>Seperation of roles each with their own set of privileges and access.</li>
        <li>Under PAR list. Displays only ingredients under the PAR (minimum quantity on hand) and allows adding directly to next order.</li>
        <li>Employee role is limited to requesting restock of items</li>
        <li>Supervisor role gives additional capabilties such as adjusting requested quantities and placing actual orders</li>
        <li>Requests are user and date stamped to allow supervisor a view of who is requesting and/or adjusting requirements.</li>
        <li>Historical order listing which shows the date ordered along with all requests associated with the order.</li>
      </ul>
      `,
    technologies:
      'Javascript, NodeJS, Express, MaterializeCSS, jQuery, PassportJS',
    live: 'https://serene-forest-68972.herokuapp.com/',
    github: 'https://github.com/loftusjl/Dynamite-Kitchen-Supplier',
    types: ['fullStack']
  },
  {
    name: 'Crystal Lazor Gunship!',
    image: './assets/images/crystalGame.png',
    description:
      'Each game your crystals receive a random value. Click a crystal and try to remember the value. Each click adds to your score. Try to hit the target score without going over!',
    technologies: 'JavaScript, jQuery, Bootstrap',
    live: 'https://loftusjl.github.io/Crystal-Lazor-Gunship/',
    github: 'https://github.com/loftusjl/Crystal-Lazor-Gunship',
    types: ['frontEnd']
  },
  // {
  //   name: 'Burger Bonzai',
  //   image: './assets/images/burgerBonzai.PNG',
  //   description:
  //     'Burger Bonzai is a full-stack web-app using MySQL, Node, Express, Handlebars and a homemade ORM.',
  //   technologies: '',
  //   live: 'https://enigmatic-lowlands-17209.herokuapp.com/',
  //   github: 'https://github.com/loftusjl/burger',
  //   types: ['fullStack']
  // },
  {
    name: 'Friend Finder',
    image: './assets/images/friendfinder.jpg',
    description:
      'Friend Finder is a full-stack web-app that will compare your survey results with those of 200 users and return the name and profile pic of the people who match your responses most closely!',
    technologies: 'JavaScript, NodeJS, Express, MaterializeCSS, jQuery',
    live: 'https://frozen-river-95808.herokuapp.com/',
    github: 'https://github.com/loftusjl/FriendFinder',
    types: ['fullStack']
  },
  {
    name: 'Bamazon Node App',
    image: './assets/images/bamazonButton.PNG',
    description:
      "An Amazon-like storefront using MySQL, NodeJS, and Javascript. The app takes in orders from customers and depletes stock from the store's inventory. It will also track product sales across store departments and then provide a summary of the highest-grossing departments in the store along with various other functions.",
    technologies: 'JavaScript, NodeJS, MySQL',
    live: '',
    github: 'https://github.com/loftusjl/bamazon',
    types: ['backEnd']
  },
  // {
  //   name: 'The Destinator',
  //   image: './assets/images/travelMap01.jpg',
  //   description:
  //     'A destination search site filtered by country and then desired city. The Destinator gives you a 5 day forecast, highest ranked hotels, restaurants, and points of interest in the surrounding area.',
  //   technologies: '',
  //   live: 'https://loftusjl.github.io/TheDestinator/',
  //   github: 'https://github.com/loftusjl/TheDestinator',
  //   types: ['fullStack']
  // },
  // {
  //   name: 'LIRI Node App',
  //   image: './assets/images/CLI.png',
  //   description:
  //     'A NodeJS command line tool for pulling tweets or movie and song info.',
  //   technologies: '',
  //   live: '',
  //   github: 'https://github.com/loftusjl/liri-node-app',
  //   types: ['backEnd']
  // },

  {
    name: 'Horror Hangman',
    image: './assets/images/hangmanChucky.jpg',
    description:
      'This site is a demonstration of capturing user keystrokes. A keyboard will be required to utilize the site functionality. Try to guess the villain in this horror movie take on the classic game hangman!',
    technologies: 'JavaScript, jQuery, Bootstrap',
    live: 'https://loftusjl.github.io/WordGuessGame/',
    github: 'https://github.com/loftusjl/WordGuessGame',
    types: ['frontEnd']
  },
  {
    name: 'HIPAA Quiz',
    image: './assets/images/HIPAA.png',
    description:
      'In this site I created a looped JavaScript function which the questions reside in. Once started, the quiz will give only so much time to answer each question. Once answered, it will highlight the correct question and any incorrect responses given. It is presented as a HIPAA training quiz which provides a knowledge check for HIPAA training. Questions are randomized and you must score 70% or greater to pass.',
    technologies: 'JavaScript, jQuery, Bootstrap',
    live: 'https://loftusjl.github.io/TriviaGame/',
    github: 'https://github.com/loftusjl/TriviaGame',
    types: ['frontEnd']
  }
  // {
  //   name: 'Giphy Topics',
  //   image: './assets/images/giphyGuy.png',
  //   description:
  //     'A Giphy image grabber using the Giphy API. Grab images from the site and display them in thumbnail sized images based on pre-selected topics or topics you enter. Images will toggle animation on click. **Warning: This site is loud**',
  //   technologies: '',
  //   live: 'https://loftusjl.github.io/GiphySearch/',
  //   github: 'https://github.com/loftusjl/GiphySearch',
  //   types: ['frontEnd']
  // },
  // {
  //   name: 'Train Schedule',
  //   image: './assets/images/trainSchedule.jpg',
  //   description:
  //     'Enter your trains with the Train Name, Destination, First Train Time (in military time), and Frequency -- in minutes. The scheduler will keep track of when the trains are due to arrive and alert you about which should be showing up next in relative time.',
  //   technologies: '',
  //   live: 'https://loftusjl.github.io/TrainSchedule',
  //   github: 'https://github.com/loftusjl/TrainSchedule',
  //   types: ['frontEnd']
  // }
];
// add projects to portfolio section
document.addEventListener('DOMContentLoaded', function() {
  let styles = `
      .pCard {
        border: 5px solid ${
          document.getElementById('orange').style.backgroundColor
        };
      }
      `;
  addProjects(portfolio, styles);
  clickExpand();
  var p0 = document.getElementById('p0');
  p0.dataset.clicked = '1';
  p0.style = `max-height: 1000px;`;
});

function addProjects(data, styles) {
  const projects = document.getElementById('orange-content');
  data.forEach((el, index) => {
    const newProject = document.createElement('article');
    newProject.className = 'pCard shadow-inset';
    newProject.id = `p${index}`;
    newProject.style = `max-height:150px;`;
    index === 0
      ? (newProject.dataset.clicked = '1')
      : (newProject.dataset.clicked = '0');

    styles += `
        #p${index} .pHead::before {
            background-image: url('${el.image}');
        }
            `;

    let domString = `
            <div class="pHead textOverlay">
                <div class="pHead-text">
                    <h1 class="pHead-title">${el.name}</h1>
                    <h3 class="pHead-tech">${el.technologies}</h3>
                </div>
            </div>
            <div class="pDesc">
              ${el.description}
            </div>
            <div class="pActions">
            <div class="button-wrapper">
              <a class="button" href="${
                el.live
              }" target="_blank"><i class="fas fa-link"></i> Live Site</a><a class="button" href="${
      el.github
    }" target="_blank"><i class="fab fa-github-square fa-lg" aria-hidden="true"></i> GitHub</a>
              </div>
            </div>
        `;
    newProject.innerHTML = domString;
    projects.appendChild(newProject);
  });
  insertCSS(styles);
}
function clickExpand() {
  const pItems = document.getElementsByClassName('pCard');
  const pArray = Array.from(pItems);
  for (let p = 0; p < pItems.length; p++) {
    pItems[p].addEventListener('click', function() {
      if (pItems[p].dataset.clicked === '0') {
        setAttributes(pItems[p], {
          'data-clicked': '1'
        });
        anime({
          targets: pItems[p],
          maxHeight: '1000px', // -> from '150px' to '9000px',
          duration: 650,
          easing: 'easeInOutQuad'
        });
      }
      let toggles = pArray.filter(proj => proj != pArray[p]);
      for (t in toggles) {
        setAttributes(toggles[t], {
          'data-clicked': '0'
        });
        anime({
          targets: toggles[t],
          duration: 450,
          maxHeight: '150px', // -> from '150px' to '9000px',
          easing: 'easeInOutQuad'
        });
      }
    });
  }
}
function setAttributes(el, attr) {
  for (const key in attr) {
    el.setAttribute(key, attr[key]);
  }
}
function insertCSS(css) {
  // Create our stylesheet
  const style = document.createElement('style');
  style.innerHTML = css;

  // Get the first script tag
  const ref = document.querySelector('script');

  // Insert new styles before the first script tag
  ref.parentNode.insertBefore(style, ref);
}
