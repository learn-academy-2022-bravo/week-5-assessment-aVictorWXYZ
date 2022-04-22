# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

#  Ill use def followed by an End to create a method called all_have
# all_have will take in two variables  array and a letter
#running the array with map using include? to find if each individual value in an index has the letter within it
#shovle it into an array with the words that did have that letter

def all_have(array, letter)
    answer = []
    array.filter do |value|
        if value.include? letter
            answer << "#{value}"
        end
    end
    p answer
end

all_have(beverages_array, letter_o)
all_have(beverages_array, letter_t)


# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

# Use def to create and end to complete a method called add
# use each to run up a counter that starts at 0
# p the result

def add(plant) 
    total = 0
    plant.each do |value|
        temptotal = value + total
        total = temptotal
    end
    p total
end

add(nums_array1)
add(nums_array2)




# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# Create a class called Bike followed by an end and write in between it
# unsure what attr_accessor does but ill put that in aswell 
# initialize model, wheels, and current_speed 
# I'll set the default number of wheels to 2 and current speed 0
# create a method that returns all the data of bike

class Bike
    attr_accessor :model, :wheels, :current_speed, :pedal_faster
    def initialize(model, wheels= 2  , current_speed= 0)
        @model = model
        @wheels = wheels
        @current_speed = current_speed
    end
    
    def bike_info
        p "The #{@model} has #{@wheels} wheels and is going #{@current_speed} mph."
    end

    def pedal_faster(acceleration)
        totalacceleration = acceleration + @current_speed
       @current_speed =  totalacceleration 
    end

    def brake(acceleration)
        if @current_speed - acceleration <0 
       @current_speed =  0 
        else
        totalacceleration = @current_speed - acceleration
       @current_speed =  totalacceleration 
        end
    end

end



Bike.new('Trek bike').bike_info

my_bike = Bike.new('Trek bike')

my_bike.pedal_faster(10)
my_bike.bike_info
my_bike.pedal_faster(18)
my_bike.bike_info
my_bike.brake(5)
my_bike.bike_info
my_bike.brake(25)
my_bike.bike_info



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0


