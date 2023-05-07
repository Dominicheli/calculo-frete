import { Field, Form, Formik } from "formik";
import InputMask from "react-input-mask";
import "./App.css";

function App() {
  function sendData(values: {
    name: string;
    email: string;
    originCep: string;
    destinyCep: string;
  }) {
    console.log(values);
  }

  return (
    <>
      <div>
        <header>
          <h1>Calcule o FRETE</h1>
        </header>
        <div>
          <h3>Digite os dados abaixo</h3>
          <Formik
            initialValues={{
              name: "",
              email: "",
              originCep: "",
              destinyCep: "",
            }}
            onSubmit={(values) => {
              sendData(values);
            }}
          >
            <Form>
              <div className="input-group">
                <label htmlFor="name">Nome</label>
                <Field
                  id="name"
                  name="name"
                  placeholder="Digite seu nome completo"
                />
              </div>

              <div className="input-group">
                <label htmlFor="email">Email</label>
                <Field id="email" name="email" placeholder="nome@dominio.com" />
              </div>

              <div className="input-group">
                <label htmlFor="originCep">CEP Origem</label>
                <Field name="originCep">
                  {({ field }) => (
                    <InputMask
                      {...field}
                      id="originCep"
                      mask="99999-999"
                      placeholder="Digite o CEP de origem"
                    />
                  )}
                </Field>
              </div>
              <div className="input-group">
                <label htmlFor="destinyCep">CEP Destino</label>
                <Field name="destinyCep">
                  {({ field }) => (
                    <InputMask
                      {...field}
                      id="destinyCep"
                      mask="99999-999"
                      placeholder="Digite o CEP de origem"
                    />
                  )}
                </Field>
              </div>

              <button className="button-style" type="submit">
                Submit
              </button>
            </Form>
          </Formik>
          {/* <div>
            <label className="label-style">
              <span>Seu CEP</span>
              <input />
            </label>
            <label className="label-style">
              <span>CEP do destino</span>
              <input />
            </label>
            <label className="label-style">
              <span>Medidas da caixa</span>
              <input />
            </label>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
