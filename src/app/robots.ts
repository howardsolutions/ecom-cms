import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*', // specify which crawler to target, since we target everything, it is "*"
        allow: '/', // we allow every page
        disallow: ['/admin'], // we don't want the admin site show up in GG
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  }
}
