  const [quizData, setQuizData] = useState([])

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=1&type=multiple")
    .then(res => res.json())
    .then(data => setQuizData(data.results))
  }, [])

