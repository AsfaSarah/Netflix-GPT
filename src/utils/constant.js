export const LOGO=
"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";


export const USER_AVATAR=
"https://occ-0-3241-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7";



export const API_OPTIONS= {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer'+process.env.REACT_APP_TMDB_KEY,
    }
  };
