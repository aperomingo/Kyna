import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.kynaobras.com'

  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/carpinteria', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/energia-fotovoltaica', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/iluminacion-ambiental', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/puertas-y-tarima', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/privacidad', priority: 0.5, changeFrequency: 'monthly' as const },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
