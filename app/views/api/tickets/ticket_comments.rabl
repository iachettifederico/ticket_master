collection @comments
cache ["tickets-comments-", @comments]
attributes :id, :body
node(:from) { |comment|
  {
   name:  comment.account.name,
   email: comment.account.email
  }
}
