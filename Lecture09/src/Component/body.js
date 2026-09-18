import { useEffect, useState,useCallback } from "react";
import useFetch from "./useFetch";


function Body(){

      //  console.log("Body first");
       const {generateProfile,numberofProfile,setnumberofProfile,Profile}  =  useFetch();
      //  console.log("Body last");

     return(

          <div className="but"> 
          <input type="text" className="input" placeholder="search here" value={numberofProfile} onChange={(e)=>setnumberofProfile(e.target.value)}></input>
          <button onClick={()=>generateProfile(Number(numberofProfile))}>Search Profile onChange</button>

        <div className="profiles">
            {
                Profile.map((value)=>{
                 return  (<div key={value.id} className="cards">
                    <img src={value.avatar_url}/>
                    <h2> {value.login}</h2>
                   <a href={value.html_url} target="_blank">Profile</a>
                    </div>)
                })
            }
        </div>
      </div> 
     )
}

export default Body;


// Try catch funcationality add karo
// UseCallBack function add karne ki koshish
// Search button: Name ke basis: then display




// ***************************************************************

//  <-------------- Search by count---------------->

function Body() {
  const [Profile, setProfile] = useState([]);
  const [numberofProfile, setnumberofProfile] = useState("");

  const generateProfile = useCallback(async (count) => {
    if (!count || count <= 0) {
      console.error("Invalid profile count");
      setProfile([]);
      return;
    }
    try {
      const ran = Math.floor(1 + Math.random() * 10000);
      const response = await fetch(
        `https://api.github.com/users?since=${ran}&per_page=${count}`
      );
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      const data = await response.json();
      if (Array.isArray(data)) {
        setProfile(data);
      } else {
        console.error("API did not return an array:", data);
        setProfile([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setProfile([]);
    }
  }, []); 

  useEffect(() => {
    generateProfile(10);
  }, [generateProfile]);

    
        return (

        <div className="but"> 
        <input type="text" className="inpu" placeholder="search here" value={numberofProfile} onChange={(e)=>setnumberofProfile(e.target.value)}></input>
        <button onClick={()=>generateProfile(Number(numberofProfile))}>Search Profile</button>

        <div className="profiles">
            {
                Profile.map((value)=>{

                  return  <div key={value.id} className="cards">
                     <img src={value.avatar_url}></img>
                     <h2>{value.login}</h2>
                     <a href={value.html_url} target="_blank">Profile</a>
                    </div>
                })
            }
        </div>

         </div>
       )
    }

export default Body;



// ****************************************************************
//  <-------------- Search by name---------------->


function Body() {
  const [Profile, setProfile] = useState(null);
  const [nameofProfile, setnameofProfile] = useState("octocat");
  const [loading, setLoading] = useState(false);

  const generatebyname = useCallback(async (name) => {
    if (!name) return;

    setLoading(true);
    setProfile(null);

    try {
      const response = await fetch(
        `https://api.github.com/users/${name}`
      );

      if (!response.ok) {
        setProfile(null);
        return;
      }

      const data = await response.json();
      setProfile(data);
    } catch (error) {
      console.error("Error fetching profile:", error);
      setProfile(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    generatebyname("octocat");
  }, [generatebyname]);

  return (
    <div
      className="container"
      style={{ textAlign: "center", marginTop: "20px" }}
    >
      <input
        type="text"
        placeholder="GitHub name here...."
        value={nameofProfile}
        onChange={(e) => setnameofProfile(e.target.value)}
      />

      <button onClick={() => generatebyname(nameofProfile)}>
        Search
      </button>

      <div className="profiles" style={{ marginTop: "20px" }}>
        {loading ? (
          <p>Loading...</p>
        ) : Profile && Profile.login ? (
          <div className="cards">
            <img
              src={Profile.avatar_url}
              alt="Profile"
              width="150"
            />
            <h2>{Profile.login}</h2>
            <p>{Profile.bio || "Bio not found"}</p>
            <a
              href={Profile.html_url}
              target="_blank"
              rel="noreferrer"
            >
              Profile link
            </a>
          </div>
        ) : (
          <p>Type a username and search</p>
        )}
      </div>
    </div>
  );
}

export default Body;