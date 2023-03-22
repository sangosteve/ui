"use client";
import React, { useState } from "react";
import { Button, Badge } from "./components/ui";
import Grid from "./components/ui/Grid/Grid";
import { Input } from "./components/ui/Input";
import Text from "./components/ui/Text";
export default function Home() {
  const initialValues = {
    name: "",
    surname: "",
    description: "",
    selling_price: 0,
    purchase_price: "",
    category_id: "",
    type_id: "",
    user_id: "",
  };
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e: any) => {
    const name = e.target.name || "";
    const value = e.target.value;

    setValues({
      ...values,
      [name]: value,
    });
  };
  const submitData = async (e: any) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <div className="w-screen h-screen">
      <Badge variant="light" intent="warning">
        Test
      </Badge>
      <div className="w-full">
        <form className="w-8/12" onSubmit={submitData}>
          <Grid>
            <Grid.Item gutter={16} cols={12}>
              Radio Btns
            </Grid.Item>
            <Grid.Item gutter={16} cols={3}>
              <Input
                name="name"
                value={values.name}
                onChange={handleInputChange}
                label="Name"
                required
              />
            </Grid.Item>
            <Grid.Item gutter={16} cols={3}>
              <Input
                name="surname"
                value={values.surname}
                onChange={handleInputChange}
                label="Surname"
                required
              />
            </Grid.Item>
            <Grid.Item gutter={16} cols={3}>
              <Input
                type={"number"}
                name="selling_price"
                value={values.selling_price}
                onChange={handleInputChange}
                label="Selling Price"
                required
              />
            </Grid.Item>
            <Grid.Item gutter={16} cols={3}>
              <Input
                type={"number"}
                name="selling_price"
                value={values.selling_price}
                onChange={handleInputChange}
                label="Selling Price"
                required
              />
            </Grid.Item>
            <Grid.Item gutter={16} cols={12}>
              <small className="text-success-600 text-title"> Text Test</small>
              {/* <Button type="submit">Submit</Button> */}
            </Grid.Item>
          </Grid>
        </form>
      </div>
    </div>
  );
}
