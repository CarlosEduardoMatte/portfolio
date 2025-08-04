import {
  bold,
  italic,
  link,
  strong,
  small,
  quote,
  styled,
} from "../lib/helpers/html";
import { getAdobeLinkStyle } from "../lib/helpers/style";

export const english = {
  meta: {
    name: "English",
    locale: "en",
    code: "en-US",

    routes: {
      archive: "archive",
    },

    title: "Carlos E. Matte | Full-stack Developer",
    description: `
      Hello! I'm Carlos E. Matte, a Full-stack developer specialized in web development. Skilled in both backend and frontend. Fluent in Catalan, Spanish, and English.
    `,

    ogAlt:
      "Hello! I'm Carlos E. Matte, Full-stack Developer - An image with a dark gradient background and an avatar.",
  },

  misc: {
    scrollToTop: "Scroll To Top",
    language: "Language",
    loveIconSr: "Love",
    newTab: "Opens in a new tab",
    linkTo: "Link to",
  },

  socials: {
    github: "GitHub",
    linkedIn: "LinkedIn",
    xTwitter: "X (Twitter)",
    resume: "Resume",
    email: "Email",
    bento: "Bento",
    discord: "Discord",
    threads: "Threads",
    emailAddress: "carloseduardomatte656@gmail.com",
  },

  pages: {
    notfound: {
      meta: {
        title: "404: Page Not Found - Carlos E. Matte | Full-stack Developer",
        description: "The page you're looking for doesn't exist.",
      },

      headline: "Oops! It seems you're lost.",
      text: "The page you're looking for doesn't exist.",
      back: "Back to the main page",
      label: "Main Page",
    },

    archive: {
      meta: {
        title: "Carlos E. Matte | Archive",
        description: "A list with the most noteworthy projects I've worked on.",
      },

      heading: "Projects Archive",
      headline:
        "Here is listed all the stuff I've worked on that I consider to be worth mentioning.",

      whatAreShowcasesLg: `${quote(strong("Showcase"))} are projects that aren't live, but can be downloaded and tested.`,
      whatAreShowcasesSm: `Links prefixed with ${quote("*")} are ${strong("showcases")} (projects that aren't live, but can be downloaded and tested).`,

      homepageLinkLabel: "Homepage",
      homepageLinkText: "Go back",

      table: {
        headers: {
          year: "Year",
          project: "Project",
          description: "Description",
          builtWith: "Built with",
          links: "Links",
        },

        showcaseLink: "Showcase",
        codeLink: "Code",
        liveLink: "Live",
      },
    },
  },

  noscript: {
    headline: `Oops! It seems that ${strong("JavaScript")} is disabled in your browser.`,
    message: `This site ${strong("requires it")} for some content ${strong("to be displayed correctly")}.
      Please enable it or dismiss this message by clicking the button below, but some elements may not be shown as expected.`,

    dismissText: "I understand, show me the website",
    hint: small(
      "In case you're wondering, no, this button does not use JavaScript.",
    ),
  },

  skills: {
    "teamwork": "Teamwork",
    "analytical-thinking": "Analytical Thinking",
    "communication": "Communication",
  },

  sections: {
    hero: {
      headline: {
        content: `I'm a ${strong("Full-stack")} developer.`,
      },

      greeting: "Hello! I'm Carlos E. Matte",
      introduction: `
        Specialized in web development. With
        ${bold("over 6&nbsp;years of coding experience")}, I am currently seeking to leverage my
        ${strong("over 4&nbsp;years of professional experience")} to transition into ${bold("backend development")}.
      `,

      introductionEmployed: `
        Specialized in web development. Currently
        working at ${link("https://adobe.com", strong(styled("Mave Tecnologia", getAdobeLinkStyle())))} as a ${strong("Junior Full-stack Developer")}, a position
        I started in February 2024.
      `,

      statusLabel: "Available for work",
    },

    experience: {
      name: "Experience",
      id: "experience",
      title: "Where I've worked",

      jobs: {
        codelearn: {
          title: "Full-stack Developer - Intern",
          location: "Brazil, Rio Grande do Sul",
          at: "Prefeitura de Novo Hamburgo",

          description: [
            `${quote("Great teams build great projects.")}`,

            `I had the opportunity to work with an ${strong("amazing multidisciplinary team")}, composed of ${bold("UI/UX designers")}, test analysts,
            senior developers, and myself as a ${strong("full stack developer")}. I actively contributed to projects with direct impact on the community,
            such as the ${strong("official city portal")}, the ${strong("tourism portal")}, and other public applications.`,

            `Throughout this experience, I ${bold("continuously improved")} both my technical skills and my ${strong("soft skills")},
            such as ${strong("teamwork")}, ${strong("adaptability")}, ${strong("creativity")}, and ${strong("proactivity")}.`,
          ],
        },

        gilab: {
          title: "Full-stack Developer",
          location: "Brazil, Rio Grande do Sul",
          at: "Mave Tecnologia",

          description: [
            `I currently work as a ${strong("full stack web developer")} at ${strong("Mave")},
            where I contribute to the development of complete digital solutions,
            integrating ${bold("intuitive interfaces")} with ${bold("robust and efficient systems")}.`,

            `I have experience in all stages of the development cycle, always prioritizing
            ${strong("performance")}, ${strong("usability")}, and ${strong("scalability")} to ensure
            consistent and high-level experiences.`,

            `I've participated in ${bold("large-scale projects")}, including ${strong("sports platforms")}
            and ${strong("E-Commerce")}, which broadened my view on different
            ${bold("business models")} and their technical challenges.`,
          ],
        },
      },
    },

    projects: {
      name: "Projects",
      id: "projects",
      title: "Some of my favorite projects",

      buttonReveal: "What's next?",
      currentProject: "What am I currently working on?",
      seeMore: "See more of my projects in",
      archiveText: "the archive",

      sourceCode: "Source Code",
      liveDemo: "Try it out!",
      showcaseLink: "Showcase",

      sourceCodeLinkLabel: "GitHub repository for project",
      liveDemoLinkLabel: "Live demo for project",
      showcaseLinkLabel: "Showcase for project",

      archive: {
        "site-prefeitura-nh": {
          name: "Novo Hamburgo City Hall Website",
          headline:
            "🏛️ An institutional website for the City Hall of Novo Hamburgo.",

          description: [
            `This project was developed as part of my internship at the ${strong("Prefeitura de Novo Hamburgo")}, where I had the opportunity to work with an ${strong("amazing multidisciplinary team")}.`,

            `The site is an ${strong("institutional portal")} aimed at providing information about the city, its services, and events. It was designed to be ${strong("accessible")}, ${strong("intuitive")}, and ${strong("informative")}, meeting the needs of the local community.`,
          ],
        },

        "site-turismo-nh": {
          name: "Novo Hamburgo Tourism Website",
          headline: "🌍 A tourism website for the city of Novo Hamburgo.",

          description: [
            `This project was developed as part of my internship at the ${strong("Prefeitura de Novo Hamburgo")}, where I had the opportunity to work with an ${strong("amazing multidisciplinary team")}.`,

            `The site is a ${strong("tourism portal")} aimed at promoting the city as a tourist destination, highlighting its attractions, events, and culture. It was designed to be ${strong("accessible")}, ${strong("intuitive")}, and ${strong("informative")}, meeting the needs of visitors and locals alike.
          `,
          ],
        },

        "site-iptu-nh": {
          name: "Novo Hamburgo IPTU Website",
          headline: "🏠 Informative website about IPTU in Novo Hamburgo.",

          description: [
            `This project was developed as part of my internship at the ${strong("Prefeitura de Novo Hamburgo")}, where I had the opportunity to work with an ${strong("amazing multidisciplinary team")}.`,

            `The site is an ${strong("informative portal")} about IPTU (Urban Property and Land Tax) of Novo Hamburgo, providing information on how to pay, check debts, and access related services. It was designed to be ${strong("accessible")}, ${strong("intuitive")}, and ${strong("informative")}, meeting the needs of citizens.`,
          ],
        },

        "site-outubro-rosa": {
          name: "Pink October",
          headline: "🎗️ A breast cancer awareness website.",
          description:
            "This project was developed to promote breast cancer awareness during October, highlighting the importance of early detection and support for those affected by the disease.",
        },

        "site-novebro-azul": {
          name: "Blue November",
          headline: "💙 A prostate cancer awareness website.",
          description:
            "This project was developed to promote prostate cancer awareness during November, highlighting the importance of early detection and support for those affected by the disease.",
        },

        "site-time-futebol": {
          name: "Soccer Team Website",
          headline: "⚽ A website for a local soccer team.",
          description:
            "I assisted and supported the development of a website for a local soccer team, aiming to promote the team and its activities.",
        },
        "site-time-volei": {
          name: "Volleyball Team Website",
          headline: "🏐 A website for a local volleyball team.",
          description:
            "I assisted and supported the development of a website for a local volleyball team, aiming to promote the team and its activities.",
        },
        "site-ecommecer-acessorios": {
          name: "Accessories E-commerce",
          headline: "🛒 An e-commerce website for an accessories store.",
          description:
            "I assisted and supported the development of an e-commerce website for an accessories store, aiming to promote products and facilitate online shopping.",
        },
        "site-ecommecer-roupas-esportivas": {
          name: "Sportswear E-commerce",
          headline: "👗 An e-commerce website for sportswear",
          description:
            "I assisted and supported the development of an e-commerce website for sportswear, aiming to promote products and facilitate online shopping.",
        },
      },

      next: {
        name: "Use Link",
        headline: "🔗 A self-hostable URL shortener and file sharing service.",
        description: [
          `Although I usually work on several things at once, this is currently my next focus.
          I want to develop it as a complete service with a ${strong("modular architecture")}
          that allows for ${bold("easy integration")} with various cloud providers, databases,
          and file storage solutions.`,

          `My main motivation for this project is to further specialize in
          ${strong("cloud infrastructure")}, ${strong("DevOps")}, and
          ${strong("backend development")}, as these are the areas I intend to focus on in my career.`,
        ],
      },
    },

    about: {
      name: "About",
      title: "A little more about me",
      id: "about",

      bento: {
        atWork: {
          title: "At Work",
          iconAlt: "Laptop Emoji",
          approachAlt: "My approach with code",

          text: [
            `With almost 4 years of experience as a ${strong("full stack developer")}, I approach my work with great ${strong("attention to detail")} and a mindset focused on quality and scalability. I have participated in the development of ${strong("large e-commerce platforms")}, as well as institutional websites and custom systems for ${strong("different client profiles")}, such as public agencies, private companies, and freelancers.`,

            `I'm comfortable moving between frontend and backend, but my main focus is on building robust, ${strong("well-structured")}, and high-performance solutions. Throughout projects, I improved my ability to ${strong("deliver value both in multidisciplinary teams and independently")}, with emphasis on automating repetitive tasks, API integration, and workflow optimization. I'm constantly seeking to improve my skills.`,
          ],
        },

        aboutMe: {
          title: "My personal side",
          dogEmojiText: "Dogs",
          gameEmojiText: "Games",

          iconAlt: "Waving Hand Emoji",
          dogEmojiAlt: "Dog Emoji",
          gamepadEmojiAlt: "Gamepad Emoji",
          pizzaEmojiAlt: "Pizza Emoji",

          text: [
            `The 3 words that best define me are ${strong("resilient")}, ${strong("optimistic")}, and
            ${strong("independent")}. It's hard for me to give up on something I've decided to do,
            and I always try to bring a positive outlook to every situation.`,

            `I've always been ${strong("naturally curious")}, seeking not only to learn new things,
            but also to understand them. That's why I love asking questions and figuring out how things work.`,
          ],
        },

        education: {
          title: "Education",
          iconAlt: "Graduation Cap Emoji",

          items: {
            gddv: {
              title: "Bachelor's Degree in Computer Science",
              location: "Brazil, Rio Grande do Sul",

              url: "https://www.udg.edu/en/estudia/Oferta-formativa/Graus/Fitxes?IDE=1436&ID=3105G1315",
              description: `Graduated from ${link("https://www.cruzeirodosul.edu.br/", strong("Universidade Cruzeiro Do Sul"), true)},
              where I gained a comprehensive understanding of the theoretical and practical aspects of the field. This included not only web development, but also
              ${strong("algorithms and data structures")}, ${strong("systems architecture")},
              ${strong("databases")}, and other relevant areas.
            `,
            },
          },
        },

        location: {
          title: "Location",
          iconAlt: "House Emoji",

          where: `${strong("Brazil")}, currently in ${strong("Rio Grande do Sul")}.`,
        },
      },
    },

    contact: {
      name: "Contact",
      title: "Send me a message",
      id: "contact",

      headline1: `Contact me at ${strong("any time.")}`,
      text1:
        "Whether you have a question, a project in mind or just want to say hi, you can reach me at:",

      headline2: `Thank you for ${strong("your time!")}`,
      text2:
        "If you prefer, you can also get in touch through any of the channels below:",

      formFill: `Fill out this form and I will get back to you ${strong("as soon as possible")}`,
      privacy: "I don't retain nor share any of your data.",
      or: "OR",
    },
  },

  footer: {
    note: `
      Built with {heart} by ${strong("Carlos E. Matte")} using ${link("https://astro.build", "Astro", true)},
      ${link("https://svelte.dev", "Svelte", true)}, and ${link("https://react.dev", "React", true)}.
      Hosted on ${link("https://cloudflare.com", "Cloudflare", true)}.
    `,
  },
} as const;

