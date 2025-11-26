const GalleryImage = ({ data }) => {
  const { images } = data;

  return (
    images && (
      <div className="grid grid-cols-1 gap-x-5 gap-y-10 pt-6 md:grid-cols-2">
        {images.map((img) => (
          <div
            key={img.id}
            className={`${img.orientation === "landscape" ? "col-span-1 md:col-span-2" : "col-span-1"}`}
          >
            <img src={img.path} alt="foto" loading="lazy" />
          </div>
        ))}
      </div>
    )
  );
};

export default GalleryImage;
