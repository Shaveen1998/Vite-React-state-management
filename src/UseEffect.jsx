import { useState, useEffect } from 'react';

function UseEffect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://type.fit/api/quotes');
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>List of Quotes</h1>
      <ul>
        {data.map(user => (
          <li key={user.id}>
            {user.text} ({user.author})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseEffect;