# while looping
num = 1

while num <= 10
  puts num
  num += 1
end

# until looping
num = 1

until num > 10
  puts num
  num += 1
end

# for looping
for num in 1...10
  puts num
end

# each iterator
[1, 2, 3, 4, 5].each do |num|
  puts num
end

# for vs each
for num in 1...5
  puts num
end

puts num # => 5

[1, 2, 3, 4, 5].each do |num|
  puts num
end

puts num # => undefined local variable or method `n' for main:Object (NameError)
