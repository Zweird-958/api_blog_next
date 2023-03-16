import clsx from "clsx"
import { ErrorMessage, Field as FieldFormik } from "formik"

const Field = (props) => {
  const { name, placeholder, className } = props

  return (
    <div className="flex w-3/4 flex-col gap-1">
      <FieldFormik
        name={name}
        placeholder={placeholder}
        className={clsx(
          "rounded border-2 border-blue-600 px-2 py-1",
          className
        )}
      />
      <ErrorMessage
        name={name}
        component="span"
        className="text-sm text-red-500"
      />
    </div>
  )
}

export default Field
