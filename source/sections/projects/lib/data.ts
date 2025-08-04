import { getTranslationHandler } from "@modules/i18n";
import type { ProjectData, ProjectKey, ProjectStaticData } from "./types";
import { hasTranslation } from "@app/modules/i18n/lib/utils/translations";

/** The translation object that contains the translated data of my job projects. */
const PROJECTS_I18N = "sections.projects.archive" as const;

/**
 * Defines a project with the given project key and static data.
 *
 * @param projectKey - The translated project key.
 * @param data - The static data for the project.
 * @returns An object representing the defined project.
 */
function defineProject(projectKey: ProjectKey, data: ProjectStaticData) {
  const i18nKey = `${PROJECTS_I18N}.${projectKey}` as const;

  return {
    name: getTranslationHandler(`${i18nKey}.name`),
    headline: getTranslationHandler(`${i18nKey}.headline`),
    description: getTranslationHandler(`${i18nKey}.description`),

    ...data,
  };
}

/** The list with all the projects we want to show. */
export const projects = [
  defineProject("site-prefeitura-nh", {
    url: "https://www.novohamburgo.rs.gov.br/",

    featured: true,
    relatedSkills: [
      "Drupal",
      "PHP",
      "JavaScript",
      "Postgresql",
      "HTML5",
      "CSS",
      "Bootstrap",
    ],

    preview: (await import("../assets/my-room/prefeitura.png")).default,
    video: {
      webm: {
        av1: (await import("../assets/my-room/prefeitura.mp4")).default,
        vp9: (await import("../assets/my-room/prefeitura.mp4")).default,
      },
      mp4: {
        av1: (await import("../assets/my-room/prefeitura.mp4")).default,
        h264: (await import("../assets/my-room/prefeitura.mp4")).default,
        h265: (await import("../assets/my-room/prefeitura.mp4")).default,
      },

      poster: (await import("../assets/my-room/prefeitura.png")).default,
    },

    year: 2023,
  }),

  defineProject("site-turismo-nh", {
    url: "https://turismo.novohamburgo.rs.gov.br/",

    featured: true,
    relatedSkills: [
      "Wordpress",
      "PHP",
      "JavaScript",
      "Postgresql",
      "HTML5",
      "CSS",
      "Bootstrap",
    ],

    preview: (await import("../assets/gamelab/turismo.png")).default,
    video: {
      webm: {
        av1: (await import("../assets/gamelab/turismo.mp4")).default,
        vp9: (await import("../assets/gamelab/turismo.mp4")).default,
      },
      mp4: {
        av1: (await import("../assets/gamelab/turismo.mp4")).default,
        h264: (await import("../assets/gamelab/turismo.mp4")).default,
        h265: (await import("../assets/gamelab/turismo.mp4")).default,
      },

      poster: (await import("../assets/gamelab/turismo.png")).default,
    },

    year: 2023,
  }),

  defineProject("site-iptu-nh", {
    url: "https://iptu.novohamburgo.rs.gov.br/",

    featured: true,
    relatedSkills: [
      "Wordpress",
      "PHP",
      "JavaScript",
      "Postgresql",
      "HTML5",
      "CSS",
      "Bootstrap",
    ],

    preview: (await import("../assets/the-izland/iptu.png")).default,
    video: {
      webm: {
        av1: (await import("../assets/the-izland/iptu.mp4")).default,
        vp9: (await import("../assets/the-izland/iptu.mp4")).default,
      },
      mp4: {
        av1: (await import("../assets/the-izland/iptu.mp4")).default,
        h264: (await import("../assets/the-izland/iptu.mp4")).default,
        h265: (await import("../assets/the-izland/iptu.mp4")).default,
      },

      poster: (await import("../assets/the-izland/iptu.png")).default,
    },

    year: 2024,
  }),

  defineProject("site-outubro-rosa", {
    year: 2024,
    featured: false,
    relatedSkills: [
      "Wordpress",
      "PHP",
      "JavaScript",
      "Postgresql",
      "HTML5",
      "CSS",
      "Bootstrap",
    ],
  }),
  defineProject("site-novebro-azul", {
    year: 2024,
    featured: false,
    relatedSkills: [
      "Wordpress",
      "PHP",
      "JavaScript",
      "Postgresql",
      "HTML5",
      "CSS",
      "Bootstrap",
    ],
  }),
  defineProject("site-time-futebol", {
    year: 2024,
    featured: false,
    relatedSkills: [
      "Codeigniter",
      "PHP",
      "JavaScript",
      "Postgresql",
      "HTML5",
      "CSS",
      "Bootstrap",
    ],
  }),
  defineProject("site-time-volei", {
    year: 2024,
    featured: false,
    relatedSkills: [
      "Codeigniter",
      "PHP",
      "JavaScript",
      "Postgresql",
      "HTML5",
      "CSS",
      "Bootstrap",
    ],
  }),
  defineProject("site-ecommecer-acessorios", {
    year: 2025,
    featured: false,
    relatedSkills: [
      "React",
      "Codeigniter",
      "PHP",
      "JavaScript",
      "Postgresql",
      "HTML5",
      "CSS",
      "Bootstrap",
    ],
  }),
  defineProject("site-ecommecer-roupas-esportivas", {
    year: 2025,
    featured: false,
    relatedSkills: [
      "React",
      "Codeigniter",
      "PHP",
      "JavaScript",
      "Postgresql",
      "HTML5",
      "CSS",
      "Bootstrap",
    ],
  }),
] as const satisfies ProjectData[];

export const next = {
  name: getTranslationHandler("sections.projects.next.name"),
  headline: getTranslationHandler("sections.projects.next.headline"),
  description: getTranslationHandler("sections.projects.next.description"),

  preview: (await import("../assets/next/cover.png")).default,
  relatedSkills: ["AWS", "Docker", "Terraform", "TypeScript"],
} as const satisfies Partial<ProjectData>;
