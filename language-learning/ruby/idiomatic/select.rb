[1, 2, 3, 4, 5].map { |element| element if element.even? }.compact

[1, 2, 3, 4, 5].select { |element| element.even? }
