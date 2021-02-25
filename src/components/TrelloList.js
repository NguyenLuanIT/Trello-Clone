import React from 'react';
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "../components/TrelloActionButton";


const TrelloList = ({ title, cards }) => {
    return (
        <div style={styles.container}>
            <h4>{title}</h4>
            {cards.map((card, index) => <TrelloCard text={card.text} key={index} />)}
            <TrelloActionButton />
        </div>
    )
}
export default TrelloList;

const styles = {
    container: {
        backgroundColor: "#dfe3e6",
        borderRadius: 3,
        width: 300,
        padding: 8,
        marginRight: 8,
    }
}