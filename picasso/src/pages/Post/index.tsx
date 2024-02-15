import { useNavigate, useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../api/api";
import { PostItemFull } from "../../components/PostItemFull";

export default function PostPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  if (!id) {
    navigate('/');
    return null;
  } else {
    const { data, isLoading } = useGetPostByIdQuery(+id)
    return (
      <>
      {isLoading ? (
        <h2>Загрузка данных...</h2>
      ) : data ? (
        <PostItemFull post={data} />
      ) : (
        <h2>Sorry, no post with such id found</h2>
      )}
      <button className='button' onClick={() => {
          navigate('/')
        }}
      >
        Назад
      </button>
      </>
    )

  }
}