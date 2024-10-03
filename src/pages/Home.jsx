import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fetchData, IMAGE_BASE_URL } from "../services/apiService";
import Loader from "../components/Loader";

const Home = () => {
  const [data, setData] = useState([]); // Data slider dari API
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk error
  const [activeIndex, setActiveIndex] = useState(0); // Index untuk gambar yang sedang aktif

  // Ambil data saat komponen di-mount
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true); // Mulai loading
        await new Promise((resolve) => setTimeout(resolve, 500)); // Simulasi delay

        const result = await fetchData("home"); // Ambil data dari endpoint home
        setData(result.slider); // Simpan data slider dari API ke state
      } catch (error) {
        console.error("Error fetching data", error);
        setError(error.message); // Simpan pesan error ke state
      } finally {
        setLoading(false); // Selesai loading
      }
    };
    getData();
  }, []);

  // Tampilkan loader jika sedang loading
  if (loading) {
    return <Loader />;
  }

  // Tampilkan pesan error jika ada
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Fungsi untuk menangani klik thumbnail
  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Header />
      <div className="mx-14">
        <div className="slider-container">
          {/* Gambar Aktif */}
          <div className="active-image w-full">
            {data.length > 0 && (
              <img
                src={`${IMAGE_BASE_URL}/${data[activeIndex].banner}`}
                alt={data[activeIndex].title}
                className="fade-in"
              />
            )}
          </div>

          {/* Thumbnail */}
          <div className="flex justify-center bg-slate-300 py-2">
            {data.map((item, index) => (
              <img
                key={item.id}
                src={`${IMAGE_BASE_URL}/${item.brand}`}
                alt={item.title}
                className={`thumbnail ${index === activeIndex ? "active" : ""}`}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
