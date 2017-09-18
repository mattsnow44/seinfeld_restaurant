20.times do
  MenuItem.create(
  name: Faker::Food.dish,
  description: Faker::Food.spice,
  price: (10..30).to_a.sample
  )
end

  puts 'Menu Items Seeded!'
