import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from './components/navbar'
import { HallOfShame } from './components/hall-of-shame'
import Container from 'react-bootstrap/Container'
import { MoviesOfTheMonth } from './components/movies-of-the-month';
import { Footer } from './components/footer'

function App() {
  return (
    <div className='SmallerPage'>
      <NavigationBar />
      <Container>
        <MoviesOfTheMonth />
        <HallOfShame />
      </Container>
      <Footer />
    </div>

  );
}

export default App;
