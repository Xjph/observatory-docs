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
    text: (
      <span>
        <a className="nx-text-primary-600 nx-underline" href="https://www.patreon.com/bePatron?u=74828821">Become a member on Patreon!</a>
        <br/>- or -<br/>
        <a className="nx-text-primary-600 nx-underline" href="https://www.paypal.com/donate/?hosted_button_id=XYQWYQ337TBP4">Donate via Paypal!</a>
      </span>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s'
    }
  },
  head: () => {
    const { frontMatter } = useConfig();
    return (
      <>
        <title>{frontMatter.title || 'Observatory Docs'}</title>
        <meta property="og:title" content={frontMatter.title || 'Observatory Docs'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Observatory Project Documentation'}
        />
      </>
    )
  }
}

export default config