export const clientEnglish = {
  timezone: {
    same: "We are in the same timezone",
    ahead: (hours: string, minutes: string) =>
      `${hours} ${minutes} ahead of you`,

    behind: (hours: string, minutes: string) =>
      `${hours} ${minutes} behind you`,
  },

  navigation: {
    drawerTitle: "Menu",
    drawerDescription: "Click the section to navigate.",
  },

  contact: {
    form: {
      placeholders: {
        name: "Bill Gates",
        email: "bill.gates@microsoft.com",
        subject: "About your latest project...",
        message: "I have a question about...",
      },

      labels: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
      },

      success: `Thanks for reaching out! I'll get back to you as soon as possible.`,
      errors: {
        "resend-rate-limit-exceeded": `Send limit exceeded. Please try again later.`,
        "rate-limit-exceeded": (retryAfter: string) =>
          `It seems you sent an email recently. Give me some time to answer or try again ${retryAfter}.`,
        "internal-error": `An internal error occurred. Please try again later.`,
        "failed-to-determine-ip": `Failed to determine the request IP.`,
        "turnstile-error": `An error occurred validating the Turnstile captcha. Please try resetting the form and submitting again.`,
        "schema-error": `The form data is invalid. Please check the fields and try again.`,

        "unknown": `An unknown error occurred. Please try again later.`,
      },

      validation: {
        "email-invalid": `This address seems to be invalid.`,
        "email-required": `An email address is required.`,
        "name-required": `Your name is required.`,

        "clearer-subject": (minChars: number) =>
          `Provide a more detailed subject (more than ${minChars} characters).`,
        "clearer-message": (minChars: number) =>
          `Provide a more detailed message (more than ${minChars} characters).`,
      },
    },

    persistingError: "If the problem persists, contact me directly by email.",
    captchaTrouble:
      "Having trouble with the captcha? Try reloading or clearing the cache.",
    turnstileFailed: "Human Verification Failed",
    contactSuccess: "Email sent",
    contactError: "Something went wrong",

    formButtons: {
      submit: "Send",
      reset: "Clear",
    },
  },
};
