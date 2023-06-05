
function App() {
  const { useState } = React;
  const { Container } = ReactBootstrap;
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const url = "https://api.goprogram.ai/inspiration";

  console.log("Rendering App");

  const fetchData = async () => {
      const result = await axios.get(url) 
      setQuote(result.data.quote);
      setAuthor(result.data.author);
    };

  return (
    <Container>
      <button type="button" className="btn btn-primary btn-lg inspire" onClick={fetchData}>Get inspired!</button>
      <br></br>
      <br></br>
      {quote && (
        <h2>"{quote}"<br></br>{author}</h2>
      )}
    </Container>
  );
}
// ========================================
ReactDOM.render(<App />, document.getElementById("root"));
