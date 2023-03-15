export default function SimpleComment({comment}) {
  console.log(comment)
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-3">
        <img
          className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
          src="https://images.unsplash.com/photo-1498019559366-a1cbd07b5160?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158"
          alt=""
        />
      </div>
      <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed bg-white">
        <strong>Houssem</strong>{" "}
        <span className="text-xs text-sky-400">3:34 PM</span>
        <p className="text-sm">
          {comment.comment_txt} 
        </p>
      </div>
    </div>
  );
}
