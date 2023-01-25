import Input from "./components/Input";
import Matrix from "./components/Matrix";
import {useState} from "react";

function App() {
    const [matrix, setMatrix] = useState([]);
    return (
        <div className="App">
            <Input setMatrix={setMatrix} matrix={matrix}/>

        </div>
    );
}

export default App;
