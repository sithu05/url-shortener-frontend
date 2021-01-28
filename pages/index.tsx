import { useState } from 'react'

import { SuccessURLCard } from '../components/SuccessURLCard'
import { URLForm } from '../components/URLForm'
import { API } from '../lib/axios'
import { ShortUrl } from '../types/ShortUrl'

export const Home = (): JSX.Element => {
	const [data, setData] = useState<ShortUrl>(null)

	function handleFormSubmit({ url, expiry }) {
		API.post<ShortUrl>('short_urls', { url, expiry: expiry || null })
			.then(({ data }) => {
				setData(data)
			})
			.catch(({ response }) => {
				console.log(response)
			})
	}

	return (
		<div className="container">
			<main>
				<h1 className="p-4 mb-4 text-center">URL Shortener</h1>

				{data ? (
					<SuccessURLCard data={data} />
				) : (
					<URLForm onSubmit={handleFormSubmit} />
				)}
			</main>
		</div>
	)
}

export default Home
