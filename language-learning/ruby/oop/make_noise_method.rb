class Vehicle
  def initialize(number_of_wheels, type_of_tank, seating_capacity, maximum_velocity)
    @number_of_wheels = number_of_wheels
    @type_of_tank = type_of_tank
    @seating_capacity = seating_capacity
    @maximum_velocity = maximum_velocity
  end

  def make_noise
    "VRRRRUUUUM"
  end
end

v = Vehicle.new(4, 'gasoline', 5, 180)
v.make_noise # => "VRRRRUUUUM"
