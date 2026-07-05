// import { useEffect, useState } from "react";

// function Body1(){
//      const [Profile,setProfile]=useState([])
     
//     async function generateprofile() {
//         const resp = await fetch("https://api.github.com/users?per_page=12https://api.github.com/users?per_page=12");
//         const data = await resp.json();
//         setProfile(data);
//     }
//     useEffect(()=>{
//         generateprofile();

//     },[])

//     return(
//         <>
      
//         <div className="cont">
//             {
//                 Profile.map((value)=>{
//                    return( <div key={value.id} className="card">
//                         <img src={value.avatar_url}></img>
//                         <h2>{value.login}</h2>
//                         <a href={value.html_url}>Profile</a>
//                     </div>
//                    )
//                 })
//             }


//         </div>
//         </>

//     )
// }

// export default Body1;





// improvement


import { useEffect, useState } from "react";

function Body1(){
     const [Profile,setProfile]=useState([])
      const [numberofProfile,setnumberofProfile]=useState("")
        const [user,setuser]=useState("")
     const ran = Math.floor(1+Math.random()*100000)
    async function generateprofile(count) {
        const resp = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
        const data = await resp.json();
        setProfile(data);
    }
        async function generateuser(user) {
        const resp = await fetch(`https://api.github.com/users/${user}`);
        const data = await resp.json();
        setProfile([data]);
    }
    useEffect(()=>{
        generateprofile(12);

    },[])
     

    return(
        <>
        <div className="search">
            <div>
                <input type="number" placeholder="search no. of  creators" value={numberofProfile}  onChange={(e)=>setnumberofProfile(e.target.value)}></input>
            <button onClick={()=>generateprofile(Number(numberofProfile))}>search</button>
            </div>
            
            <div>   
            <input type="text" placeholder="search username" value={user}  onChange={(e)=>setuser(e.target.value)}></input>
            <button onClick={()=>generateuser(String(user))}>search</button>
            </div>
        </div>
      
        <div className="cont">
            {
                Profile.map((value)=>{
                   return( <div key={value.id} className="card">
                        <img src={value.avatar_url}></img>
                        <h2>{value.login}</h2>
                        <a href={value.html_url}>Profile</a>
                    </div>
                   )
                })
            }


        </div>
        </>

    )
}

export default Body1;
