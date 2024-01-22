import styles from "./blog.module.css";
import PostCard from "@/components/postsCard/PostCard";
const page = () => {
  return (
    <div className="styles.container">
      <PostCard></PostCard>
    </div>
  );
};

export default page;
