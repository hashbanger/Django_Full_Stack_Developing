from BasicModelApp import db, Puppy

db.create_all()

sam = Puppy('Sammy', 3)
frank = Puppy('Frankie', 4)

# The following lines will give out None as the id will 
# not be generated before adding it to the database.
print(sam.id)
print(frank.id)

db.session.add_all([sam, frank])

db.session.commit()

print(sam.id)
print(frank.id)
