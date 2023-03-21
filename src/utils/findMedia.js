import axios from "axios";

const findMedia = async(id,media_type)=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=d0cbf774321eda288e9defb5ec796daf&language=en-US`)
    return data;
}

export default findMedia;