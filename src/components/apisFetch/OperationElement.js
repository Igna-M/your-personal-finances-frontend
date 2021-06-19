import React from 'react'
import '../../css/components.css'
import '../../css/buttons.css'

import { Link } from "react-router-dom";

export default function OperationElement(props) {

    
    return (
        <div className="one-line">
            <div className="operation-card first-line">
                <p className="operation-title">{props.concept}</p>
                <p className="operation-amount">$ {props.amount}</p>
            </div>
            <div className="operation-card second-line">
                <p className="operation-date">{props.date}</p>
                <p className="operation-kind">{props.kind}</p>
            </div>

            <div className="operation-buttons">
                <Link to={`/editOperation/${props.id}`}>
                    <button type="submit" className="operation-edit-bt">Edit</button>
                </Link>
                {/* <form action="/delete" method="POST">
                    <button type="submit" className="operation-delete-bt" name="delete" value={props.id}>Delete</button>
                </form>                 */}
            </div>
        </div>
    )
}
