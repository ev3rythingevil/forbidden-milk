# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "loading seeds..."

users = User.create([{username: 'Devin', password: '123'}, {username: 'Hathor', password: '123'}])
artists = Artist.create(name: 'Daft Punk', genre: "Dance 😏")
Artist.create(name: 'George Clanton', genre: 'hell yea')
records = Record.create(artist_id: 1, title: 'Discovery', year: "2001")
Record.create(artist_id: 2, title: 'Slide', year: '2018')
pressings = Pressing.create(record_id: 1, weight: 180, color: "blue", label: "Virgin Records")
user_pressings = UserPressing.create([{user_id: 1, pressing_id: 1}, {user_id: 2, pressing_id: 1}])
UserPressing.create(user_id: 1, pressing_id: 1)

puts 'loaded seeds!'