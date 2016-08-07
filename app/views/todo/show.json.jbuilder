json.todo do |json|
  json.extract! @todo, :id, :text, :is_completed
end
