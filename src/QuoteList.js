import { useEffect, useState } from "react";
import Quote from "./Quote";

function QuoteList(props) {

const [quote, setQuoteList] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {

  async function getQuoteList() {
    const response = await fetch('https://dummyjson.com/quotes');
    const data = await response.json();
    setQuoteList(data.quotes);
    }

    getQuoteList();
    setLoading(false);
}, []);

const quoteListJSX = quote.map((quotes) => {
  return <Quote key={quotes.id} {...quotes} />
});

return (
    <>
    <h1>Quotes</h1>
    {loading ? <p>Loading...</p> : quoteListJSX}
    </>
);
}

export default QuoteList;