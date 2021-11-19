# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "loading seeds..."

User.create([{username: 'Devin', password: '123'}, {username: 'Hathor', password: '123'}])
Artist.create(name: 'Daft Punk', genre: "Dance 😏")
Artist.create(name: 'George Clanton', genre: 'hell yea')
Artist.create(name: 'Demilich', genre: 'Technical Death Metal')
Artist.create(name: 'Idles', genre: 'Post-punk?')
Artist.create(name: 'The Jesus and Mary Chain', genre: 'Proto-shoegaze?')
Artist.create(name: 'Omar S', genre: 'Techno/House MAVERICK')
Artist.create(name: 'Ian Sweet', genre: 'Indie')
Record.create(artist_id: 4, title: 'Brutalism', year: "2017", image: "https://slatethedisco.com/wp-content/uploads/2017/02/SpeAm8YPgelrGHPsN3vtFfX7AGvLTteVWbFC5wK4Xp8.png" )
Record.create(artist_id: 5, title: 'Psychocandy', year: "1985", image: "https://i.pinimg.com/originals/f2/d9/87/f2d987eb613d040fd6f0badbcd238f1b.jpg" )
Record.create(artist_id: 1, title: 'Discovery', year: "2001", image: "https://m.media-amazon.com/images/I/71bsHTr6idL._SL1500_.jpg" )
Record.create(artist_id: 1, title: 'Random Access Memories', year: "2013", image: "https://m.media-amazon.com/images/I/61Uxg-SWExL._SL1500_.jpg")
Record.create(artist_id: 3, title: 'Nespithe', year: '1993', image: "https://f4.bcbits.com/img/a0653128778_10.jpg")
Record.create(artist_id: 2, title: 'Slide', year: '2018', image: "https://f4.bcbits.com/img/a3009101780_10.jpg")
Pressing.create(record_id: 1, weight: 180, color: "blue", label: "Virgin Records")
Pressing.create(record_id: 4, weight: 200, color: "tie-dye", label: "Virgin Records")
Pressing.create(record_id: 2, weight: 180, color: "black", label: "100% Electronica")
Pressing.create(record_id: 5, weight: 180, color: "green swirl", label: "Death Records")
Pressing.create(record_id: 6, weight: 180, color: "spaghetti red", label: "Blanco y Negro")
Pressing.create(record_id: 3, weight: 180, color: "Red/Black Marbled", label: "Necropolis Records")
UserPressing.create([{user_id: 1, pressing_id: 1}, {user_id: 2, pressing_id: 1}])
UserPressing.create(user_id: 1, pressing_id: 2)
UserPressing.create(user_id: 2, pressing_id: 3)
UserPressing.create(user_id: 1, pressing_id: 4)
puts 'loaded seeds!'