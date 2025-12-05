const initialPosts = [
  {
    id: '1',
    title: 'Getting Started with React',
    summary: 'Learn the basics of React and build your first application.',
    date: '2023-01-01T10:05:45-06:00',
    author: "Bushra Salama",
    content:
      `<p>So you wanna build a React App? <strong>You've come to the right place!</strong></p>
             <p>Eaque aperiam quia sit qui neque totam sunt?</p>
             <ul>
               <li>First step: Do some stuff!</li>
               <li>Second step: Do some more stuff!</li>
             </ul>
             <p>Ta-da! Now you have a new application!</p>`,
    comments: [
      {
        name: "Sally",
        text: "Great post!",
        date: '2025-02-12T10:05:45-06:00',
      },
      {
        name: "Dawud",
        text: "Super informative!",
        date: '2025-11-10T06:12:30-06:00',
      },
    ],
    url: '/post/1',
  },
  {
    id: '2',
    title: 'CSS Grid vs. Flexbox',
    summary: 'A comparison of two powerful layout systems in CSS.',
    author: "Bushra Salama",
    content:
      `<p>So you want a comparison of two powerful layout systems in CSS? <strong>You've come to the right place!</strong></p>
             <p>Eaque aperiam quia sit qui neque totam sunt?</p>
             <a href="https://dev.to/muskan-singh/css-flexbox-vs-gridbox-a-detailed-comparison-49c0" target="_blank">Here's the actually right place.</a>
             <p>I hope that helps you on your knowledge journey!</p>`,
    date: '2023-02-05T10:05:45-06:00',
    comments: [
      {
        name: "Hank",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a hendrerit tortor. Nunc nec sem a ipsum condimentum rutrum vitae nec dolor. Quisque ultricies nisl in tellus vehicula, non pellentesque erat sagittis. A feugiat magna a est cursus tincidunt sed sit amet lorem.",
        date: '2025-02-02T10:05:45-06:00',
      },
      {
        name: "Janice",
        text: "Learned something new.",
        date: '2024-10-10T10:05:45-06:00',
      },
    ],
    url: '/post/2',
  },

  {
    id: '3',
    title: 'Accessibility in Web Development',
    summary: 'Tips for making your web applications more accessible.',
    author: "Bushra Salama",
    content:
      `<p>So you wanna talk about accessibility in web development? <strong>You've come to the right place!</strong></p>
             <p>Eaque aperiam quia sit qui neque totam sunt?</p>
             <h2>Tips, Tricks and Resources:</h2>
             <ul>
               <li>Consider only yourself and your preferences. This will show everyone who is boss.</li>
               <li><a href="https://lingojam.com/PigLatinTranslator" target="_blank">isplayDay allyay exttay inyay igpay atinlay.</a></li>
               <li>Use only garish, headache-inducing colors. Low contrast between text and background is best.</li>
               <li><a href="https://thesillyweb.com/" target="_blank">Make sure all links only go to silly places.</a></li>
             </ul>
             <p>Behold this impressive work!</p>`,
    date: '2023-03-10T10:05:45-06:00',
    comments: [
      {
        name: "Noor",
        text: "Noor was here!",
        date: '2025-01-06T10:05:45-06:00'
      },
    ],
    url: '/post/3',
  },
]

export default initialPosts
