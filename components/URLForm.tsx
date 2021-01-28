import { Formik, Form, Field, ErrorMessage } from 'formik'
import { FC } from 'react'
import * as Yup from 'yup'

type FormValues = {
	url: string
	expiry?: number
}

type Props = {
	onSubmit: (values: FormValues) => void
}

const ValidationSchema = Yup.object().shape({
	url: Yup.string().required('URL is required').url('URL must be a valid'),
	expiry: Yup.number().moreThan(-1, 'Need more than -1 minute'),
})

export const URLForm: FC<Props> = ({ onSubmit }) => {
	const initialValues: FormValues = {
		url: '',
		expiry: 0,
	}

	return (
		<Formik
			initialValues={initialValues}
			enableReinitialize={true}
			validationSchema={ValidationSchema}
			onSubmit={onSubmit}
		>
			{({ touched, errors }) => {
				return (
					<Form>
						<div className="form-group">
							<label htmlFor="url">URL</label>
							<Field
								type="text"
								className={`form-control ${
									touched.url && errors.url
										? 'is-invalid'
										: ''
								}`}
								id="url"
								name="url"
							/>
							<ErrorMessage name="url">
								{(msg) => (
									<div className="invalid-feedback">
										{msg}
									</div>
								)}
							</ErrorMessage>
						</div>

						<div className="form-row">
							<div className="form-group col-md-4">
								<label htmlFor="expiry">
									Expiry minute(s) (optional)
								</label>
								<Field
									type="number"
									className={`form-control ${
										touched.expiry && errors.expiry
											? 'is-invalid'
											: ''
									}`}
									id="expiry"
									name="expiry"
								/>
								<ErrorMessage name="expiry">
									{(msg) => (
										<div className="invalid-feedback">
											{msg}
										</div>
									)}
								</ErrorMessage>
							</div>
						</div>

						<button type="submit" className="btn btn-primary">
							Convert
						</button>
					</Form>
				)
			}}
		</Formik>
	)
}
