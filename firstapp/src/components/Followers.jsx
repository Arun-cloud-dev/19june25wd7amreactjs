// import { useEffect, useState } from "react";
// export default Followers(){
    
// }

// import React from "react";

// class Followers extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       followers: [],
//     };
//   }

//   componentDidMount() {
//     fetch("https://api.github.com/users/arun-cloud-dev/followers")
//       .then((res) => res.json())
//       .then((data) => this.setState({ followers: data }))
//       .catch((err) => console.error("Error:", err));
//   }

//   render() {
//     return (
//       <div>
//         <h2>Followers of arun-cloud-dev</h2>
//         {this.state.followers.map((follower) => (
//           <div
//             key={follower.id}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               margin: "10px 0",
//             }}>
//             <img
//               src={follower.avatar_url}
//               alt={follower.login}
//               style={{
//                 width: "50px",
//                 borderRadius: "50%",
//                 marginRight: "10px",
//               }}
//             />
//             <a
//               href={follower.html_url}
//               target="_blank"
//               rel="noopener noreferrer">
//               {follower.login}
//             </a>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default Followers;


import React, { useEffect, useState } from "react";

const Followers = () => {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/arun-cloud-dev/followers")
      .then((res) => res.json())
      .then((data) => setFollowers(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h2>Followers of arun-cloud-dev</h2>
      {followers.map((follower) => (
        <div
          key={follower.id}
          style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
          <img
            src={follower.avatar_url}
            alt={follower.login}
            style={{ width: "50px", borderRadius: "50%", marginRight: "10px" }}
          />
          <a href={follower.html_url} target="_blank" rel="noopener noreferrer">
            {follower.login}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Followers;
