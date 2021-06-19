import React from 'react'
import OperationElement from './OperationElement'
import '../../css/components.css'

export default class MainElements extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            operationsList: []
        }
    }

    componentDidMount(){
        this.consultApi()
    }

    consultApi(){
        this.apiCall('http://localhost:3001/api', this.apiResult)
    }

    apiCall(url, consecuence){
        fetch(url)
            .then( response => response.json())
            .then( data => consecuence (data))
            .catch( error => console.log('Error:', error))
    }

    apiResult = (data) => {
        this.setState(
            {
                isLoaded: true,
                operationsList: data.data
            }
        )
    }


    render() {

        var {isLoaded, operationsList} = this.state;

        if (!isLoaded){
            return <div>loading...</div>
        } else {
            return (
                <div>
                    {operationsList.map((operation, i) => 
                        <div key={i} className="operation-element">
                            <OperationElement concept={operation.concept} id={operation.id} amount={operation.amount} date={operation.date} kind={operation.kind}/>
                        </div>
                    )}
                </div>
            )
        }
    }
}
