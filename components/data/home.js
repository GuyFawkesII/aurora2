import { translations } from "./translation"

const language = process.env.NEXT_PUBLIC_LANGUAGE


export const splash = {
    image : {
        url : "https://cdn.aurorafast.co.uk/images/background.png"
    },
    header1 : "Unlock Limitless Entertainment: Your Ultimate IPTV Experience Starts Here!",
    description : "Discover IPTV excellence tailored to you. Elevate your TV experience with our customer-centric subscriptions. Limitless channels, unrivaled convenience, and unrivaled support. Welcome to the future of entertainment.",
	logo : "aurorafast tv"
}

//why are we the best 

// export const offer = {
//     prices : [
//         {
//             currency : "",
//             amount : "",
//             link : ""
//         },
//     ]
        
    
// }

// export const statistics = {
//     title: "",
//     dt: [
//       {
//         title: "Live Channels",
//         nb: 16000,
//         LearnMore: "Never miss your favorite shows or sports games with TV Aurorafast's extensive collection of TV channels. Be the first to watch new episodes.",
//         speed: 0.01,
//         step: 3,
//         icon: "/live.webp",
//       },
//       {
//         title: "Series & Movies",
//         nb: 103000,
//         LearnMore: "Discover diverse series and movies from global platforms, featuring fresh content across various countries.",
//         speed: 0.001,
//         step: 40,
//         icon: "/tv.webp",
//       },
//       {
//         title: "Happy Customers",
//         nb: 9200,
//         LearnMore:"We take pride in our vast clientele, with over 9000 delighted customers enjoying our exceptional services and support.",
//         speed: 0.2,
//         step: 1,
//         icon: "/satisfaction.webp",
//       },
//     ],
//     dt2: [
//       {
//         title:  "HD SPORTS",
//         LearnMore:  "Our customers enjoy the best viewing experience with high-resolution channels, including 1080p, 720p, and 480p options for maximum enjoyment.",
//         icon: '/hd.webp',
//       },
//       {
//         title:  "COMPATIBILITY",
//         LearnMore: "Android Box, Android Phone, Tablet, PC/Laptop, MAG, Smart TV, XBMC/KODI, iOS + Apple Devices & Many More!.",
//         icon: '/puzzle.webp',
//       },
//       {
//         title:  "SERVER STABILITY",
//         LearnMore:  "No more freezing, stuttering. Our IPTV Services are always ready with our powerful streaming servers.",
//         icon: "/fortess.webp",
//       },
//     ],
//   };
//image height and width must be the equal
export const reviews = [
    {
      url : "https://cdn.aurorafast.co.uk/images/review1.png"
    },
    {
      url : "https://cdn.aurorafast.co.uk/images/review2.png"
    },
    {
      url : "https://cdn.aurorafast.co.uk/images/review3.png"
    },
    {
      url : "https://cdn.aurorafast.co.uk/images/review4.png"
    }
  ]
  export const faq = [
    {
      id: 0,
      question: "How long does it take to get up and running?",
      answer:"After a purchase is made we will contact you by E-mail to set up your Device of choice, the full process takes a few minutes."
    },
    {
      id: 1,
      question: "How many devices would I be able to use with my subscription?",
      answer:  "You can use your details on as many devices as you like, but it only works on one screen at a time."
    },
    {
      id: 2,
      question:  "I want a multi-device subscription, is it possible?",
      answer: "Yes, that's possible, choose Multi Device under the payment options."
    },
    {
      id: 3,
      question: "I want to watch multi streams at once but on the same screen, is that possible?",
      answer: "Yes! Our native app gives you the option to multi-screen your streams of choice, please be aware that this option needs a faster internet and a powerful device."
    },
    {
      id: 4,
      question: "I want a free trial.",
      answer: "We offer a free 24h trial but only when they are available."
    },
    {
      id: 5,
      question: "I'm looking for a specific channel, event, or a network from a country/region.",
      answer: "Please contact us to see if that's available."
    },
  ];
  
  export const para = [
    {
      title: translations[language].para_titles.t0 || 'AURORA FAST IPTV',
      paragraph: translations[language].para_paragraphs.p0 || 'The good news for you is that your wait is about to end because you have come to the right place. You may find many online IPTV service providers who claim to be the best but believe me most of them will disappoint you. Our IPTV service always thinks of the satisfaction of the customers and keeps pace with their needs.',
    },
    {
      title: translations[language].para_titles.t1 || 'Our Pricing Plans',
    },
    {
      title: translations[language].para_titles.t2 || 'WHY CHOOSE US ?',
      content: [
        {
          title: translations[language].para_content_titles.t0 || 'who we are',
          paragraph: translations[language].para_paragraphs.p1 || 'The Number 1 IPTV Provider, We Offer The Most Affordable Prices Plans On All Your Devices Enjoy Now in 4K/Ultra HD Quality Streaming with Anti-Freeze technology, No more buffering All Devices are Supported. Catch Up / EPG For All UK. 4K / Ultra HD /HD Picture.',
        },
        {
          title: translations[language].para_content_titles.t1 || '20 Times faster with Anti-Freeze™ 8.1',
          paragraph: translations[language].para_paragraphs.p2 || 'Our Servers are the best in the UK Market and this is due to different reasons, our servers are located in all major offshore to let you enjoy the fastest response time possible and finally we provide the best customer data protection ever. “Your IP and Personal information will never be saved or shared with someone else.',
        },
      ],
    },
    {
      title: translations[language].para_titles.t3 || 'OUR CLIENTS LOVE US',
      t: translations[language].para_t || 'See the Full List of Questions.',
    },
    {
      title: translations[language].para_titles.t4 || 'NEED ANY HELP ?',
    },
    {
      title: translations[language].para_titles.t5 || 'Ready to subscribe to ... ?',
      buttons: [
        {
          name: translations[language].para_button_names.b0 || 'View Pricing Plans',
        },
        {
          name: translations[language].para_button_names.b1 || 'Contact Us',
        },
      ],
    },
  ];
  


