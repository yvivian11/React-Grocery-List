import * as React from 'react';
import './grocerylist.css';

class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list: ['milk', 'eggs', 'bananas']
        }
    }
    render(){
        const renderedList = this.state.list.map((entry) =>
            <div className="listItem">{<input type="checkbox"></input>}{entry}</div>
        )
       const formSubmit = (e) =>{
           let dup
           if(e.key ==='Enter'){
               for(let i=0; i < this.state.list.length; i++){
                   if(this.state.list[i] == e.target.value){
                       alert("This is a duplicate!")
                       dup = true
                       e.preventDefault()
                       break;          
                   }
               }
            //    I was having trouble with the break if a duplicate is found, 
            // so I added the dup element to trigger true if a duplicate is found
               if(dup !== true){
                    this.setState({list: this.state.list.concat(e.target.value)})
                    e.preventDefault();
                } 
           }
        }
        return(
            <div className="listContainer">
                <h4>Grocery List</h4>
                {renderedList}
                <form  className="listEntry">
                    <input  className="entryForm" defaultValue="add item..." onKeyPress={formSubmit} type="text"></input>
                </form>
                
            </div>
        )
    }
    
}

export default List