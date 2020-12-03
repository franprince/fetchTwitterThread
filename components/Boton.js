import { v4 as uuidv4 } from "uuid";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LaunchIcon from "@material-ui/icons/Launch";

export const Boton = (url) => {
  return url.url.includes("twitter") ? (
    <a
      className="mr-3 mt-2"
      href={url.url}
      target="_blank"
      key={uuidv4()}
      rel="noopener"
    >
      <TwitterIcon color="primary" />
    </a>
  ) : url.url.includes("instagram") ? (
    <a
      className="mr-3 mt-2"
      href={url.url}
      target="_blank"
      key={uuidv4()}
      rel="noopener"
    >
      <InstagramIcon color="secondary" />
    </a>
  ) : url.url ? (
    <a
      className="mr-3 mt-2"
      href={url.url}
      target="_blank"
      key={uuidv4()}
      rel="noopener"
    >
      <LaunchIcon />
    </a>
  ) : (
    ""
  );
};
