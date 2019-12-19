import React from "react";
import { postImage } from "../clientAPI";

class UploadImageForm extends React.Component {
  state = {
    resultMessage: ""
  };

  handleUploadImage = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    postImage(formData).then(postImageResponse => {
      this.setState({ resultMessage: "Upload Successful" });
    });
  }
  render() {
    return (
      <>
      <form onSubmit={this.handleUploadImage}>
        <input type="file" name="image"/>
        <input type="submit" value="Upload Image" />
      </form>
      {this.state.resultMessage && this.state.resultMessage}
      </>
    );
  }
}

export default UploadImageForm
