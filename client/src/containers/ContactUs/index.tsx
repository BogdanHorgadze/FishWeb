import { TextareaAutosize, TextField } from "@material-ui/core";
import axios from "axios";
import { Field, FieldProps, Formik } from "formik";
import React, { memo } from "react";

import styles from "./styles.module.scss";

const ContactUs = () => {
  const initialValues = {
    email: "",
    text: "",
  };

  const onSubmit = async (value: { email: string; text: string }) => {
    await axios.post("http://localhost:5000/api/contact-us", { ...value });
  };
  return (
    <div className={styles.root}>
      <h1>Contact Us</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        render={({ handleSubmit, values, setFieldValue }) => (
          <form onSubmit={handleSubmit} className={styles["from-wrapper"]}>
            <Field name="email">
              {({ field }: FieldProps) => (
                <TextField
                  required
                  type="text"
                  name="Email"
                  label="Email"
                  variant="outlined"
                  className={styles.input}
                  value={values.email}
                  onChange={(e: any) => {
                    setFieldValue(field.name, e.target.value);
                  }}
                />
              )}
            </Field>
            <Field name="text">
              {({ field }: FieldProps) => (
                <TextareaAutosize
                  required
                  style={{ minHeight: "100px" }}
                  value={values.text}
                  onChange={(e: any) => {
                    setFieldValue(field.name, e.target.value);
                  }}
                />
              )}
            </Field>
            <button className={styles.button} type="submit">
              Contact
            </button>
          </form>
        )}
      />
    </div>
  );
};

export default memo(ContactUs);
