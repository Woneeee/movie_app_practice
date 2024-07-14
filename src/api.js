const fetch = require('node-fetch');

const baseUrl = 'https://api.themoviedb.org/3/';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGVmNTZkYWIzNmRiZmQ4NWRiNzIzMTkzYzZjNzIzNyIsIm5iZiI6MTcyMDkzNTcxMi4yNzE3NSwic3ViIjoiNjQ4NjlmODFjMDM0OGIwMTNjMWQ1Njc1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.uK--IMo9sczHX9tnMVAdd-YSt-U-tEb8nKQj_cgi3hc'
    }
}

const url = (urlName) => {
    return baseUrl + `${urlName}?language=ko-kr`;
}

export const nowPlaying = () => fetch(url('movie/now_playing'), options).then((res) => res.json());


