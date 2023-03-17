import AppContext from "@/web/components/AppContext"
import Field from "@/web/components/Field"
import Form from "@/web/components/Form"
import Page from "@/web/components/Page"
import SubmitButton from "@/web/components/SubmitButton"
import TitleForm from "@/web/components/TitleForm"
import { useContext } from "react"
import * as yup from "yup"

const initialValues = {
  email: "",
  password: "",
}

const validationSchema = yup.object().shape({
  email: yup.string().email().required().label("E-mail"),
  password: yup.string().min(8).required().label("Password"),
})

const SignIn = () => {
  const {
    actions: { signIn },
  } = useContext(AppContext)

  const handleSubmit = async (values, { resetForm }) => {
    // console.log(values)
    const { email, password } = values
    const [err] = await signIn(email, password)

    if (!err) {
      resetForm()
    }
  }

  return (
    <Page>
      <div className="my-5 flex items-center justify-center px-5">
        <Form
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          <TitleForm>SIGN IN</TitleForm>
          <Field name="email" placeholder="E-mail ✉️" />
          <Field name="password" placeholder="Password 🔒" type="password" />
          <SubmitButton>SIGN IN</SubmitButton>
        </Form>
      </div>
    </Page>
  )
}

export default SignIn
