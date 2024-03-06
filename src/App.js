import { useEffect, useState } from "react";
import "./index.scss";
import { Users } from "./components/Users";
import { Success } from "./components/success";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        alert("error");
      })
      .finally(() => setIsLoading(false));
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };
  
  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onClickSendInvites = () => {
    setSuccess(true);
  } 

  const onClickBack = () => {
    setInvites([]);
    setSearchValue('');
    setSuccess(false);
  } 

  return (
    <div className="App">
      {success ? (
        <Success 
          count={invites.length} 
          onClickBack={onClickBack}
        />
      ) : (
        <Users
          items={users}
          isLoading={isLoading}
          searchValue={searchValue}
          invites={invites}
          onChangeSearchValue={onChangeSearchValue}
          onClickSendInvites={onClickSendInvites}
          onClickInvite={onClickInvite}
          disabledBtn={invites.length === 0}
        />
      )}
    </div>
  );
}

export default App;
