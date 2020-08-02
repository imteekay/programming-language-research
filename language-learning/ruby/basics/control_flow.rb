if true
  puts "Hello Ruby If"
end

if 2 > 1
  puts "2 is greater than 1"
end

if 1 > 2
  puts "1 is greater than 2"
else
  puts "1 is not greater than 2"
end

if 1 > 2
  puts "1 is greater than 2"
elsif 2 > 1
  puts "1 is not greater than 2"
else
  puts "1 is equal to 2"
end

def hey_ho?
  true
end

puts "let’s go" if hey_ho?
