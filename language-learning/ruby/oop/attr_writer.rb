class Vehicle
  attr_writer :number_of_wheels

  def initialize(number_of_wheels, type_of_tank, seating_capacity, maximum_velocity)
    @number_of_wheels = number_of_wheels
    @type_of_tank = type_of_tank
    @seating_capacity = seating_capacity
    @maximum_velocity = maximum_velocity
  end
end

# number_of_wheels equals 4
tesla_model_s = Vehicle.new(4, 'electric', 5, 250)
tesla_model_s # => <Vehicle:0x0055644f55b820 @number_of_wheels=4, @type_of_tank="electric", @seating_capacity=5, @maximum_velocity=250>

# number_of_wheels equals 3
tesla_model_s.number_of_wheels = 3
tesla_model_s # => <Vehicle:0x0055644f55b820 @number_of_wheels=3, @type_of_tank="electric", @seating_capacity=5, @maximum_velocity=250>
