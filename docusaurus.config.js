/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'The ultimate Shakespeare collection',
  tagline: 'All plays and sonnets written by Shakespeare archived on one website.',
  url: 'https://stevenkoerts.nl',
  baseUrl: '/The-ultimate-shakespeare-collection/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Steven24K', // Usually your GitHub org/user name.
  projectName: 'The ultimate Shakespeare collection', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Shakespeare Wiki',
      logo: {
        alt: 'My Site Logo',
        src: '../img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Plays',
        },
        {to: '/about', label: 'About', position: 'left'},
        {to: '/fun', label: 'Funny links', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Steven24K',
          label: 'GitHub',
          position: 'right',
        },
        {href: 'https://nl.wikipedia.org/wiki/William_Shakespeare', label: 'Wikipedia', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Plays',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Sonnets',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `My by Steven K © ${new Date().getFullYear()} to experiment with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
