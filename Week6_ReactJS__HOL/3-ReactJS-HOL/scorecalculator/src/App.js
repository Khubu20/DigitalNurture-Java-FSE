import { CalculateScore } from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore 
        Name={"Khushboo Gupta"} 
        School={"LNCTS"} 
        total={284} 
        goal={3} 
      />
    </div>
  );
}

export default App;
