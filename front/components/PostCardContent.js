import PropTypes from 'prop-types';
import Link from 'next/link';

const PostCardContent = ({ postData }) => ( // 첫번째 게시글 #해시태그 #익스프레스
    <div>
      {/* 정규식 사용 */}
      {
        postData.split(/(#[^\s#]+)/g).map((v)=>{
          if(v.match(/(#[^\s#]+)/g)){
            return <Link href={`/hashtag/${v.slice(1)}`}><a>{v}</a></Link>
          }
          return v;
        })
      }
    </div>
 
);

PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired
}

export default PostCardContent;
