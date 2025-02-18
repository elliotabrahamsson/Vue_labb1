import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const data = ref([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:5000/MrOlympias");
    data.value = response.data;
    console.log(data.value);

    await axios
      .get("http://localhost:5000/MrOlympias/Picture", {
        responseType: "blob",
      })
      .then((response) => {
        const ImageUrl = URL.createObjectURL(response.data);
        console.log(ImageUrl);
        document.getElementById("olympianImage").src = ImageUrl;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return { data, fetchData };
});
