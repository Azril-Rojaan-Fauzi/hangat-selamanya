const GalleryImage = ({ data }) => {
  const { images } = data;

  return (
    images && (
      <div className="columns-1 gap-4 pt-6 md:columns-2">
        {images.map((path, index) => (
          <img key={index} src={path} className="mb-4 w-full" loading="lazy" />
        ))}
      </div>
    )
  );
};

export default GalleryImage;
