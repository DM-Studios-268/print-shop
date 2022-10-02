import './App.css';
import { UserContextProvider} from './Services/userService'
import { Home } from './Pages/Home/Home'
import { Auth } from './Pages/Auth/Auth'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route index path='/' element={<Navigate to="/home" replace={true} />} />

            <Route path='/home' element={<Home />} />
            <Route path='/auth' element={<Auth />} />

            <Route path='/user'>
              <Route index path='profile' element={<RequireAuth />}/>
              <Route path='cart' element={<RequireAuth />}/>
            </Route>

          </Routes>
        </div>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
