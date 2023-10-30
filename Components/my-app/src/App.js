import './App.css';
import TextDisplay from './Components/TextDisplay';
import UserCard from './Components/CardViewerGPT'


function App() {

  const userData = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      picture: 'https://example.com/john.jpg',
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      picture: 'https://example.com/jane.jpg',
    },
    {
      name: 'Bob Johnson',
      email: 'bob@example.com',
      picture: 'https://example.com/bob.jpg',
    },
  ];


  return (
    <TextDisplay/>,
    <div>
      {userData.map((user) => (
        <UserCard
          name={user.name}
          email={user.email}
          picture={user.picture}
        />
      ))}
    </div>
  );
}

export default App;
