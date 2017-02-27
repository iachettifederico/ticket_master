collection @comments
cache ["agent-tickets-comments-", @comments]
attributes :id, :body
node(:from) { |comment|
  {
   name: comment.from.name,
   type: comment.from.role
  }
}
