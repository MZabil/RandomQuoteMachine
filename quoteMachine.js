function Message() {
  let colors = [
    "red",
    "green",
    "blue",
    "black",
    "orange",
    "yellow",
    "pink",
    "purple",
    "gray",
    "lightblue"
  ];
  let quotes = [
    "You can’t use up creativity. The more you use, the more you have.",
    "If the wind will not serve, take to the oars.",
    "Life is 10% what happens to me and 90% of how I react to it.",
    "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
    "It does not matter how slowly you go as long as you do not stop.",
    "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
    "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    "Remember no one can make you feel inferior without your consent.",
    "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it."
  ];
  let authors = [
    "Maya Angelou",
    "Latin Proverb",
    "Charles Swindoll",
    "Maya Angelou",
    "Erica Jong",
    "Confucius",
    "Marie Curie",
    "Joshua J. Marine",
    "Eleanor Roosevelt",
    "Johann Wolfgang von Goethe"
  ];

  //let random = Math.round(Math.random() * 10);
  const [random, setRandom] = React.useState(Math.floor(Math.random() * 10));
  let color = {
    backgroundColor: colors[random]
  };
  let front = {
    color: colors[random]
  };

  const handleClick = () => {
    setRandom(Math.floor(Math.random() * 10));
  };

  return (
    <>
      <div
        className="container-fluid d-flex align-items-center justify-content-center screen"
        style={color}
      >
        <div className="quote" id="quote-box">
          <h4 style={front} id="text">
            ""{quotes[random]}
          </h4>
          <p className="text-end" style={front} id="author">
            - {authors[random]}
          </p>
          <a
            className="btn one"
            href="twitter.com/intent/tweet"
            target="_blank"
            style={color}
            id="tweet-quote"
          >
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a
            className="btn two"
            href="twitter.com/intent/tweet"
            target="_blank"
            style={color}
          >
            <i class="fa fa-tumblr" aria-hidden="true"></i>
          </a>
          <button
            className="btn three"
            onClick={handleClick}
            style={color}
            id="new-quote"
          >
            New quote
          </button>
        </div>
      </div>
    </>
  );
}
ReactDOM.render(<Message />, document.getElementById("root"));
