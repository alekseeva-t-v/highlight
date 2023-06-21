const Video = (props) => {
  const { url, views } = props;
  return (
    <div className="item item-video">
      <iframe src={url} title={url} allow="autoplay; encrypted-media"></iframe>
      <p className="views">Просмотров: {views}</p>
    </div>
  );
};

export default Video;
