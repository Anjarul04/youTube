import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import RecomendVideos from './RecomendVideos';

const SearchedResult = () => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search_query')
    const [searchedRes, setSearchedRes] = useState([]);
    
    useEffect(()=>{
        getSearchedRes();
    },[searchQuery]);
    const getSearchedRes = async ()=>{
        const data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchParams.get("search_query")}&type=video&key=AIzaSyBEkO2ot4Cdh7SuJH9lPGXJo3asFIfhrGo`);
        const json = await data.json();
        console.log(json.items);
        setSearchedRes(json.items || []);
    }
    
    if(searchedRes.length === 0) return <p>...Loading</p>
  return (

    <div className='w-full'>
        {searchedRes.map((video,index)=><Link key={index} to={"/watch?v=" + video.id.videoId} ><RecomendVideos   video={video}/></Link>)}
    </div>
  )
}

export default SearchedResult