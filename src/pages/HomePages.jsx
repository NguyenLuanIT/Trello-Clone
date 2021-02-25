import React from 'react';
import { useSelector } from "react-redux";
import TrelloList from "../components/TrelloList";

function HomePage() {
    const lists = useSelector(state => state.lists)
    return (
        <div style={styles.listsContainer}>
            {lists.map((list, index) =>
                <TrelloList title={list.title} cards={list.cards} key={index} />
            )}
        </div>
    )
}

export default (HomePage);

const styles = {
    listsContainer: {
        display: "flex",
        flexDirection: "row",
    },
}