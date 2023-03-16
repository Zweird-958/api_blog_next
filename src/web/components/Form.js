import { Formik, Form as FormFormik } from "formik"

const Form = (props) => {
  const { children, ...otherProps } = props

  return (
    <Formik {...otherProps}>
      <FormFormik
        noValidate
        className="flex w-3/4 flex-col items-center justify-center gap-4 rounded border-2 border-gray-200 p-4 shadow-lg sm:w-6/12 lg:w-3/12"
      >
        {children}
      </FormFormik>
    </Formik>
  )
}

export default Form
