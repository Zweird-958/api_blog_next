import Field from "@/web/components/Field"
import Form from "@/web/components/Form"
import SubmitButton from "@/web/components/SubmitButton"
import TitleForm from "@/web/components/TitleForm"
import api from "@/web/services/api"
import * as yup from "yup"

const initialValues = {
  name: "",
  email: "",
  password: "",
}

const validationSchema = yup.object().shape({
  name: yup.string().min(2).required().label("Name"),
  email: yup.string().email().required().label("E-mail"),
  password: yup.string().min(8).required().label("Password"),
})

const Home = () => {
  const handleSubmit = async (values) => {
    try {
      await api.post("/sign-up", values)
      // appelle la méthode POST du fichier sign-up
      // router.push("/sign-in");
    } catch (err) {
      // next year ;)
    }
  }

  return (
    <div className="my-5 flex items-center justify-center px-5">
      <Form
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <TitleForm>SIGN UP</TitleForm>
        <Field name="name" placeholder="Name 👨" />
        <Field name="email" placeholder="E-mail ✉️" />
        <Field name="password" placeholder="Password 🔒" />
        <SubmitButton>S'inscrire</SubmitButton>
      </Form>
    </div>
  )
}

export default Home
