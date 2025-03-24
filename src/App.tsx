import './App.css';
import { createTheme, MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export function App() {
  const theme = createTheme({
    colors:{
      'jblack': [
        '#f6f6f6', '#e7e7e7', '#d1d1d1', '#b0b0b0', '#888888',
        '#6d6d6d', '#5d5d5d', '#4f4f4f', '#454545', '#3d3d3d',
        '#000000'
    ],
    'jblue':[
        '#eff6ff', '#daeaff', '#bddaff', '#90c4ff', '#5ca3fe',
        '#367ffb', '#205ef0', '#1746d3', '#1a3cb3', '#1b388d',
        '#152356'
    ],
    'jwhite': [
        '#ffffff','#efefef','#dcdcdc','#bdbdbd','#989898',
        '#7c7c7c','#656565','#525252','#464646','#3d3d3d',
        '#292929',
    ]
    }
  })
  return (
    
    <MantineProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path='*' element={<HomePage/>}/>
      </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}


export default App;
