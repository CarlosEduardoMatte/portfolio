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

export const spanish = {
  meta: {
    name: "Español",
    locale: "es",
    code: "es-ES",

    routes: {
      archive: "archivo",
    },

    title: "Carlos E. Matte | Desarrollador Full-stack",
    description: `
      ¡Hola! Soy Carlos E. Matte, un desarrollador Full-stack especializado en desarrollo web. Hábil tanto en backend como en frontend. Fluido en catalán, español e inglés.
    `,

    ogAlt:
      "¡Hola! Soy Carlos E. Matte, Desarrollador Full-stack - Una imagen con fondo degradado oscuro y un avatar.",
  },

  misc: {
    scrollToTop: "Volver arriba",
    language: "Idioma",
    loveIconSr: "Amor",
    newTab: "Se abrirá en una nueva pestaña",
    linkTo: "Enlace a",
  },

  socials: {
    github: "GitHub",
    linkedIn: "LinkedIn",
    xTwitter: "X (Twitter)",
    resume: "Currículum",
    email: "Email",
    bento: "Bento",
    discord: "Discord",
    threads: "Threads",
    emailAddress: "carloseduardomatte656@gmail.com",
  },

  pages: {
    notfound: {
      meta: {
        title:
          "404: Página No Encontrada - Carlos E. Matte | Desarrollador Full-stack",
        description: "La página que buscas no existe.",
      },

      headline: "¡Ups! Parece que te has perdido.",
      text: "La página que buscas no existe.",
      back: "Volver a la página principal",
      label: "Página Principal",
    },

    archive: {
      meta: {
        title: "Carlos E. Matte | Archivo",
        description:
          "Una lista de los proyectos más destacados en los que he trabajado.",
      },

      heading: "Archivo de Proyectos",
      headline:
        "Aquí están listados todos los trabajos en los que he participado y considero dignos de mención.",

      whatAreShowcasesLg: `${quote(strong("Showcase"))} son proyectos que no están en línea, pero pueden descargarse y probarse.`,
      whatAreShowcasesSm: `Los enlaces prefijados con ${quote("*")} son ${strong("showcases")} (proyectos que no están en línea, pero pueden descargarse y probarse).`,

      homepageLinkLabel: "Página Principal",
      homepageLinkText: "Volver",

      table: {
        headers: {
          year: "Año",
          project: "Proyecto",
          description: "Descripción",
          builtWith: "Hecho con",
          links: "Enlaces",
        },

        showcaseLink: "Showcase",
        codeLink: "Código",
        liveLink: "Online",
      },
    },
  },

  noscript: {
    headline: `¡Ups! Parece que ${strong("JavaScript")} está desactivado en tu navegador.`,
    message: `Este sitio ${strong("lo requiere")} para que algunos contenidos ${strong("se muestren correctamente")}.
      Por favor, actívalo o descarta este mensaje haciendo clic en el botón de abajo, pero algunos elementos pueden no mostrarse como se espera.`,

    dismissText: "Lo entiendo, mostrar la página de todos modos",
    hint: small("Por si te lo preguntas, no, este botón no usa JavaScript."),
  },

  skills: {
    "teamwork": "Trabajo en equipo",
    "analytical-thinking": "Pensamiento analítico",
    "communication": "Comunicación",
  },

  sections: {
    hero: {
      headline: {
        content: `Soy un desarrollador de ${strong("Full-stack")}.`,
      },

      greeting: "¡Hola! Soy Carlos E. Matte",
      introduction: `
        Especializado en desarrollo web. Con
        ${bold("más de 6&nbsp;años de experiencia programando")}, actualmente busco aprovechar mis 
        ${strong("más de 4&nbsp;años de experiencia profesional")} para migrar al ${bold("desarrollo backend")}.
      `,

      introductionEmployed: `
        Especializado en desarrollo web. Actualmente 
        trabajando en ${link("https://adobe.com", strong(styled("Mave Tecnologia", getAdobeLinkStyle())))} como ${strong("Desarrollador Junior Full-stack")}, puesto
        que comencé en febrero de 2024.
      `,

      statusLabel: "Disponible para trabajar",
    },

    experience: {
      name: "Experiencia",
      id: "experiencia",
      title: "Dónde he trabajado",

      jobs: {
        codelearn: {
          title: "Desarrollador Full-stack - Becario",
          location: "Brasil, Rio Grande do Sul",
          at: "Prefeitura de Novo Hamburgo",

          description: [
            `${quote("Los grandes equipos construyen grandes proyectos.")}`,

            `Tuve la oportunidad de trabajar con un ${strong("equipo multidisciplinar increíble")}, compuesto por ${bold("diseñadores UI/UX")}, analistas de pruebas,
            desarrolladores senior, y yo como ${strong("desarrollador full stack")}. Contribuí activamente en proyectos de impacto directo para la comunidad,
            como el ${strong("portal oficial del municipio")}, el ${strong("portal de turismo")} y otras aplicaciones públicas.`,

            `A lo largo de esta experiencia, ${bold("mejoré continuamente")} tanto mis habilidades técnicas como mis ${strong("habilidades blandas")},
            como ${strong("trabajo en equipo")}, ${strong("adaptabilidad")}, ${strong("creatividad")} y ${strong("proactividad")}.`,
          ],
        },

        gilab: {
          title: "Desarrollador Full-stack",
          location: "Brasil, Rio Grande do Sul",
          at: "Mave Tecnologia",

          description: [
            `Actualmente trabajo como ${strong("desarrollador web full stack")} en la empresa ${strong("Mave")}, 
            donde contribuyo al desarrollo de soluciones digitales completas, 
            integrando ${bold("interfaces intuitivas")} con ${bold("sistemas robustos y eficientes")}.`,

            `Tengo experiencia en todas las etapas del ciclo de desarrollo, siempre priorizando 
            ${strong("rendimiento")}, ${strong("usabilidad")} y ${strong("escalabilidad")} para garantizar 
            experiencias consistentes y de alto nivel.`,

            `He participado en ${bold("proyectos de gran envergadura")}, incluyendo ${strong("plataformas deportivas")} 
            y ${strong("E-Commerce")}, lo que amplió mi visión sobre diferentes 
            ${bold("modelos de negocio")} y los desafíos técnicos de cada uno.`,
          ],
        },
      },
    },

    projects: {
      name: "Proyectos",
      id: "proyectos",
      title: "Algunos de mis proyectos favoritos",

      buttonReveal: "¿Qué viene después?",
      currentProject: "¿En qué estoy trabajando actualmente?",
      seeMore: "Ver más de mis proyectos en",
      archiveText: "el archivo",

      sourceCode: "Código fuente",
      liveDemo: "¡Probar!",
      showcaseLink: "Showcase",

      sourceCodeLinkLabel: "Repositorio de GitHub del proyecto",
      liveDemoLinkLabel: "Demo online del proyecto",
      showcaseLinkLabel: "Showcase del proyecto",

      archive: {
        "site-prefeitura-nh": {
          name: "Sitio de la Prefeitura de Novo Hamburgo",
          headline:
            "🏛️ Un sitio institucional para la Prefeitura de Novo Hamburgo.",

          description: [
            `Este proyecto fue desarrollado como parte de mis prácticas en la ${strong("Prefeitura de Novo Hamburgo")}, donde tuve la oportunidad de trabajar con un ${strong("equipo multidisciplinar increíble")}.`,

            `El sitio es un ${strong("portal institucional")} que busca proporcionar información sobre la ciudad, sus servicios y eventos. Fue diseñado para ser ${strong("accesible")}, ${strong("intuitivo")} y ${strong("informativo")}, atendiendo a las necesidades de la comunidad local.`,
          ],
        },

        "site-turismo-nh": {
          name: "Sitio Turismo de Novo Hamburgo",
          headline: "🌍 Un sitio de turismo para la ciudad de Novo Hamburgo.",

          description: [
            `Este proyecto fue desarrollado como parte de mis prácticas en la ${strong("Prefeitura de Novo Hamburgo")}, donde tuve la oportunidad de trabajar con un ${strong("equipo multidisciplinar increíble")}.`,

            `El sitio es un ${strong("portal de turismo")} que busca promover la ciudad como destino turístico, destacando sus atracciones, eventos y cultura. Fue diseñado para ser ${strong("accesible")}, ${strong("intuitivo")} y ${strong("informativo")}, atendiendo a las necesidades de visitantes y residentes locales.
          `,
          ],
        },

        "site-iptu-nh": {
          name: "Sitio IPTU Novo Hamburgo",
          headline: "🏠 Sitio informativo sobre el IPTU en Novo Hamburgo.",

          description: [
            `Este proyecto fue desarrollado como parte de mis prácticas en la ${strong("Prefeitura de Novo Hamburgo")}, donde tuve la oportunidad de trabajar con un ${strong("equipo multidisciplinar increíble")}.`,

            `El sitio es un ${strong("portal informativo")} sobre el IPTU (Impuesto Predial y Territorial Urbano) de Novo Hamburgo, proporcionando información sobre cómo pagar, consultar deudas y acceder a servicios relacionados. Fue diseñado para ser ${strong("accesible")}, ${strong("intuitivo")} y ${strong("informativo")}, atendiendo a las necesidades de los ciudadanos.`,
          ],
        },

        "site-outubro-rosa": {
          name: "Outubro Rosa",
          headline: "🎗️ Un sitio de concienciación sobre el cáncer de mama.",
          description:
            "Este proyecto fue desarrollado para promover la concienciación sobre el cáncer de mama durante el mes de octubre, destacando la importancia de la detección temprana y el apoyo a las personas afectadas por la enfermedad.",
        },

        "site-novebro-azul": {
          name: "Novebro Azul",
          headline:
            "💙 Un sitio de concienciación sobre el cáncer de próstata.",
          description:
            "Este proyecto fue desarrollado para promover la concienciación sobre el cáncer de próstata durante el mes de noviembre, destacando la importancia de la detección temprana y el apoyo a las personas afectadas por la enfermedad.",
        },

        "site-time-futebol": {
          name: "Sitio Equipo de Fútbol",
          headline: "⚽ Un sitio para un equipo de fútbol.",
          description:
            "Ayudé y di soporte en el desarrollo de un sitio para un equipo de fútbol local, con el objetivo de promover el equipo y sus actividades.",
        },
        "site-time-volei": {
          name: "Sitio Equipo de Vóley",
          headline: "🏐 Un sitio para un equipo de vóley.",
          description:
            "Ayudé y di soporte en el desarrollo de un sitio para un equipo de vóley local, con el objetivo de promover el equipo y sus actividades.",
        },
        "site-ecommecer-acessorios": {
          name: "Ecommerce de Accesorios",
          headline: "🛒 Un sitio de e-commerce para una tienda de accesorios.",
          description:
            "Ayudé y di soporte en el desarrollo de un sitio de e-commerce para una tienda de accesorios, con el objetivo de promover los productos y facilitar las compras online.",
        },
        "site-ecommecer-roupas-esportivas": {
          name: "Ecommerce de Ropa Deportiva",
          headline: "👗 Un sitio de e-commerce de ropa deportiva",
          description:
            "Ayudé y di soporte en el desarrollo de un sitio de e-commerce de ropa deportiva, con el objetivo de promover los productos y facilitar las compras online.",
        },
      },

      next: {
        name: "Use Link",
        headline:
          "🔗 Un acortador de URL y servicio de compartición de archivos autoalojado.",
        description: [
          `Aunque normalmente trabajo en varias cosas a la vez, este es actualmente mi próximo enfoque.
          Quiero desarrollarlo como un servicio completo con una ${strong("arquitectura modular")}
          que permita ${bold("integración fácil")} con varios proveedores de nube, bases de datos
          y soluciones de almacenamiento de archivos.`,

          `Mi principal motivación para este proyecto es especializarme aún más en
          ${strong("infraestructura en la nube")}, ${strong("DevOps")} y
          ${strong("desarrollo backend")}, ya que son las áreas en las que quiero centrarme en mi carrera.`,
        ],
      },
    },

    about: {
      name: "Sobre mí",
      title: "Un poco más sobre mí",
      id: "sobre-mi",

      bento: {
        atWork: {
          title: "En el trabajo",
          iconAlt: "Emoji de portátil",
          approachAlt: "Mi enfoque con el código",

          text: [
            `Con casi 4 años de experiencia como ${strong("desarrollador full stack")}, afronto mi trabajo con mucha ${strong("atención al detalle")} y una mentalidad orientada a la calidad y la escalabilidad. He participado en el desarrollo de ${strong("grandes plataformas de e-commerce")}, además de sitios institucionales y sistemas personalizados para ${strong("diferentes perfiles de clientes")}, como organismos públicos, empresas privadas y profesionales autónomos.`,

            `Tengo facilidad para moverme entre frontend y backend, pero mi mayor enfoque está en construir soluciones robustas, ${strong("bien estructuradas")} y de alto rendimiento. A lo largo de los proyectos, mejoré mi capacidad de ${strong("aportar valor tanto en equipos multidisciplinares como de forma autónoma")}, destacando la automatización de tareas repetitivas, integración de APIs y optimización de flujos. Estoy constantemente buscando mejorar mis habilidades.`,
          ],
        },

        aboutMe: {
          title: "Mi lado personal",
          dogEmojiText: "Perros",
          gameEmojiText: "Juegos",

          iconAlt: "Emoji de mano saludando",
          dogEmojiAlt: "Emoji de perro",
          gamepadEmojiAlt: "Emoji de mando",
          pizzaEmojiAlt: "Emoji de pizza",

          text: [
            `Las 3 palabras que mejor me definen son ${strong("resiliente")}, ${strong("optimista")} e
            ${strong("independiente")}. Me cuesta dejar algo que me he propuesto,
            y siempre intento aportar una visión positiva a cada situación.`,

            `Siempre he sido ${strong("naturalmente curioso")}, buscando no solo aprender cosas nuevas,
            sino también entenderlas. Por eso me encanta hacer preguntas y descubrir cómo funcionan las cosas.`,
          ],
        },

        education: {
          title: "Educación",
          iconAlt: "Emoji de birrete",

          items: {
            gddv: {
              title: "Licenciatura en Ciencias de la Computación",
              location: "Brasil, Rio Grande do Sul",

              url: "https://www.udg.edu/en/estudia/Oferta-formativa/Graus/Fitxes?IDE=1436&ID=3105G1315",
              description: `Graduado por la ${link("https://www.cruzeirodosul.edu.br/", strong("Universidad Cruzeiro Do Sul"), true)},
              donde adquirí una comprensión integral de los aspectos teóricos y prácticos del área. Esto incluyó no solo desarrollo web, sino también
              ${strong("algoritmos y estructuras de datos")}, ${strong("arquitectura de sistemas")},
              ${strong("bases de datos")} y otras áreas relevantes.
            `,
            },
          },
        },

        location: {
          title: "Ubicación",
          iconAlt: "Emoji de casa",

          where: `${strong("Brasil")}, actualmente en ${strong("Rio Grande do Sul")}.`,
        },
      },
    },

    contact: {
      name: "Contacto",
      title: "Envíame un mensaje",
      id: "contacto",

      headline1: `Contáctame ${strong("cuando quieras.")}`,
      text1:
        "Ya sea para resolver una duda, proponer un proyecto o simplemente saludar, puedes encontrarme en:",

      headline2: `¡Gracias por ${strong("tu tiempo!")}`,
      text2:
        "Si lo prefieres, también puedes contactarme por cualquiera de los siguientes canales:",

      formFill: `Rellena este formulario y te responderé ${strong("lo antes posible")}`,
      privacy: "No guardo ni comparto ninguno de tus datos.",
      or: "O",
    },
  },

  footer: {
    note: `
      Hecho con {heart} por ${strong("Carlos E. Matte")} usando ${link("https://astro.build", "Astro", true)},
      ${link("https://svelte.dev", "Svelte", true)}, y ${link("https://react.dev", "React", true)}.
      Hospedado en ${link("https://cloudflare.com", "Cloudflare", true)}.
    `,
  },
} as const;

