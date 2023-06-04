import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from './Button';

function App() {
    const handleClick = () =>{
        console.log('click!!');
    };
    return (
    <div>
        <div>
            <Button primary rounded outline className="mb-5" onClick={handleClick} >
                <GoBell />
                Click me!
            </Button>
        </div>
        <div>
            <Button danger onMouseLeave={handleClick} >
                <GoCloudDownload />
                Buy Now!
            </Button>
        </div>
        <div>
            <Button warning onMouseEnter={handleClick}>
                <GoDatabase />
                See Deal!
            </Button>
        </div>
        <div>
            <Button secondary onClick={handleClick}>Hide Ads!</Button>
        </div>
        <div>
            <Button success rounded onClick={handleClick}>Mooooreee!</Button>
        </div>
    </div>
    );
}

export default App;