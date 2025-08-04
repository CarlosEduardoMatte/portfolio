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
/** As strings em português para o site. */
export const portugues = {
  meta: {
    name: "Português",
    locale: "pt",
    code: "pt-BR",

    routes: {
      archive: "arquivo",
    },

    title: "Carlos E. Matte | Desenvolvedor de Full-stack",
    description: `
      Olá! Eu sou Carlos E. Matte, um desenvolvedor de Full-stack especializado em desenvolvimento web Hábil tanto em backend quanto em frontend. Fluente em catalão, espanhol e inglês.
    `,

    ogAlt:
      "Olá! Eu sou Carlos E. Matte, Desenvolvedor de Full-stack - Uma imagem com fundo escuro em degradê e um avatar.",
  },

  misc: {
    scrollToTop: "Voltar ao topo",
    language: "Idioma",
    loveIconSr: "Amor",
    newTab: "Abre em uma nova aba",
    linkTo: "Link para",
  },

  socials: {
    github: "GitHub",
    linkedIn: "LinkedIn",
    xTwitter: "X (Twitter)",
    resume: "Currículo",
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
          "404: Página Não Encontrada - Carlos E. Matte | Desenvolvedor de Full-stack",
        description: "A página que você procura não existe.",
      },

      headline: "Ops! Parece que você está perdido.",
      text: "A página que você procura não existe.",
      back: "Voltar para a página principal",
      label: "Página Principal",
    },

    archive: {
      meta: {
        title: "Carlos E. Matte | Arquivo",
        description:
          "Uma lista com os projetos mais notáveis em que trabalhei.",
      },

      heading: "Arquivo de Projetos",
      headline:
        "Aqui estão listados todos os trabalhos em que atuei e considero dignos de menção.",

      whatAreShowcasesLg: `${quote(strong("Showcase"))} são projetos que não estão online, mas podem ser baixados e testados.`,
      whatAreShowcasesSm: `Os links prefixados com ${quote("*")} são ${strong("showcases")} (projetos que não estão online, mas podem ser baixados e testados).`,

      homepageLinkLabel: "Página Inicial",
      homepageLinkText: "Voltar",

      table: {
        headers: {
          year: "Ano",
          project: "Projeto",
          description: "Descrição",
          builtWith: "Feito com",
          links: "Links",
        },

        showcaseLink: "Showcase",
        codeLink: "Código",
        liveLink: "Online",
      },
    },
  },

  noscript: {
    headline: `Ops! Parece que o ${strong("JavaScript")} está desativado no seu navegador.`,
    message: `Este site ${strong("requer isso")} para que alguns conteúdos ${strong("sejam exibidos corretamente")}.
      Por favor, ative ou ignore esta mensagem clicando no botão abaixo, mas alguns elementos podem não ser exibidos como esperado.`,

    dismissText: "Entendi, mostrar o site mesmo assim",
    hint: small(
      "Caso esteja se perguntando, não, este botão não usa JavaScript.",
    ),
  },

  skills: {
    "teamwork": "Trabalho em equipe",
    "analytical-thinking": "Pensamento analítico",
    "communication": "Comunicação",
  },

  sections: {
    hero: {
      headline: {
        content: `Sou um desenvolvedor de ${strong("Full-stack")}.`,
      },

      greeting: "Olá! Eu sou Carlos E. Matte",
      introduction: `
        Especializado em desenvolvimento web Com
        ${bold("mais de 6&nbsp;anos de experiência em programação")}, atualmente busco aproveitar meus 
        ${strong("mais de 4&nbsp;anos de experiência profissional")} para migrar para o ${bold("desenvolvimento backend")}.
      `,

      introductionEmployed: `
        Especializado em desenvolvimento web Atualmente 
        trabalhando na ${link("https://adobe.com", strong(styled("Mave Tecnologia", getAdobeLinkStyle())))} como ${strong("Desenvolvedor Júnior de Full-stack")}, cargo
        que iniciei em ferveiro de 2024.
      `,

      statusLabel: "Disponível para trabalho",
    },

    experience: {
      name: "Experiência",
      id: "experience",
      title: "Onde trabalhei",

      jobs: {
        codelearn: {
          title: "Desenvolvedor Full-stack - Estagiário",
          location: "Brasil, Rio grande do Sul",
          at: "Prefeitura de Novo Hamburgo",

          description: [
            `${quote("Grandes equipes constroem grandes projetos.")}`,

            `Tive a oportunidade de trabalhar com uma ${strong("equipe multidisciplinar incrível")}, composta por ${bold("designers UI/UX")}, analistas de teste,
            desenvolvedores sêniores, e eu como ${strong("desenvolvedor full stack")}. Contribuí ativamente em projetos de impacto direto para a comunidade,
            como o ${strong("portal oficial do município")}, o ${strong("portal do turismo")} e outras aplicações públicas.`,

            `Ao longo dessa experiência, ${bold("Aprimorei continuamente")} tanto minhas habilidades técnicas quanto minhas ${strong("soft skills")},
            como ${strong("trabalho em equipe")}, ${strong("adaptabilidade")}, ${strong("criatividade")} e ${strong("proatividade")}.`,
          ],
        },

        gilab: {
          title: "Desenvolvedor Full-stack",
          location: "Brasil, Rio grande do Sul",
          at: "Mave Tecnologia",

          description: [
            `Atualmente atuo como ${strong("desenvolvedor web full stack")} na empresa ${strong("Mave")}, 
            onde contribuo com o desenvolvimento de soluções digitais completas, 
            integrando ${bold("interfaces intuitivas")} com ${bold("sistemas robustos e eficientes")}.`,

            `Tenho experiência em todas as etapas do ciclo de desenvolvimento, sempre priorizando 
            ${strong("performance")}, ${strong("usabilidade")} e ${strong("escalabilidade")} para garantir 
            experiências consistentes e de alto nível.`,

            `Já participei de ${bold("projetos de grande porte")}, incluindo ${strong("plataformas esportivas")} 
            e ${strong("E-Commerce")}, o que ampliou minha visão sobre diferentes 
            ${bold("modelos de negócio")} e os desafios técnicos de cada um.`,
          ],
        },
      },
    },

    projects: {
      name: "Projetos",
      id: "projects",
      title: "Alguns dos meus projetos favoritos",

      buttonReveal: "O que vem a seguir?",
      currentProject: "No que estou trabalhando atualmente?",
      seeMore: "Veja mais dos meus projetos no",
      archiveText: "arquivo",

      sourceCode: "Código Fonte",
      liveDemo: "Testar!",
      showcaseLink: "Showcase",

      sourceCodeLinkLabel: "Repositório GitHub do projeto",
      liveDemoLinkLabel: "Demo online do projeto",
      showcaseLinkLabel: "Showcase do projeto",

      archive: {
        "site-prefeitura-nh": {
          name: "Site da Prefeitura de Novo Hamburgo",
          headline:
            "🏛️ Um site institucional para a Prefeitura de Novo Hamburgo.",

          description: [
            `Este projeto foi desenvolvido como parte do meu estágio na ${strong("Prefeitura de Novo Hamburgo")}, onde tive a oportunidade de trabalhar com uma ${strong("equipe multidisciplinar incrível")}.`,

            `O site é um ${strong("portal institucional")} que visa fornecer informações sobre a cidade, seus serviços e eventos. Ele foi projetado para ser ${strong("acessível")}, ${strong("intuitivo")} e ${strong("informativo")}, atendendo às necessidades da comunidade local.`,
          ],
        },

        "site-turismo-nh": {
          name: "Site Turismo de Novo Hamburgo",
          headline: "🌍 Um site de turismo para a cidade de Novo Hamburgo.",

          description: [
            `Este projeto foi desenvolvido como parte do meu estágio na ${strong("Prefeitura de Novo Hamburgo")}, onde tive a oportunidade de trabalhar com uma ${strong("equipe multidisciplinar incrível")}.`,

            `O site é um ${strong("portal de turismo")} que visa promover a cidade como um destino turístico, destacando suas atrações, eventos e cultura. Ele foi projetado para ser ${strong("acessível")}, ${strong("intuitivo")} e ${strong("informativo")}, atendendo às necessidades dos visitantes e moradores locais.
          `,
          ],
        },

        "site-iptu-nh": {
          name: "Site IPTU Novo Hamburgo",
          headline: "🏠 Site informativo sobre o IPTU em Novo Hamburgo.",

          description: [
            `Este projeto foi desenvolvido como parte do meu estágio na ${strong("Prefeitura de Novo Hamburgo")}, onde tive a oportunidade de trabalhar com uma ${strong("equipe multidisciplinar incrível")}.`,

            `O site é um ${strong("portal informativo")} sobre o IPTU (Imposto Predial e Territorial Urbano) de Novo Hamburgo, fornecendo informações sobre como pagar, consultar débitos e acessar serviços relacionados. Ele foi projetado para ser ${strong("acessível")}, ${strong("intuitivo")} e ${strong("informativo")}, atendendo às necessidades dos cidadãos.`,
          ],
        },

        "site-outubro-rosa": {
          name: "Outubro Rosa",
          headline: "🎗️ Um site de conscientização sobre o câncer de mama.",
          description:
            " Este projeto foi desenvolvido para promover a conscientização sobre o câncer de mama durante o mês de outubro, destacando a importância da detecção precoce e do apoio às pessoas afetadas pela doença.",
        },

        "site-novebro-azul": {
          name: "Novebro Azul",
          headline:
            " 💙 Um site de conscientização sobre o câncer de próstata.",
          description:
            "Este projeto foi desenvolvido para promover a conscientização sobre o câncer de próstata durante o mês de novembro, destacando a importância da detecção precoce e do apoio às pessoas afetadas pela doença.",
        },

        "site-time-futebol": {
          name: "Site Time Futebol",
          headline: " ⚽ Um site para um time de futebol.",
          description:
            "Auxiliei e dei suporte no desenvolvimento de um site para um time de futebol local, com o objetivo de promover o time e suas atividades.",
        },
        "site-time-volei": {
          name: "Site Time Vôlei",
          headline: "🏐 Um site para um time de vôlei.",
          description:
            "Auxiliei e dei suporte no desenvolvimento de um site para um time de vôlei local, com o objetivo de promover o time e suas atividades.",
        },
        "site-ecommecer-acessorios": {
          name: "Ecommecer de Acessórios",
          headline: "🛒 Um site de e-commerce para uma Loja de acessórios.",
          description:
            "Auxiliei e dei suporte no desenvolvimento de um site de e-commerce para uma loja de acessórios, com o objetivo de promover os produtos e facilitar as compras online.",
        },
        "site-ecommecer-roupas-esportivas": {
          name: "Ecommecer de Roupas Esportivas",
          headline: "👗 Um site de e-commerce de roupas esportivas",
          description:
            "Auxiliei e dei suporte no desenvolvimento de um site de e-commerce de roupas esportivas, com o objetivo de promover os produtos e facilitar as compras online.",
        },
      },

      next: {
        name: "Use Link",
        headline:
          "🔗 Um encurtador de URL e serviço de compartilhamento de arquivos auto-hospedável.",
        description: [
          `Embora eu geralmente trabalhe em várias coisas ao mesmo tempo, este é atualmente meu próximo foco.
          Quero desenvolvê-lo como um serviço completo com uma ${strong("arquitetura modular")}
          que permita ${bold("integração fácil")} com diversos provedores de nuvem, bancos de dados
          e soluções de armazenamento de arquivos.`,

          `Minha principal motivação para este projeto é me especializar ainda mais em
          ${strong("infraestrutura em nuvem")}, ${strong("DevOps")} e
          ${strong("desenvolvimento backend")}, pois são as áreas que pretendo focar na carreira.`,
        ],
      },
    },

    about: {
      name: "Sobre",
      title: "Um pouco mais sobre mim",
      id: "about",

      bento: {
        atWork: {
          title: "No trabalho",
          iconAlt: "Emoji de Laptop",
          approachAlt: "Minha abordagem com código",

          text: [
            `Com quase 4 anos de experiência como ${strong("desenvolvedor full stack")}, encaro meu trabalho com muita ${strong("atenção aos detalhes")} e uma mentalidade voltada à qualidade e escalabilidade. Já participei do desenvolvimento de ${strong("grandes plataformas de e-commerce")}, além de sites institucionais e sistemas personalizados para ${strong("diferentes perfis de clientes")}, como órgãos públicos, empresas privadas e profissionais autônomos.`,

            `Tenho facilidade em transitar entre frontend e backend, mas meu maior foco está em construir soluções robustas, ${strong("bem estruturadas")} e de alto desempenho. Ao longo dos projetos, aprimorei minha capacidade de ${strong("entregar valor tanto em equipes multidisciplinares quanto de forma autônoma")}, com destaque para a automação de tarefas repetitivas, integração de APIs e otimização de fluxos. Estou constantemente em busca de aprimorar minhas habilidades.`,
          ],
        },

        aboutMe: {
          title: "Meu lado pessoal",
          dogEmojiText: "Cachorros",
          gameEmojiText: "Jogos",

          iconAlt: "Emoji de Mão Acenando",
          dogEmojiAlt: "Emoji de Cachorro",
          gamepadEmojiAlt: "Emoji de Controle",
          pizzaEmojiAlt: "Emoji de Pizza",

          text: [
            `As 3 palavras que melhor me definem são ${strong("resiliente")}, ${strong("otimista")} e
            ${strong("independente")}. É difícil eu desistir de algo que decidi fazer,
            e sempre tento trazer uma visão positiva para cada situação.`,

            `Sempre fui ${strong("naturalmente curioso")}, buscando não só aprender coisas novas,
            mas também entendê-las. Por isso adoro fazer perguntas e descobrir como as coisas funcionam.`,
          ],
        },

        education: {
          title: "Educação",
          iconAlt: "Emoji de Capelo",

          items: {
            gddv: {
              title: "Bacharelado em Ciências da Computação",
              location: "Brasil, Rio grande do Sul",

              url: "https://www.udg.edu/en/estudia/Oferta-formativa/Graus/Fitxes?IDE=1436&ID=3105G1315",
              description: `Graduado pela ${link("https://www.cruzeirodosul.edu.br/", strong("Universidade Cruzeiro Do Sul"), true)},
              onde adquiri uma compreensão abrangente dos aspectos teóricos e práticos da área. Isso incluiu não só desenvolvimento web, mas também
              ${strong("algoritmos e estruturas de dados")}, ${strong("arquitetura de sistemas")},
              ${strong("bancos de dados")} e outras áreas relevantes.
            `,
            },
          },
        },

        location: {
          title: "Localização",
          iconAlt: "Emoji de Casa",

          where: `${strong("Brasil")}, atualmente no ${strong("Rio Grande do Sul")}.`,
        },
      },
    },

    contact: {
      name: "Contato",
      title: "Me envie uma mensagem",
      id: "contact",

      headline1: `Entre em contato comigo ${strong("a qualquer momento.")}`,
      text1:
        "Seja para tirar uma dúvida, propor um projeto ou apenas dizer oi, você pode me encontrar em:",

      headline2: `Obrigado pelo ${strong("seu tempo!")}`,
      text2:
        "Se preferir, também pode entrar em contato por qualquer um dos canais abaixo:",

      formFill: `Preencha este formulário e retornarei ${strong("o mais rápido possível")}`,
      privacy: "Não guardo nem compartilho nenhum dos seus dados.",
      or: "OU",
    },
  },

  footer: {
    note: `
      Feito com {heart} por ${strong("Carlos E. Matte")} usando ${link("https://astro.build", "Astro", true)},
      ${link("https://svelte.dev", "Svelte", true)}, e ${link("https://react.dev", "React", true)}.
      Hospedado em ${link("https://cloudflare.com", "Cloudflare", true)}.
    `,
  },
} as const;

