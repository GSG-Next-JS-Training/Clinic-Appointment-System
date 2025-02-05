import React from "react";
import routeHOC from "../routes/HOCs/routeHOC";
import useForm from "./hooks/useLogin";
import ClinicTextField from "@clinic/component/text-field";
import { Form, FormikProvider } from "formik";

// eslint-disable-next-line react-refresh/only-export-components
const TestComponent: React.FC = () => {
  const { formik } = useForm();

  return (
    <FormikProvider value={formik}>
      <Form>
        <div>
          <label>Name:</label>
          <ClinicTextField type="text" name="name" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </FormikProvider>
  );
};

const withRoutHOC = routeHOC({
  title: "testcomponent",
  pageAccessName: "test-component",
});

export default withRoutHOC(TestComponent);