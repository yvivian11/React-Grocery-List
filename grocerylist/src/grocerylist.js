import * as React from 'react';
import './grocerylist.css';

class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list: ['shop', 'vacuum', 'exercise'],
            value: "",
        }
    }
    render(){
        const renderedList = this.state.list.map((entry) =>
            <div className="listItem"><input type="checkbox" />{entry}</div>
        )
       const formSubmit = (e) =>{
           const inputValue = e.target.value;
           if(e.key ==='Enter'){
                e.preventDefault();
                const dup = this.state.list.some(rowValue => rowValue === inputValue);
                // I was having trouble with the break if a duplicate is found, 
                // so I added the dup element to trigger true if a duplicate is found
                if (dup) {
                    alert("Duplicate item");
                } else {
                    this.setState({list: this.state.list.concat(inputValue), value: ""});
                } 
           }
        }
        const onChange = (e) => {
            this.setState({ value: e.target.value });
        }
        return(
            <div className="listContainer">
                <h4>To Do List</h4>
                {renderedList}
                <form  className="listEntry">
                    <input  className="entryForm" placeholder="add item..." value={this.state.value} onChange={onChange} onKeyPress={formSubmit} type="text" />
                </form>
                
            </div>
        )
    }
    
}

export default List