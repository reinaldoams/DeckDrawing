import { Component } from 'react';
import Deck from './Deck';


class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deckId: '',
            drewCards: [],
            cardsInTheDeck: 99
        }
        this.handleDraw = this.handleDraw.bind(this)
    }

    async componentDidMount () {
        let response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle')
        let data = await response.json()
        this.setState({deckId: data.deck_id})
    }

    handleDraw() {
        if(this.state.cardsInTheDeck > 0){
        fetch(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/`)
        .then(response => response.json())
        // .then(data=> console.log(data.cards[0]))
        .then(data => {
            console.log(data);
            this.setState(state => {
            return {drewCards: [...state.drewCards, {...data.cards[0], deg: Math.floor(Math.random() * 360)}], cardsInTheDeck: data.remaining}
        })})
    } else {
        alert('no cards in the deck')
    }
    }

    render () {
        return (
            <div className='Table'>
            <div className='tableTitle'>Deck of cards</div>
            <Deck cards={this.state.drewCards} />
            <button onClick={this.handleDraw}>draw</button>
            </div>
        )
    }
}

export default Table;