import React from 'react';
import type { BubbleChatProps } from './BubbleChat.types';
import styles from './BubbleChat.module.css';

const imgMediaPreview = "https://via.placeholder.com/240x117";

export const BubbleChat: React.FC<BubbleChatProps> = ({
  className,
  customText = "Additional information",
  direction = "Incoming",
  errorStatusText = "Failed to send",
  fileMetadata = "2.4 MB",
  fileName = "document.pdf",
  imageMetadata = "3.4 MB",
  imageName = "image.jpg",
  incomingStatusText = "Received",
  incomingTimeText = "10:24 AM",
  outgoingStatusText = "Delivered",
  outgoingTimeText = "10:26 AM",
  showCustomText = false,
  showStatus = false,
  showTime = true,
  state = "Default",
  textMessage = "Message",
  type = "Text",
  videoMetadata = "24.8 MB • 01:08",
  videoName = "video.mp4"
}) => {
  const dirClass = direction === "Incoming" ? styles.incoming : styles.outgoing;
  const stateClass = state === "Error" ? styles.error : '';
  const typeClass = styles[`type-${type}`];
  
  const containerClasses = [
    styles.container,
    dirClass,
    stateClass,
    typeClass,
    type === "Text" ? styles['font-body'] : '',
    className
  ].filter(Boolean).join(' ');

  const themeTheme = state === 'Error' ? 'error' : direction.toLowerCase();

  return (
    <div className={containerClasses}>
      {["Image", "Video"].includes(type) && (
        <div className={`${styles.mediaPreview} ${styles[`type-${type}`]}`}>
          <img alt="" className={styles.mediaImage} src={imgMediaPreview} />
        </div>
      )}

      {type === "Text" && (
        <p className={`${styles.textMessage} ${styles[themeTheme]}`}>
          {textMessage}
        </p>
      )}

      {["File", "Image", "Video"].includes(type) && (
        <>
          <p className={`${styles.fileName} ${styles[themeTheme]}`}>
            {type === "File" ? fileName : type === "Image" ? imageName : videoName}
          </p>
          <p className={`${styles.metadata} ${styles[themeTheme]}`}>
            {type === "File" ? fileMetadata : type === "Image" ? imageMetadata : videoMetadata}
          </p>
        </>
      )}

      {showCustomText && (
        <p className={`${styles.metadata} ${styles[themeTheme]} ${direction === 'Incoming' && type === 'Text' ? styles.timeText : ''}`} style={direction === 'Incoming' && type === 'Text' ? {textAlign: 'right'} : {}}>
          {customText}
        </p>
      )}

      {(showStatus || showTime || state === 'Error') && (
        <div className={`${styles.statusContainer} ${styles[themeTheme]}`}>
          {(state === 'Error') ? (
            <p className={`${styles.statusText} ${styles.error}`}>{errorStatusText}</p>
          ) : showStatus ? (
            <p className={styles.statusText}>
              {direction === 'Incoming' ? incomingStatusText : outgoingStatusText}
            </p>
          ) : (
            <div style={{flex: '1 0 0'}} />
          )}

          {showTime && (
            <p className={`${styles.timeText} ${direction === 'Incoming' ? styles.incoming : ''}`}>
              {direction === 'Incoming' ? incomingTimeText : outgoingTimeText}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
