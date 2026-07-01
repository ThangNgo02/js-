async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("lỗi");
    }

    const posts = await response.json();
    console.log(posts);
    return posts;
  } catch (err) {
    console.log(err);
    return err;
  }
}

// getPosts();

async function createPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title: "Titeu đề",
        body: "Noi dung",
        userId: 1,
      }),
    });
    if (!response.ok) {
      throw new Error("lỗi");
    }

    const posts = await response.json();
    console.log(posts);
    return posts;
  } catch (err) {
    console.log(err);
    return err;
  }
}
createPost();
