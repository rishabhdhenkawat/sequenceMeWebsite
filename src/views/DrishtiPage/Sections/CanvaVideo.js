import React from "react";

const CanvaVideo = ({ embedId }) => {
  return (
    <div className="container">
      <div className="video-responsive">
        <iframe
          width="830"
          height="470"
          src={`https://www.canva.com/design/${embedId}/view?embed`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>
  );
};

export default CanvaVideo;
