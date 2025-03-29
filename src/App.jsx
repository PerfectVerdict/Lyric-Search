import './App.css';
import Axios from 'axios';
import { useState } from 'react';
function App() {
    const [artist, setArtist] = useState("");
    const [song, setSong] = useState("");
    const [lyrics, setLyrics] = useState("");

    function searchLyrics() {
        if (artist === "" || song === "") {
            return;
        }
        Axios.get(
`https://api.lyrics.ovh/v1/${artist}/${song}`).then(res => {
            console.log(res.data.lyrics);
            setLyrics(res.data.lyrics);
        })
    }

    return (
   <> 
      <div className="container mx-auto p-8">
        <div className="flex flex-col text-center justify-center border border-green-400 w-full">

              <h1 className="text-white mb-5">Lyrics Finder</h1>
{/* responiveness */}
            <div className="flex flex-col sm:flex-row justify-center mb-4 sm:space-x-4">            
                <input className="p-2 m-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" 
                placeholder='Artist name'
                onChange={(e) => { setArtist(e.target.value) }} />
                <input className="p-2 bp-2 m-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" 
                placeholder='Song name'
                onChange={(e) => { setSong(e.target.value) }} />
            </div>
            <div className="flex justify-center pb-5">
            <button className="w-32 bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent pb-5 rounded" 
                 onClick={() => searchLyrics()}>
                    Search</button>
                    </div>
            <hr /> 
{/* responiveness */}
            <pre className="font-sans text-xl font-semibold max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl overflow-x-auto whitespace-pre-wrap">{lyrics}</pre>
        </div>
        </div>
        </>
    );
}

export default App;

