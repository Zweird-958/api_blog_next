import clsx from "clsx"

const TitleForm = (props) => {
  const { children, className, ...otherProps } = props

  return (
    <p
      className={clsx("text-lg font-bold text-blue-500", className)}
      {...otherProps}
    >
      {children}
    </p>
  )
}

export default TitleForm
