import React from 'react';
import './about.css';

export function About() {
  const [imageUrl, setImageUrl] = React.useState(
    'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs='
  );
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  React.useEffect(() => {
    const random = Math.floor(Math.random() * 1000);

    fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#picture');
        const width = containerEl.offsetWidth;
        const height = containerEl.offsetHeight;
        const apiUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
        setImageUrl(apiUrl);
      })
      .catch(() => {});

    fetch('https://quote.cs260.click')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setQuoteAuthor(data.author);
      })
      .catch(() => {});
  }, []);

  return (
    <main className="container-fluid bg-secondary text-center pt-5">
      <div>
        <div id="picture" className="picture-box mb-4">
          <img src={imageUrl} alt="OneSecond background" />
        </div>

        <p>
          <strong>OneSecond</strong> is a fast-paced reaction game that challenges players to click as many times as
          possible in exactly one second. The rules are simple, but mastering speed and timing takes practice.
        </p>

        <p>
          OneSecond is an original educational project inspired by classic reaction and timing games. It is designed
          for non-commercial, instructional use only.
        </p>

        <div className="quote-box bg-light text-dark mt-4">
          <p className="quote">{quote}</p>
          <p className="author">{quoteAuthor}</p>
        </div>
      </div>
    </main>
  );
}
