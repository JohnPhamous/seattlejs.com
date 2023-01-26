export async function get() {
  return {
    json: talks
  }
}

export const talks = [
  {
    id: 'amber-hoak-may-2022',
    speaker_id: 'amber-hoak',
    event_id: 'may-2022',
    title:
      'Stumbling through ML in JavaScript: the good, the bad, and the computationally intensive',
    abstract:
      "Does Tensorflow make you tense? Let's unpack how you can get started with ML in the browser, no math required. Learn how to build models on the browser, why we would use client-side ML, and what ML tooling (and lack of tooling) is in the js ecosystem."
  },
  {
    id: 'jamund-ferguson-june-2022',
    speaker_id: 'jamund-ferguson',
    event_id: 'june-2022',
    title: '🧟 Web Performance Horror Stories🧛',
    abstract:
      "Experience the cringe inducing horror caused by excessively slow web performance. Be shocked to hear about megabytes of CSS going unused, endlessly duplicated polyfills, input fields freezing the main thread for 50ms per keystroke and assorted other terrors. Together we'll dissect these performance poltergeists and vanquish them from our apps forever."
  },
  {
    id: 'rachel-lee-nabors-october-2022',
    speaker_id: 'rachel-lee-nabors',
    event_id: 'october-2022',
    title: 'The Human API',
    abstract:
      "The only thing harder than writing scalable, usable code is teaching others how to wield it. As the sum of human knowledge continues to grow, so too do the challenges of teaching each other what we need to know not only to build toward the future but also to contribute to the tools of its construction. If only it were possible to transfer knowledge from one engineer directly into the minds of other engineers, like a human RAID! Rachel Lee Nabors loves building such mechanisms for knowledge transfer, from video guides to documentation to curricula. In this talk, they will discuss what doesn't work, what has worked on projects like React and React Native, and what can work for any other open source project today. Teaching is hard. But there are solid ways to approach knowledge transfer at scale."
  },
  {
    id: 'matthew-bauer-november-2022',
    speaker_id: 'matthew-bauer',
    event_id: 'november-2022',
    title:
      'Two left feet and an earthquake in Vue: Composition API or Options API?',
    abstract:
      'Vue 3 is controversial. There were many people drawn to vue 2 and not all of them are able to find footing inside Vue 3, despite that being the main version pushed forward. With that being said Evan and the team at Vue have decided to include the options API & composition API as both valid approaches to writing vue applications, but what does that mean for the average user or the user at the end of the bell curve?'
  },
  {
    id: 'brian-gershon-november-2022',
    speaker_id: 'brian-gershon',
    event_id: 'november-2022',
    title: 'Tales of a Transition to Tailwind CSS',
    abstract:
      "After some doubts, I gave Tailwind CSS a try and discovered a new love for styling my web applications. I'll discuss some reasons you'll like it, and also introduce component frameworks built on Tailwind."
  },
  {
    id: 'calvin-kipperman-january-2023',
    speaker_id: 'calvin-kipperman',
    event_id: 'january-2023',
    title: 'React Is Holding Me Hostage',
    abstract:
      "A love &amp; horror story - why React isn't a good model for building interactive applications and why I'm still a React developer."
  },
  {
    id: 'tim-obrien-january-2023',
    speaker_id: 'tim-obrien',
    event_id: 'january-2023',
    title: 'Were Your Skis Cut with Javascript?',
    type: 'lightning',
    abstract:
      "Just a quick snapshot of how you can use React and Express and Javascript to manufacture skis.   What are the pros and cons of using Javascript to generate CNC files and what's worked and not worked?  Looking to show a quick demo and also looking for people interested in contributing."
  },
  {
    id: 'josh-scotland-january-2023',
    speaker_id: 'josh-scotland',
    event_id: 'january-2023',
    title: 'Supercharge Your Coding With ChatGPT',
    type: 'lightning',
    abstract:
      "Learn how to use ChatGPT, a powerful AI programming tool, to enhance your coding skills and boost your productivity. In this demo, we'll explore the capabilities and limitations of ChatGPT to see firsthand how it might revolutionize your workflow."
  },
  {
    id: 'brian-tran-february-2023',
    speaker_id: 'brian-tran',
    event_id: 'february-2023',
    title: 'I want my data and I want it now!',
    type: 'lightning',
    abstract:
      'A quick talk about stream processing using NodeJS and some other use cases including displaying the data in real-time over WebSockets and React.'
  },
  {
    id: 'lupe-canaviri-maydana-februrary-2023',
    speaker_id: 'lupe-canaviri-maydana',
    event_id: 'february-2023',
    title: 'Playwright, everyone can write test',
    type: 'lightning',
    abstract:
      'In 5 mins I will show you how to create your first end to end test with Playwright'
  },
  {
    id: 'lauro-silva-february-2023',
    speaker_id: 'lauro-silva',
    event_id: 'february-2023',
    title: 'Model resources, not layouts',
    type: 'lightning',
    abstract:
      'My biggest takeaway from designing and contributing to educational products (https://egghead.io, https://www.totaltypescript.com, https://www.escuelafrontend.com, https://www.protailwind.com) is that you can build a bespoke, contextual, robust, lovely content-authoring experience by modeling resources, not layouts.\n\nYou want to design flexible content that can withstand heavy changes to design and presentation from the start. Data should work in different contexts across your application, so you should avoid layout concerns in the content modeling phase. The data describes what, not where the content will ultimately be displayed.'
  },
  {
    id: 'jacob-ebey-february-2023',
    speaker_id: 'jacob-ebey',
    event_id: 'february-2023',
    title: '"Promises" over the wire',
    abstract:
      'Learn how Remix\'s `defer()` feature utilizes native language features, a single HTTP request and a few react tricks to deliver, what I believe will be, the next big trend in "full stack frameworks".'
  }
]
