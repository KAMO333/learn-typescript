// let result: unknown;

// result = 1;
// result = "hello";
// result = false;
// result = Symbol();
// result = { name: "John" };
// result = [1, 2, 3];

// console.log((result as string).length);

// let result: unknown;
// result = [1, 2, 3];

// const total = (result as number[]).reduce((a, b) => a + b, 0);
// console.log(total);

// unknown examples

// const fetchData = async (url: string): Promise<unknown> => {
//   const response = await fetch(url);
//   return await response.json();
// };

// const showPosts = async () => {
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   try {
//     const posts = await fetchData(url); // unknown type

//     (
//       posts as { userId: number; id: number; title: string; body: string }[]
//     ).map((post) => console.log(post.title));
//   } catch (err) {
//     console.log(err);
//   }
// };

// showPosts();

function format(value: unknown): void {
  switch (typeof value) {
    case "string":
      console.log("String:", value.toUpperCase());
      break;
    case "number":
      console.log("Number:", value.toFixed(2));
      break;
    default:
      console.log("Other types:", value);
  }
}

format("hello");
format(123.456);
format(true);
format({ name: "John" });
format([1, 2, 3]);
format(null);
format(undefined);
