import { IPost } from "../..";
import { relativeDateFormatter } from "../../../../utils/formater";
import { PostContainer } from "./styles";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface PostProps {
  post: IPost;
}

export function Post({ post }: PostProps) {
  const formattedDate = relativeDateFormatter(post.created_at);

  return (
    <PostContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{formattedDate}</span>
      </div>
      <div>
        {/* {post.body} */}
        <ReactMarkdown
          children={post.body}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={dracula as any}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>
    </PostContainer>
  );
}
