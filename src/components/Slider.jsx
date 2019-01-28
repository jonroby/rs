import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";

class Slider extends Component {
  render() {
    const images = this.props.images.map(i => ({
      original: i.url,
      thumbnail: i.urlSmall
    }));

    return images.length > 0 ? (
      <ImageGallery showPlayButton={false} items={images} />
    ) : (
      <div>No images to show</div>
    );
  }
}

export default Slider;
