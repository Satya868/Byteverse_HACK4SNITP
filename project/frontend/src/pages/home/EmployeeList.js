import React, { useEffect, useState } from "react";
import axios from "axios";
import proworker from "../../assets/proworker.png";
import { NavLink } from "react-router-dom";

const EmployeeList = () => {
  const [users, setUsers] = useState(null);

  const [us, setUs] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await axios.get("/v1/admin/all-employee");
        /*const data = res.data();*/
        setUsers(res.data.employees);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    async function fetchuserPhoto(user) {
      try {
        const res = await axios.get(`/v1/admin/photo-employee/${user._id}`, {
          responseType: "arraybuffer",
        });
        const base64 = Buffer.from(res.data.photo, "binary").toString("base64");
        const photoURL = `data:${res.data.contentType};base64,${base64}`;
        console.log("photo", res.data.photo);
        console.log("photoURL", photoURL);
        //newUsers[index] = {...user, photo: `data:${res.data.contentType};base64,${base64}`}

        //user.photo = `data:image/jpeg;base64,${base64}`;
        setUsers((prevState) => {
          const newUsers = [...prevState];
          const index = newUsers.findIndex((u) => u._id === user._id);
          newUsers[index] = {
            ...user,
            photo: `data:${res.data.contentType};base64,${base64}`,
          };
          return newUsers;
        });
      } catch (error) {
        console.log(error);
      }
    }

    if (users && users.length > 0) {
      users.forEach(fetchuserPhoto);
    }

    // using linkedin id we can render the image of the in the <img> tag // code is in @maa whats app page
    /* async function fetchUserPhoto(user) {
      try {
        const res = await axios.get(`/v1/admin/photo-employee/${user._id}`, {
          responseType: "arraybuffer",
        });
        const base64 = Buffer.from(res.data.photo, "binary").toString("base64");
        return { ...user, photo: `data:${res.data.contentType};base64,${base64}` };
      } catch (error) {
        console.log(error);
      }
    }

    async function fetchUserPhotos() {
      if (users && users.length > 0) {
        const updatedUsers = await Promise.all(users.map(fetchUserPhoto));
        setUsers(updatedUsers);
      }
    }

    fetchUserPhotos(); */
    console.log(users);
  }, [users]);

  //

  console.log(users);
  return (
    <><h3 style={{marginLeft:"27rem", color:"white",paddingTop:"2rem", marginTop:"2px"}}>Connect With Professionals</h3>
    <div
      className="emp-list"
      style={{
        display: "flex",
        margin: "2rem",
        rowGap: "2rem",
        columnGap: "2rem",
        paddingBottom:"30px"
      }}   
    >      
      {users &&
        users.map((user) => (
          <div key={user._id} className="card" style={{ width: "18rem", }}>
            <img src={proworker} className="card-img-top" alt="..." />
            <div className="card-body" style={{}}>
              <div
                className="c-b"
                style={{ display: "flex", flexDirection: "row", gap: "2rem" }}
              >
                <h5 className="card-title">{user.adminName}</h5>
                <span style={{ display: "flex", gap: "10px" }}>
                  <h6>Role: </h6>
                  {user.experience}
                </span>
              </div>
              <hr />
              <h6>Description</h6>
              <p className="card-text">{user.description}</p>
              <hr />
              <div
                style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
              ></div>
              <span className="card-title" style={{ fontWeight: "bold" }}>
                Charges:${user.charges}
              </span>
              <a
                href={`mailto:${user.adminEmail}`}
                className="btn btn-primary"
                style={{ width: "66px", marginRight: ".7rem" }}
              >
                Email
              </a>
              <a
                href={user.experience}
                className="btn "
                style={{ width: "110px", color: "blue", marginRight: ".7rem" }}
                target="_blank"
              >
                Follow me
              </a>
              <NavLink
                to="/chat"
                style={{
                  display: "",
                  textDecoration: "none",
                  color: "blue",
                  border: "green",
                  borderRadius: "19%",
                }}
              >
                Talk Here
              </NavLink>
            </div>
          </div>
        ))}
    </div></>
  );
};

export default EmployeeList;
{
  /*

{users &&
        Object.keys(users).map((key) => (
          <div key={key} className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body" style={{}}>
              <div
                className="c-b"
                style={{ display: "flex", flexDirection: "row", gap: "2rem" }}
              >
                <h5 className="card-title">{users[key].adminName}</h5>
                <span>Role: {users[key].experience}</span>
              </div>
              <p className="card-text">
                {users[key].description}
              </p>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
              ></div>
              <a
                href={`mailto:${users[key].adminEmail}`}
                className="btn btn-primary"
                style={{ width: "100px", marginRight: ".7rem" }}
              >
                Connect
              </a>
              <span className="card-title">Charges: {users[key].charges} </span>
            </div>
          </div>
        ))}
*/
}
