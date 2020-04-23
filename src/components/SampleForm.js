import React, { useState, useRef } from "react";
import { TextInput } from "./TextInput";
import { FileInput } from "./FileInput";
import { DateInput } from "./DateInput";

export function SampleForm(props) {
  const [taskId, setTaskId] = useState("");
  const [collectedDate, setCollectedDate] = useState(null);
  const imageTifInput = useRef(null);
  const indexedTifInput = useRef(null);
  const legendInput = useRef(null);

  const alertErrors = () => {
    if (!imageTifInput.current || !imageTifInput.current.files[0]) {
      alert("whoops, remember to choose an image tif file");
      return true;
    }

    if (!indexedTifInput.current || !indexedTifInput.current.files[0]) {
      alert("whoops, remember to choose an indexed tif file");
      return true;
    }

    if (!legendInput.current || !legendInput.current.files[0]) {
      alert("whoops, remember to choose a legend file");
      return true;
    }

    return false;
  };

  const handleSubmit = (e) => {
    // preventDefault, so that the page doesn't refresh
    e.preventDefault();

    if (alertErrors()) return;

    /* 
      You can can instantiate an empty FormData object 
      and then fill it using append(). 
      The three arguments to append are 
      the key (equivalent to the name field on an input), 
      the file itself, 
      and an optional third argument for the filename. 
    */
    const formData = new FormData();
    formData.append("collectedDate", collectedDate);

    const imageTif = imageTifInput.current.files[0];
    formData.append("imageTif", imageTif, imageTif.name);

    const indexedTif = indexedTifInput.current.files[0];
    formData.append("indexedTif", indexedTif, indexedTif.name);

    const legend = legendInput.current.files[0];
    formData.append("legend", legend, legend.name);

    /* 
      Once the FormData object has all the proper data, 
      send an API request 
      (this example uses the broswer fetch API but any method will be fine) 
    */
    fetch(
      `http://localhost:3000/api/v1/tasks/${taskId}/collection_with_files`,
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
          Authorization: `Token ${process.env.REACT_APP_AUTHORIZATION_TOKEN}`,
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        name="taskId"
        value={taskId}
        placeholder="whatevs"
        onChange={(e) => setTaskId(e.target.value)}
      />
      <DateInput
        name="collectedDate"
        value={collectedDate}
        onChange={(date) => setCollectedDate(date)}
      />
      <FileInput name="imageTif" inputRef={imageTifInput} />
      <FileInput name="indexedTif" inputRef={indexedTifInput} />
      <FileInput name="legend" inputRef={legendInput} />
      <button
        type="submit"
        disabled={!taskId || !collectedDate ? "disabled" : null}
      >
        Submit
      </button>
    </form>
  );
}
