import { useState } from "react";

const Header = ({text = "logo555",bgColor = "#333333",textColor ="white"}) => {

    const [details,setDetails] = useState({
        name:"abdurrub",
        age:18,
        city:"Trichy"
    })

    const ChangeCity = () => {
        setDetails({...details, city:"Chennai"})
        // console.log(name)
    }


  return (
    <>
      <header style={{
        backgroundColor:bgColor,
        color:textColor
      }}>
        <div className="container">
          <div>
            <h1>My name is {details.name}, Iam from {details.city} and Iam {details.age} Year old.</h1>
          </div>
          <div>
            {/* <h1>{name}</h1> */}
            <button onClick={ChangeCity}>Change Name</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
