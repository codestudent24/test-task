import { FC, UIEvent, useEffect, useRef, useState } from "react";
import { postApi } from "../../api/api";
import { PostItem } from "../PostItem";
import './postList.css';
import useDebounce from "./useDebounse";

export const PostList: FC = () => {
  const [currentPostStart, setCurrentPostStart] = useState(0)
  const [scrollTopState, setScrollTopState] = useState(0)
  const { data, isLoading } = postApi.useGetAllPostsQuery({ limit: 10, start: currentPostStart})
  const listRef = useRef<HTMLDivElement>(null)

  const scrollHandler = (e: UIEvent<HTMLDivElement>): void => {
    const scrollTop = e.currentTarget.scrollTop;
    setScrollTopState(scrollTop)
  }

  const DS = useDebounce(scrollTopState, 100)

  useEffect(() => {
    if (DS > 350) {
      setCurrentPostStart(prev => prev > 90 ? 93 : prev + 2)
    } else if (DS < 50) {
      setCurrentPostStart(prev => prev < 2 ? 0 : prev - 2)
    }
  }, [DS])

  useEffect(() => {
    if (data && data[0].id > 1 && listRef.current) {
      listRef.current.scrollTo(0, 200)
    }
  }, [data])

  return (
    <>
      <h1>Posts from 'jsonplaceholder'</h1>
      <div
        className="post-list"
        ref={ listRef }
        onScroll={scrollHandler}
      >
        {data?.map(post => {
          return <PostItem key={post.id} post={post} />
        })}
        {isLoading && <div>Загрузка данных</div>}
      </div>
    </>
  )
}