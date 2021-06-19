import React from 'react'
import '../../css/buttons.css'
import { Link } from "react-router-dom";

export default function HeaderButtons() {

    return (
        <div>
            
            <Link to="/registerOperation">
                <button className="new-op-button"><span>New operation</span></button>
            </Link>
            <hr/>
        </div>
    )
}
