import { PostList } from "../../components/PostList";

export default function MainPage() {
  return (
    <>
      <PostList />
      <footer className="footer">
        <h3>made by codestudent24</h3>
        <h4>with React, TypeScript and RTK Query</h4>
      </footer>
    </>
  )
}