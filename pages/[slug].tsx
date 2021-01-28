import { GetServerSideProps } from 'next'
import { API } from '../lib/axios'
import { ShortUrl } from '../types/ShortUrl'

export const Detail = () => {
	return (
		<div className="container">
			<h1>coming soon</h1>
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { slug } = context.params

	const { data } = await API.get<ShortUrl>('short_urls/' + slug)

	if (data) {
		context.res.writeHead(302, {
			Location: data.url,
		})
		context.res.end()
	} else {
		return {
			props: {},
		}
	}
}

export default Detail
