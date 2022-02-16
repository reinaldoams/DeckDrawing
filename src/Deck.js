import { Component } from 'react';

class Deck extends Component {
    render() {
        return (
            <div className='Deck'>
            {this.props.cards.map(card => (
                <img className='cardImage'
                style={
                    {transform: `rotate(${card.deg}deg)`}
                }
                key={`${card.value} of ${card.suit}`}
                src={card.image} alt={`${card.value} of ${card.suit}`} />
            ))}
            </div>
        )
    }
}

export default Deck