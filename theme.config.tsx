import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Elite Observatory</span>,
  project: {
    link: 'https://github.com/Xjph/ObservatoryCore',
  },
  chat: {
    link: 'https://discord.gg/RAFDHsY',
  },
  docsRepositoryBase: 'https://github.com/Xjph/observatory-docs/tree/main',
  footer: {
    text: '',
  },
  head: () => {
    const { frontMatter } = useConfig();
    return (
      <>
        <meta property="og:title" content={frontMatter.title || 'Observatory Docs'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Observatory Documentation Project'}
        />
      </>
    )
  }
}

export default config
