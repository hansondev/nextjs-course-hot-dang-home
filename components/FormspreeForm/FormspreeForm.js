"use client";
import { Input } from "components/Input";
import { useForm, ValidationError } from "@formspree/react";

export const FormspreeForm = ({ formId }) => {
  console.log("FORM ID:", formId);
  const [state, handleSubmit] = useForm(formId);
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto my-5">
      <label htmlFor="email">Email Address</label>
      <Input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <div>
        <textarea
          id="message"
          name="message"
          className="border-black border-spacing-5"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <div>
        <button className="btn" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </div>
    </form>
  );
};
