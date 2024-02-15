import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Error: page does not exist!</h1>
      <button className='button' onClick={() => {
          navigate('/')
        }}
      >
        На главную
      </button>
    </>
  )
}

export default ErrorPage;