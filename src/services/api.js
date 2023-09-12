import axios from "axios";



export const fetchTranslationText = async id => {
  try {
    const response = await axios.get(
      `https://api.alquran.cloud/v1/surah/${id}/uz.sodik`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching translation text:", error);
    throw error;
  }
};

export const fetchArabicText = async id => {
  try {
    const response = await axios.get(
      `https://api.alquran.cloud/v1/surah/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Arabic text:", error);
    throw error;
  }
};

export const fetchArabicAudio = async id => {
  try {
    const response = await axios.get(
      `https://api.alquran.cloud/v1/surah/${id}/ar.alafasy`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Arabic audio:", error);
    throw error;
  }
};
