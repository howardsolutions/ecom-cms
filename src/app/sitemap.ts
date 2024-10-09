import type { MetadataRoute } from 'next'

import type { Product } from '../payload/payload-types'
import { fetchDocs } from './_api/fetchDocs'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await fetchDocs<Product>('products')

  const productEntries = products?.map(({ slug }) => ({
    url: `${process.env.NEXT_PUBLIC_SERVER_URL}/product/${slug}`,
  }))

  return [
    {
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}/product`,
      lastModified: new Date(),
    },
    ...productEntries,
  ]
}
