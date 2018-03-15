200.times do
  Person.create(
    sname: Faker::Twitter.screen_name,
    name: Faker::Name.name,
    bio: Faker::Seinfeld.quote,
    avatar: Faker::Avatar.image,
    location: Faker::LordOfTheRings.location,
    school: Faker::University.name,
  )
end