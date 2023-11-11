import React from "react";
import styles from "./style.module.scss";

function ContentPage() {
  return (
    <div className={styles.contentPage}>
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/2uXlHiOE4o5xHOCiob8DKn?utm_source=generator"
        width="20%"
        height="352"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default ContentPage;
