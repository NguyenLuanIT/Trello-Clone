import React from 'react';
import Icon from "@material-ui/core/Icon"

export default function TrelloActionButton(props) {
    const renderAddButton = () => {
        const { list } = props;

        const buttonText = list ? "Add another list" : "Add another card"
        return (
            <div>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }
    return renderAddButton()



}