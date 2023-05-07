
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const ToolTip = ({name, text}) => {

    return (
        <div>
      
                   
            <Popup trigger={<button> {name}</button>} position="right center">
            <div>{text}</div>
            </Popup>
            
            
        </div>
    )
}

export default ToolTip;

