import { FC } from 'react'

import { ShortUrl } from '../types/ShortUrl'

type Props = {
	data: ShortUrl
}

export const SuccessURLCard: FC<Props> = ({ data }) => {
	return (
		<div className="alert alert-success">
			<h5>Short URL: {data.url}</h5>

			{data.duration && (
				<small>
					After {data.duration} minute(s), this url will be expired.
				</small>
			)}
		</div>
	)
}