/** As strings em português para o código cliente. */
export const clientPortugues = {
  timezone: {
    same: "Estamos no mesmo fuso horário",
    ahead: (hours: string, minutes: string) =>
      `${hours} ${minutes} à frente de você`,

    behind: (hours: string, minutes: string) =>
      `${hours} ${minutes} atrás de você`,
  },

  navigation: {
    drawerTitle: "Menu",
    drawerDescription: "Clique na seção para navegar.",
  },

  contact: {
    form: {
      placeholders: {
        name: "Bill Gates",
        email: "bill.gates@microsoft.com",
        subject: "Sobre seu último projeto...",
        message: "Tenho uma dúvida sobre...",
      },

      labels: {
        name: "Nome",
        email: "Email",
        subject: "Assunto",
        message: "Mensagem",
      },

      success: `Obrigado pelo contato! Retornarei o mais breve possível.`,
      errors: {
        "resend-rate-limit-exceeded": `Limite de envio excedido. Por favor, tente novamente mais tarde.`,
        "rate-limit-exceeded": (retryAfter: string) =>
          `Parece que você enviou um email recentemente. Dê-me um tempo para responder ou tente novamente ${retryAfter}.`,
        "internal-error": `Ocorreu um erro interno. Por favor, tente novamente mais tarde.`,
        "failed-to-determine-ip": `Falha ao determinar o IP da requisição.`,
        "turnstile-error": `Ocorreu um erro ao validar o captcha Turnstile. Tente redefinir o formulário e enviar novamente.`,
        "schema-error": `Os dados do formulário são inválidos. Verifique os campos e tente novamente.`,

        "unknown": `Ocorreu um erro desconhecido. Por favor, tente novamente mais tarde.`,
      },

      validation: {
        "email-invalid": `Este endereço parece inválido.`,
        "email-required": `Um endereço de email é obrigatório.`,
        "name-required": `Seu nome é obrigatório.`,

        "clearer-subject": (minChars: number) =>
          `Forneça um assunto mais detalhado (mais de ${minChars} caracteres).`,
        "clearer-message": (minChars: number) =>
          `Forneça uma mensagem mais detalhada (mais de ${minChars} caracteres).`,
      },
    },

    persistingError:
      "Se o problema persistir, entre em contato diretamente pelo meu email.",
    captchaTrouble:
      "Está com problemas no captcha? Tente recarregar ou limpar o cache.",
    turnstileFailed: "Falha na verificação humana",
    contactSuccess: "Email enviado",
    contactError: "Algo deu errado",

    formButtons: {
      submit: "Enviar",
      reset: "Limpar",
    },
  },
};
/** The english strings for the website. */
