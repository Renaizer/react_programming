import logo from './logo.svg';
import './App.css';
import DateAndTime from './Component/DateAndTime';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <div className="App" >
      <div className="container">
        <div className="row border">
          <div className="col-4 border">col-4</div>
          <div className="col-8 border display-1 ">
            <DateAndTime></DateAndTime>
          </div>
        </div>
        <div className="row border">
          <div className="col-4 border">col-4</div>
          <div className="col-4 border">col-4</div>
          <div className="col-4 border">col-4</div>
        </div>
      </div>
    </div>
  );
}

export default App;
