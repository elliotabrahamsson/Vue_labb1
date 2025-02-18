import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const data = ref(null);
  const ImageUrl = ref(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/MrOlympias");
      data.value = response.data;
      console.log(data.value);

      const imageResponse = await axios.get(
        "http://localhost:5000/MrOlympias/Picture",
        {
          responseType: "blob",
        }
      );

      const ImageObjectUrl = URL.createObjectURL(response.data);
      ImageUrl.value = ImageObjectUrl;
      console.log(ImageUrl.value);
      document.getElementById("olympianImage").src = ImageUrl;
    } catch (error) {
      console.log(error);
    }
  };
  return { data, fetchData };
});
