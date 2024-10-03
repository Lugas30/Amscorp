const API_URL = "https://amsgroup.queensland.id/api";

// Base URL untuk gambar
export const IMAGE_BASE_URL = "https://amsgroup.queensland.id/storage";

// Fungsi untuk mengambil data
export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch data failed", error);
    throw error;
  }
};

// Fungsi untuk mengirim data (POST)
export const postData = async (endpoint, payload) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Post data failed", error);
    throw error;
  }
};

// Fungsi untuk mengupdate data (PUT)
export const updateData = async (endpoint, payload) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Update data failed", error);
    throw error;
  }
};

// Fungsi untuk menghapus data (DELETE)
export const deleteData = async (endpoint) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.status;
  } catch (error) {
    console.error("Delete data failed", error);
    throw error;
  }
};
