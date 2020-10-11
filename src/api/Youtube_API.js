import axios from 'axios'

// const KEY = 'AIzaSyA_jEsAeTpTuOCg1W1C4P_AJ2PQmh-mgx4';
const KEY2 = 'AIzaSyBWR9ojGgL6CvRXpQ66ZLW6Dlx4_qPo4ok';
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3' ,
    params : {
        part: 'snippet',
        type: 'video',
        maxResults: 1,
        key:KEY2
    }
})