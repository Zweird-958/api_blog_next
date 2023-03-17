import Field from "@/web/components/Field"
import Form from "@/web/components/Form"
import Page from "@/web/components/Page"
import SubmitButton from "@/web/components/SubmitButton"

const Home = () => {
  return (
    <Page>
      <Form className="mx-auto">
        <Field name="post" component="textarea" />
        <SubmitButton>Créer post</SubmitButton>
      </Form>
      <div className="my-2 flex">
        <div className="mx-auto h-32 w-2/3 rounded bg-blue-100 md:w-2/5">
          <p>DATE</p>
          <p>Content</p>
        </div>
      </div>
      <p className="text-center">HOME PAGE</p>
    </Page>
  )
}

export default Home
