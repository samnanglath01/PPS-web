import 'bootstrap/dist/css/bootstrap.css';
import './test.css';
import { useEffect, useState } from 'react';
import CardMovie from './card/CardMovie';
//21a2c656
export default function Test(){
    const API_URL="http://www.omdbapi.com/?i=tt3896198&apikey=21a2c656";
    const [movies,setMovies]=useState([]);
    const [searchTerm,setSearchTerm]=useState("");

    const searchMovie=async(title)=>{
        const response=await fetch(`${API_URL}&s=${title}`);
        const data=await response.json();
        setMovies(data.Search);
        console.log(data)
    }
    useEffect(()=>{
        searchMovie('spiderman'); 
           
    },[])

    return (
        <div className="test container bg-dark d-flex text-center justify-content-center gap-3 flex-column p-3">
            <div className="row d-flex justify-content-center gap-3 m-3 w-100">
                <h1 className='color-light col-12 text-light'>Movie Land</h1>
                <div className='search col-12 d-flex flex-row align-items-center gap-2'>
                    <input value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} type="text " className='form form-control' placeholder='search for movies'/> 
                    <div onClick={()=>{searchMovie(searchTerm)}} className=' btn bg-light'><i className='fa-solid fa-search'></i></div>
                </div>
            </div>
            <div className="row d-flex row-gap-5">
                {
                    movies?.length>0? 
                    (

                        movies.map((movie,i)=>{
                            return(
                                <div key={i} className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                    <CardMovie movie={movie}/>
                                </div>
                            )
                        })
                        
                    ) :
                    (
                        <div className="empty">
                            <h2>No Movies</h2>
                        </div>
                    )
                }
                
            </div>
        </div>
    )
}