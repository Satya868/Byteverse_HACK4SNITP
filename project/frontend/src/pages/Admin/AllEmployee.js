import React, { useEffect, useState } from "react";
import CreateEmployee from "./CreateEmployee";
import proworker from "../../assets/proworker.png";
import axios from "axios";

const AllEmployee = () => {

  const [users, setUsers]= useState(null)


  useEffect(()=>{
    async function fetchUsers(){
      try {
        const res = await axios.get('/v1/admin/all-employee')
        /*const data = res.data();*/
        setUsers(res.data.employees);
      } catch (error) {
        console.log(error)
      }
    }

    fetchUsers()
  }, [])

  console.log(users)
  return (
    <div>
      <div>
        OUR EMPLOYEE
        <ul style={{listStyle:"none", padding: "6px",  }}>
         {/* {users && Object.keys(users).map(key =>{
            <li key={key}>
              <p> {users[key].education}</p>
            </li>
          })} */}
         {users && Object.keys(users).map(key=>(
            <li key={key} style={{gap:"14px", marginBottom: "10px" }}>
            <div style={{display:"flex", flexDirection: "row", gap: "8px"}}>
              <img src={proworker} style={{ height: "55px", width: "55px", borderRadius:"50%" }} />
              <div style={{display:"flex", flexDirection:"column"}}>
                <span style={{fontWeight:"bolder", color:"blue"}}>{users[key].adminName}</span>
                <span>{users[key].education}</span>
              </div>
            </div>
          </li>
          ))}
         
         {/* <li style={{gap:"14px", marginBottom: "10px"}}>
            <div style={{display:"flex", flexDirection: "row", gap: "8px"}}>
              <img src={football} style={{ height: "55px", width: "55px", borderRadius:"50%" }} />
              <div style={{display:"flex", flexDirection:"column"}}>
                <span style={{fontWeight:"bolder", color:"blue"}}>satya prakash</span>
                <span>sDe google</span>
              </div>
            </div>
          </li>
-------- here this one is another method to render array of object ---------using pre tag
<pre>
  {JSON.stringify(yourdataobject, null, 2)}
</pre>


          <li>
            <div style={{display:"flex", flexDirection: "row", gap: "4px"}}>
              <img src={football} style={{ height: "60px", width: "60px", borderRadius:"50%" }} />
              <div style={{display:"flex", flexDirection:"column"}}>
                <span style={{fontWeight:"bolder"}}>satya prakash</span>
                <span>sDe google</span>
              </div>
            </div>
          </li>*/}
        </ul>
      </div>
    </div>
  );
};

export default AllEmployee;
