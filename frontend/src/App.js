import { BrowserRouter, Routes, Route } from 'react-router-dom';


//Components Import
import Home from './Components/Home Components/Home';
import Calender from './Components/Calender';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';

//Layout
import PageLayout from './Layout/PageLayout';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home /> } />
          <Route path="calender" element={<Calender />} />
          <Route path="signup" element={ <SignUp />} />
          <Route path="login" element={ <LogIn /> } />
        </Route >
      </Routes>
    </BrowserRouter>
  );
}

export default App;