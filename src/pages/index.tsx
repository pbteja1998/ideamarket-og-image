import { useState } from 'react'
import { NextSeo } from 'next-seo'

export default function Related() {
  const title = 'Ideamarket – Credibility without corporations'
  const description =
    'Vote with your dollars, and give underrated voices the visibility they deserve.'
  const url = 'https://ideamarket-og-image.vercel.app'
  const [name, setName] = useState('elonmusk')
  const [market, setMarket] = useState<'twitter' | 'substack'>('twitter')
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          images: [
            {
              url: `${url}/api/twitter/elonmusk.png`,
              width: 1200,
              height: 675,
              alt: 'Ideamarket',
            },
          ],
          site_name: 'Ideamarket',
        }}
        twitter={{
          handle: '@pbteja1998',
          site: '@ideamarkets_',
          cardType: 'summary_large_image',
        }}
      />
      <div
        className="flex justify-center"
        style={{ backgroundColor: '#021f5d' }}
      >
        <img
          src={`/api/${market}/${name}.png`}
          alt={name}
          className="inset-0 sm:h-72"
        />
      </div>
      <div className="p-10">
        <div className="flex mb-10 flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="username"
                id="username"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="elonmusk"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Market
            </label>
            <select
              id="location"
              name="location"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              value={market}
              onChange={(e) => setMarket(e.target.value as any)}
            >
              <option value="twitter">Twitter</option>
              <option value="substack">Substack</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}
