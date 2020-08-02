an_array = [1, 2, 3, 4, 5]

new_array = []

an_array.each do |element|
  new_array << element * element
end

# map way

an_array.map { |element| element * element }


user_ids = []
users.each { |user| user_ids << user.id }

user_ids = users.map { |user| user.id }
user_ids = users.map(&:id)
