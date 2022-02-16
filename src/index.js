import { Component } from 'react';
import { render } from 'react-dom';
import Table from './Table';
import './styles.css'

class App extends Component {
    render() {
        return (
            <Table />
        )
    }
}

render(<App />, document.querySelector('#root'))