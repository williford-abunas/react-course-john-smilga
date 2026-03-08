import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('something went wrong');
        }
        const user = await response.json();
        setUser(user);
      } catch (error) {
        setIsError(true);
        setError(error.message);
      } finally {
        setIsLoading(false);  
      }
    };

    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error}</h2>;
  }
  return <div className='container'>
    <img src={user.avatar_url} alt={user.login} />
    <h2>{user.login}</h2>
    <h4>works at {user.company}</h4>
    <a href={user.html_url}>profile</a>
  </div>;
};
export default MultipleReturnsFetchData;
