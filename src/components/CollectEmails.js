import React from "react";
import { Formik, Field, Form } from "formik";
import Copyright from "./shared/Copyright";
import logo from "../assets/images/ablestate-logo.jpg";
import { supabase } from "../supabaseClient";
function CollectEmails() {
    const [saving, setSaving] = React.useState(false);
    const [saved, setSaved] = React.useState(false);
  React.useEffect(async () => {
    document.title = "Sign up to Remote Teams Early Access";
  }, []);

  const createEmail = async (values) => {
    setSaving(true);
    const { email } = values;
    const { data, error } = await supabase
      .from("leads")
      .insert([{ email: email, interest: "Teams" }]);
    return { success: data, error: error };
  };
  return (
    <div className="container grow h-screen flex flex-col justify-center space-between mx-auto p-4  text-sm">
      <div className="align-center leading-6 mb-4 grow-0">
        <a href="https://theablestate.com" target="_blank">
          <img src={logo} alt="Ablestate logo" className="w-16 mx-auto my-5" />
        </a>
      </div>
      <div className="text-center flex flex-col justify-center grow">
        {saving ? (
          <div className="text-center">
            <h1 className="text-blue-500">Saving...</h1>
          </div>
        ) :
          saved ? (<h1 className="text-green-600 text-xl">You've successfully joined the Waiting list.</h1>):(
              <>
                <h1 className="text-xl uppercase mb-8">
                <b>Get Early Access to Remote Teams</b>
                </h1>
            <Formik
              initialValues={{ email: "" }}
              onSubmit={async (values) => {
                const { success, error } = await createEmail(values);
                if (success || error) setSaving(false);
                if (success) setSaved(true);
                console.log(success);
                console.log(error);
              }}
            >
              <Form className="w-auto mx-auto max-w-sm">
                <div className="flex items-center border-b border-orange-500 py-2">
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
          </>
        )}
      </div>
      <div className="text-center leading-6 my-4 grow-0">
        <p>
          Follow us{" "}
          <a
            href="https://twitter.com/theablestate"
            className="text-orange-500 hover:text-orange-700"
          >
            Twitter
          </a>{" "}
          <a
            href="https://facebook.com/theablestate"
            className="text-orange-500 hover:text-orange-700"
          >
            Facebook
          </a>{" "}
          <a
            href="https://instagram.com/theablestate"
            className="text-orange-500 hover:text-orange-700"
          >
            Instagram
          </a>
        </p>
        <Copyright />
      </div>
    </div>
  );
}

export default CollectEmails;
