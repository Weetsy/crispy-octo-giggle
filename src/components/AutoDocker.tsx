import React, { FunctionComponent, useEffect, useState } from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';

export const AutoDocker: FunctionComponent = () => {
  const [inputFile, setInputFile] = useState<HTMLInputElement | null>(null);
  useEffect(() => {
    setInputFile(document.getElementById("input-file") as HTMLInputElement);
  }, []);
  const uploadFile = () => {
    inputFile?.click();
    console.log(inputFile);
  }
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Welcome To The Auto Documentation Tool!</h1>
        <p>
          This tool provides an intuitive and simple way to document your project's code!
          Instructions for tool here sample text.
        </p>
        <input id="input-file" className='d-none' type="file" />
        <Button onClick={uploadFile}>
          Select Project Folder/File
        </Button>
      </Container>
    </Jumbotron>
  );
};
