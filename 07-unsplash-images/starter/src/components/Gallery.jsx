import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "../contexts/context";

const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`;

const Gallery = () => {
  const { searchQuery } = useGlobalContext();

  const response = useQuery({
    queryKey: ["images", searchQuery],
    queryFn: async () => {
      const res = await axios.get(`${url}&query=${searchQuery}&per_page=30`);
      return res.data;
    },
  });

  const { data, isLoading, isError } = response;

  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="image-container">
        <h4>Error...</h4>
      </section>
    );
  }

  const images = data.results;

  if (images.length < 1) {
    return (
      <section className="image-container">
        <h4>No images found</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {images.map((image) => (
        <img
          key={image?.id}
          src={image?.urls?.small}
          alt={image.alt_description}
          className="img"
        />
      ))}
    </section>
  );
};

export default Gallery;
