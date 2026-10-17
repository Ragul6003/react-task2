
import Child from './Child';
import './App.css';

function App() {
  const users = [
    {
      id: 1,
      name: 'Ragul',
      city: 'Salem',
      age: 22,
      email: 'ragul@gmail.com',
      phone: '9876543210'
    },
    {
      id: 2,
      name: 'Arun',
      city: 'Chennai',
      age: 23,
      email: 'arun@gmail.com',
      phone: '9876543211'
    },
    {
      id: 3,
      name: 'Priya',
      city: 'Coimbatore',
      age: 21,
      email: 'priya@gmail.com',
      phone: '9876543212'
    },
    {
      id: 4,
      name: 'Karthik',
      city: 'Madurai',
      age: 24,
      email: 'karthik@gmail.com',
      phone: '9876543213'
    },
    {
      id: 5,
      name: 'Divya',
      city: 'Trichy',
      age: 22,
      email: 'divya@gmail.com',
      phone: '9876543214'
    }
  ];

  return (
    <div className="app-container">
      <h1>User Information</h1>

      <div className="user-grid">
        {users.map((user) => (
          <Child
            key={user.id}
            name={user.name}
            city={user.city}
            age={user.age}
            email={user.email}
            phone={user.phone}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
