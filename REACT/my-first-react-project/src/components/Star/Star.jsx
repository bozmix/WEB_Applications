import {useState} from 'react';

import './Star.css';

const Star = () => {
    const [counter, setCounter] = useState(0);
    const [selected, setSelected] = useState(false);

    const onClick = () => {
        setCounter(counter + 1)
        setSelected(!selected)
    }

    const cName = (selected) ? 'wrapper selected' : 'wrapper';

    return (
        <div className={cName} onClick={onClick}>
            <p className='counter'>{counter}</p>
        </div>
    )
}

export default Star

/*
export class Star extends React.Component {
    constructor (props){
        super (props);
        this.state = {
            counter: 0,
            selected: false,
        }

    }

    onClick = () => {
        this.setState({
            selected: !this.state.selected,
            counter: this.state.counter + 1,
        })
    }

    render (){
        const cName = (this.state.selected) ? 'wrapper selected' : 'wrapper';

        return (
            <div className={cName} onClick={this.onClick}>
                <p className='counter'>{this.state.counter}</p>
            </div>
        )
    }

}*/