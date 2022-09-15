import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../bootstrapchanger2.css';
import Date from './BootstrapReact2HeaderDate'

class BootstrapReact2Header extends Component{
    render(){
        return(
            <div>
                <div className="logo py-2">
                    <h2 className="fw-bold text-light ms-3">Saranaku Cashier</h2>
                </div>
                <Date />
            </div>
        )
    }
}

export default BootstrapReact2Header;