import React from 'react'
import { Link } from 'react-router-dom';
import '../../css/buttons.css'

export default function FooterButtons() {

    return (
        <div>
            <hr />
            <div className="footer-buttons">
                <Link to="/incomesList">
                    <button>Incomes</button>
                </Link>
                <Link to="/expensesList">
                    <button>Expenses</button>
                </Link>

                <Link to="/allOperations">
                    <button>All operations</button>
                </Link>
            </div>
        </div>
    )
}
