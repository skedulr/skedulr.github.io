// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Skedulr",
  tagline: "schedule the pain away",
  url: "https://skedulr-docs.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Skedulr",
  projectName: "skedulr.github.io",
  deploymentBranch: "gh-pages",

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          breadcrumbs: false,
        },
        blog: {
          showReadingTime: false,
          path: "feedback",
          routeBasePath: "feedback",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexPages: true,
        searchBarShortcut: false,
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
    "@docusaurus/theme-mermaid",
  ],
  markdown: {
    mermaid: true,
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        hideOnScroll: true,
        title: "Skedulr",
        logo: {
          alt: "Skedulr",
          src: "minlogo.png",
        },
        items: [
          {
            type: "doc",
            docId: "Design",
            position: "left",
            label: "Design",
          },
          {
            type: "doc",
            docId: "Docu/index",
            position: "left",
            label: "Docs",
          },
          {
            label: "About Us",
            to: "AboutUs",
            position: "right",
          },
          {
            href: "https://github.com/skedulr",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "More",
            items: [
              {
                label: "About Us",
                to: "AboutUs",
              },
              {
                label: "GitHub",
                href: "https://github.com/Skedulr",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Skedulr. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "dark",
      },
    }),
};

module.exports = config;
