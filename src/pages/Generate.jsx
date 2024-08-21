import { useState } from "react";
import Title from "../components/Title";
import Loading from "./Loading";

const Generate = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(e.target.prompt.value);
    const form = new FormData();
    form.append("prompt", e.target.prompt.value);

    fetch("https://clipdrop-api.co/text-to-image/v1", {
      method: "POST",
      headers: {
        "x-api-key":
          "f2f895b187d72d4ae414127a69200eac032460d1e70f5f85006eb82b09c4bd58a9a29abbb1ac1c12482505c0a27b8ceb",
      },
      body: form,
    })
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        console.log(buffer);
        const blob = new Blob([buffer], { type: "image/jpeg" });
        const image_url = URL.createObjectURL(blob);
        setImages([image_url, ...images]);
        setLoading(false);
      });
  };
  if(loading) return <Loading></Loading>
  return (
    <div className="container">
      <Title>Generate Paintings</Title>

      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap justify-center gap-2 mt-10"
      >
        <input
          type="text"
          name="prompt"
          placeholder="what kind of painting do you need"
          className="input input-bordered w-10/12"
        />
        <button className="btn btn-primary ">Generate</button>
      </form>
      <div className="grid lg:grid-cols-4 gap-5 mt-10">
        {images.map((image) => (
          <div>
            <img className="border-8 w-full p-5 " src={image} alt="" />
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default Generate;
