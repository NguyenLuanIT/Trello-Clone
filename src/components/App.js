import React from 'react';
import TrelloList from "./TrelloList";
import { connect } from "react-redux";

function App({ lists }) {
  return (
    <div className="App">
      <h2>hello world</h2>
      <div style={styles.listsContainer}>
        {lists.map((list) =>
          <TrelloList title={list.title} cards={list.cards} />
        )}
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  lists: state.lists
})

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",
    // padding: 8,
    // backgroundColor: "blue",
  },
}

export default connect(mapStateToProps)(App);


