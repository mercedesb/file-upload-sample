import React, { useState } from "react";
import { TextInput } from "./TextInput";
import { FileInput } from "./FileInput";

export function SampleForm(props) {
  const [test, setTest] = useState("");

  const handleSubmit = () => {
    console.log("test:", null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        name="test"
        value={test}
        placeholder="whatevs"
        onChange={(e) => setTest(e.value)}
      />
      <FileInput name="file" />
      <button type="submit">Submit</button>
    </form>
  );
}
