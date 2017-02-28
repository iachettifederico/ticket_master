prawn_document(page_layout: :landscape) do |pdf|
  pdf.text "The closed tickets for the last month are:"
  pdf.move_down 20

  headers = ["Title", "Opened on", "Closed on", "Customer"]
  rows    = @tickets.collect { |t|
    [
     t.title,
     t.created_at.to_date,
     t.closed_on,
     "#{t.customer.name} (#{t.customer.email})"
    ]
  }
  pdf.table [ headers ].concat( rows )
end
