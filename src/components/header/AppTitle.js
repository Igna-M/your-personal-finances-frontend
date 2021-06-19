import React from 'react'
import { Link } from "react-router-dom";


export default function AppTitle() {
    return (
        <div>
            <Link to="/">            
                <h2>Your Personal Finance</h2>
            </Link>
        </div>
    )
}
