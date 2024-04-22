const Posts = async () => {
  const res = await fetch("http://localhost:5000/posts", {
    cache : "force-cache"
  });
  const posts = await res.json();
  // console.log(posts)
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-center my-4">All Posts Data : {posts.length}</h2>
      {posts?.map((post) => (
        <div key={post.id} className="card my-6 bg-gray-100 shadow-xl w-[50%] mx-auto">
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.description}</p>
            <p>Like :{post.likesCount}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">See More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
