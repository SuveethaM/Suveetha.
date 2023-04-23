import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Multitable.css';
class Multitable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            n : 0,
        }
        this.update = this.update.bind(this);
    }
    update(event){
        this.setState(
            {
                n:event.target.value,
            }
        );
    }
    render(){
        return(
            <>
            
            <div className='topic'>
                <div style={
                    {
                        textAlign:"center",
                    }
                }>
                    Math for Kids
                </div>
            </div>

            <div className='pagename'>
                Multiplication Tables Generator:
            </div>
            
            <div className='content'>
            <form>  
                Enter number to generate tables:<br></br>
                    <input type="number" onChange = {this.update}></input><br></br>
                </form>
            </div>

            <div className='result'>
                <Tables n = {this.state.n}/>
            </div>
            
            </>
        );
    }
}

function Tables(props){
    if(props.n==0 || isNaN(props.n)){
        return ("");
    }
    else{
    const li = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    const res = li.map((i)=>
    <li className='list-group-item'>
        
    {i} x {props.n} = {i*props.n}
    </li>);
    return(
        <div className='content'>
            <center>RESULT:</center>
            <ul className='list-group'>
                {res}
            </ul>
        </div>
    );
    }
}
export default Multitable;
