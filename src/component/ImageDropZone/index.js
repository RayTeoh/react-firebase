import React, { Component } from "react";
import Dropzone from "react-dropzone";
import "./ImageDropZone.css";

class ImageDropZone extends Component {
  
  onDrop = files => {
    //api action
  };

  render() {
    return (
      <Dropzone onDrop={this.onDrop} accept="image/jpeg, image/png">
        {({ getRootProps, getInputProps }) => (
          <section className="container">
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
              <em>(Only *.jpeg and *.png images will be accepted)</em>
            </div>
          </section>
        )}
      </Dropzone>
    );
  }
}

export default ImageDropZone;
