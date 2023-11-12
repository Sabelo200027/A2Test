import { Admin, Resource, ListGuesser, ShowGuesser, EditGuesser } from "react-admin";
import { PocketBaseProvider } from "./ra-pocketbase";
//import logo from './logo.svg';
import './App.css';

const pbProvider = PocketBaseProvider('https://improved-system-r4gpg66gv5gqfpjwj-8090.app.github.dev/');

function App() {
  return (
    <Admin dataProvider={pbProvider.dataProvider} authProvider={pbProvider.authProvider}>
      <Resource name="Student" list={ListGuesser} recordRepresentation="username" />
    </Admin>
  )
}

export default App
