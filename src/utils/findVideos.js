import axios from "axios";

const findVideos = async (id, media_type) => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=d0cbf774321eda288e9defb5ec796daf&language=en-US`)
    
    console.log(data)

    return data;
  };
export default findVideos;