export const clientSpanish = {
  timezone: {
    same: "Estamos en la misma zona horaria",
    ahead: (hours: string, minutes: string) =>
      `${hours} ${minutes} por delante de ti`,

    behind: (hours: string, minutes: string) =>
      `${hours} ${minutes} por detrás de ti`,
  },

  navigation: {
    drawerTitle: "Menú",
    drawerDescription: "Haz clic en la sección para navegar.",
  },

  contact: {
    form: {
      placeholders: {
        name: "Bill Gates",
        email: "bill.gates@microsoft.com",
        subject: "Sobre tu último proyecto...",
        message: "Tengo una duda sobre...",
      },

      labels: {
        name: "Nombre",
        email: "Correo",
        subject: "Asunto",
        message: "Mensaje",
      },

      success: `¡Gracias por tu mensaje! Te responderé lo antes posible.`,
      errors: {
        "resend-rate-limit-exceeded": `Límite de envío excedido. Por favor, inténtalo de nuevo más tarde.`,
        "rate-limit-exceeded": (retryAfter: string) =>
          `Parece que has enviado un email recientemente. Dame algo de tiempo para responder o inténtalo de nuevo ${retryAfter}.`,
        "internal-error": `Ha ocurrido un error interno. Por favor, inténtalo de nuevo más tarde.`,
        "failed-to-determine-ip": `No se pudo determinar la IP de la solicitud.`,
        "turnstile-error": `Ocurrió un error al validar el captcha Turnstile. Intenta reiniciar el formulario y enviarlo de nuevo.`,
        "schema-error": `Los datos del formulario son inválidos. Revisa los campos e inténtalo de nuevo.`,

        "unknown": `Ha ocurrido un error desconocido. Por favor, inténtalo de nuevo más tarde.`,
      },

      validation: {
        "email-invalid": `Esta dirección parece inválida.`,
        "email-required": `Se requiere una dirección de correo electrónico.`,
        "name-required": `Tu nombre es obligatorio.`,

        "clearer-subject": (minChars: number) =>
          `Proporciona un asunto más detallado (más de ${minChars} caracteres).`,
        "clearer-message": (minChars: number) =>
          `Proporciona un mensaje más detallado (más de ${minChars} caracteres).`,
      },
    },

    persistingError:
      "Si el problema persiste, contacta conmigo directamente por email.",
    captchaTrouble:
      "¿Tienes problemas con el captcha? Intenta recargar la página o limpiar la caché.",
    turnstileFailed: "Fallo en la verificación humana",
    contactSuccess: "Correo enviado",
    contactError: "Algo salió mal",

    formButtons: {
      submit: "Enviar",
      reset: "Limpiar",
    },
  },
};
