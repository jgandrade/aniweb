import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

const EmptyDiv = () => <div className="hidden"></div>;
const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <div>
      <MediaPlayer src={videoUrl} autoPlay>
        <MediaProvider />
        <DefaultVideoLayout
          icons={defaultLayoutIcons}
          slots={{
            smallLayout: {
              pipButton: <EmptyDiv />,
              googleCastButton: <EmptyDiv />,
            },
            largeLayout: {
              pipButton: <EmptyDiv />,
              googleCastButton: <EmptyDiv />,
            },
          }}
        />
      </MediaPlayer>
    </div>
  );
};

export default VideoPlayer;
