import picture from "../assets/image/picture.png";
import avatar2 from "../assets/image/avatar2old.png";

const Blob = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        filter: "drop-shadow(0 0 15px rgba(94, 194, 214, 0.5))",
      }}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
        <clipPath id="blobClip">
          <path
            d="M46,-73.4C58.2,-63.7,65.9,-48.6,68.2,-33.9C70.6,-19.3,67.7,-5,66.9,10.5C66,26,67.2,42.6,59.9,52.7C52.5,62.9,36.5,66.4,21.1,70.2C5.7,73.9,-9.2,77.9,-23.4,75.6C-37.6,73.3,-51.1,64.6,-58.9,52.7C-66.6,40.7,-68.6,25.4,-68.9,11.1C-69.2,-3.3,-67.7,-16.8,-61.7,-27.4C-55.6,-38,-44.9,-45.7,-33.9,-56C-22.9,-66.3,-11.4,-79.3,2.7,-83.6C16.9,-87.8,33.7,-83.2,46,-73.4Z"
            transform="translate(100 100)"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#blobClip)">
        <path
          fill="url(#gradient)"
          d="M46,-73.4C58.2,-63.7,65.9,-48.6,68.2,-33.9C70.6,-19.3,67.7,-5,66.9,10.5C66,26,67.2,42.6,59.9,52.7C52.5,62.9,36.5,66.4,21.1,70.2C5.7,73.9,-9.2,77.9,-23.4,75.6C-37.6,73.3,-51.1,64.6,-58.9,52.7C-66.6,40.7,-68.6,25.4,-68.9,11.1C-69.2,-3.3,-67.7,-16.8,-61.7,-27.4C-55.6,-38,-44.9,-45.7,-33.9,-56C-22.9,-66.3,-11.4,-79.3,2.7,-83.6C16.9,-87.8,33.7,-83.2,46,-73.4Z"
          transform="translate(100 100)"
        />
        <image href={picture} x="50" y="20" width="110" />
      </g>
    </svg>
  );
};

export const BlobAbout = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        filter: "drop-shadow(0 0 15px rgba(94, 194, 214, 0.5))",
      }}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
        <clipPath id="blob">
          <path
            d="M26.1,-44.7C36.2,-34.2,48.4,-30.9,50.1,-23.9C51.7,-16.8,42.8,-6,41,5.8C39.1,17.6,44.4,30.3,40.5,35.7C36.7,41.1,23.9,39.3,12.6,42.3C1.4,45.3,-8.3,53.1,-20.1,55.6C-32,58,-46.1,55.1,-54.7,46.6C-63.3,38.1,-66.3,24,-66.7,10.5C-67.2,-3,-65.1,-15.9,-59.3,-26.5C-53.5,-37.1,-44,-45.4,-33.5,-55.8C-23,-66.1,-11.5,-78.4,-1.7,-75.7C8,-73,16.1,-55.2,26.1,-44.7Z"
            transform="translate(100 100)"
          />
        </clipPath>
      </defs>
      <path
        fill="url(#gradient)"
        d="M26.1,-44.7C36.2,-34.2,48.4,-30.9,50.1,-23.9C51.7,-16.8,42.8,-6,41,5.8C39.1,17.6,44.4,30.3,40.5,35.7C36.7,41.1,23.9,39.3,12.6,42.3C1.4,45.3,-8.3,53.1,-20.1,55.6C-32,58,-46.1,55.1,-54.7,46.6C-63.3,38.1,-66.3,24,-66.7,10.5C-67.2,-3,-65.1,-15.9,-59.3,-26.5C-53.5,-37.1,-44,-45.4,-33.5,-55.8C-23,-66.1,-11.5,-78.4,-1.7,-75.7C8,-73,16.1,-55.2,26.1,-44.7Z"
        transform="translate(100 100)"
      />
      <image
        href={avatar2}
        width="160"
        x="15"
        y="36"
        clipPath="url(#blob)" // Apply the clip path to the image
      />
    </svg>
  );
};

export default Blob;
