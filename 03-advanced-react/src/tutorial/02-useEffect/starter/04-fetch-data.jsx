import { useState, useEffect } from 'react';
const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return <main>{users.map((user) => (
    <div className='container' key={user.id}>
      <img src={user.avatar_url} alt={user.login} />
      <h2>{user.login}</h2>
      <a href={user.html_url}>profile</a>
    </div>
  ))}</main>;
};
export default FetchData;
