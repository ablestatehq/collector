import React from "react";
import { Formik, Field, Form } from "formik";
import Copyright from "./shared/Copyright";
import logo from "../assets/images/ablestate-logo.jpg";
function CollectEmails({ id }) {

  React.useEffect(async () => {
    document.title = "Sign up to Remote Teams Early Access";
  }, []);

  return (
    <div className="container grow h-screen flex flex-col justify-center space-between mx-auto p-4  text-sm">
      <div className="align-center leading-6 mb-4 grow-0">
        <a href="https://theablestate.com" target="_blank">
          <img src={logo} alt="Ablestate logo" className="w-16 mx-auto my-5" />
              </a>
            </div>
        <div className="text-center flex flex-col justify-center grow">
        <h1 className="text-xl uppercase mb-8">
          <b>Get Early Access to Remote Teams</b>
        </h1>
          <Formik
            initialValues={{ email: "" }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form className="w-auto mx-auto max-w-sm">
              <div class="flex items-center border-b border-orange-500 py-2">
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  placeholder="you@domain.com"
                  type="email"
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                />
                <button
                  className="flex-shrink-0 bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-sm border-4 text-white py-1 px-2 rounded"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="text-center leading-6 my-4 grow-0">
          <p>
            Follow us <a href="https://twitter.com/theablestate" className="text-orange-500 hover:text-orange-700">Twitter</a>{" "}
            <a href="https://facebook.com/theablestate" className="text-orange-500 hover:text-orange-700">Facebook</a>{" "}
            <a href="https://instagram.com/theablestate" className="text-orange-500 hover:text-orange-700">Instagram</a>
          </p>
          <Copyright />
        </div>
      </div>
  );
}

export default CollectEmails;
