import React from "react";


function Article(props) {
    const minutes = props.minutes || 0;
    const cups = Math.ceil(minutes / 5);
    const boxes = Math.ceil(minutes / 10);

    const emojiDisplay = (emoji, count) => {
        return Array(count)
        .fill(emoji)
        .map((emoji, index) => <span key={index}>{emoji}</span>);
    };

    return (
        <article>
            <h3>{props.title}</h3>
            <small>{props.date || "January 1, 1970"}</small>
            <p>{props.preview}</p>
            <div>
                {cups > 0 && emojiDisplay("☕️", cups)}
                {boxes > 0 && emojiDisplay("🍱", boxes)}
                {minutes > 0 && '${minutes} min read'}
            </div>
        </article>
    );
}


export default Article;