import React from "react";
import PropTypes from "prop-types";
import "assets/css/custom.css";

const YoutubeEmbed = ({ embedId, sound, autoplay }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}?autoplay=${autoplay}&loop=1&rel=0&showinfo=0&color=white&mute=${sound}&iv_load_policy=3&playlist=${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
  //   <div class="d-flex justify-content-center embed-responsive embed-responsive-16by9">
  //     <iframe
  //       class="embed-responsive-item"
  //       title="Embedded youtube"
  //       allowFullScreen={true}
  //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //       src={`https://www.youtube.com/embed/${embedId}`}
  //     ></iframe>
  //   </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
