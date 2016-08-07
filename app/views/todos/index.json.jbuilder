json.todos do |json|
  json.array! @todos do |todo|
    json.extract! todo, :id, :text, :is_completed
  end
end
