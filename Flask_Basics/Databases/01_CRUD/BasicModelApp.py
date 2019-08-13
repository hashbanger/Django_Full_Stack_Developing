import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# Setting up our sqlite database######################

# To get our base directory
basedir = os.path.abspath(os.path.dirname(__file__))


app = Flask(__name__)

# Connecting our app to database
app.config['SQLALCHEMY_DATEBASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'data.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 

db = SQLAlchemy(app)

class Puppy(db.Model):

    __tablename__ = 'puppies'

    id = db.Column(db.Integer, primary_key = True)

    name = db.Column(db.Text)
    
    age = db.Column(db.Integer)

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __repr__(self):

        return f"Puppy {self.name} is {self.age} years old"



