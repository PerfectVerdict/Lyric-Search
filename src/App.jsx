import './App.css';
import Axios from 'axios';
import { useState } from 'react';
function App() {
    const [artist, setartist] = usestate("");
    const [song, setsong] = usestate("");
    const [lyrics, setlyrics] = usestate("");

    function searchlyrics() {
        if (artist === "" || song === "") {
            return;
        }
        axios.get(
            `https://api.lyrics.ovh/v1/${artist}/${song}`).then(res => {
            console.log(res.data.lyrics);
            setlyrics(res.data.lyrics);
        })
    }

    return (
   <> 
      <div classname="container flex min-h-screen min-w-screen">
        <div classname="flex w-full flex-col text-center justify-center border border-green-400">

              <h1 classname="text-white mb-5 mt-5">lyrics finder</h1>
{/* responiveness */}
            <div classname="flex flex-col sm:flex-row justify-center mb-4 sm:space-x-4">            
                <input classname="p-2 m-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" 
                placeholder='artist name'
                onchange={(e) => { setartist(e.target.value) }} />
                <input classname="p-2 bp-2 m-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" 
                placeholder='song name'
                onchange={(e) => { setsong(e.target.value) }} />
            </div>
            <div classname="flex justify-center pb-5">
            <button classname="w-32 bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent pb-5 rounded" 
                  onclick={() => searchlyrics()}>
                    search</button>
                    </div>
          {/* responiveness */}

           <div classname="flex justify-center w-full">
          <pre classname="lyrics w-full">{lyrics}</pre>
        </div>
        </div>
        </div>
             </>
    );
}

export default App;

