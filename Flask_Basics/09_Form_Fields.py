from flask import Flask, render_template, session, redirect, url_for
from flask_wtf import FlaskForm
from wtforms import (StringField, TextAreaField, RadioField, BooleanField,
                    DateTimeField, SelectField, TextField, SubmitField)

from wtforms.validators import DataRequired

app = Flask(__name__)

app.config['SECRET_KEY'] = 'baguvix'

class InfoForm(FlaskForm):
    name = StringField('Enter your full name: ', validators= [DataRequired()])
    age = BooleanField('Are you 18+?: ')
    gender = RadioField('Please confirm your gender: ', choices=[('male', 'Male'), ('female','Female')])
    mem =  SelectField(u'What membership would you like?: ',
                        choices= [('annual', 'Full Year'),
                                ('monthly','Monthly'),
                                ('weekly', 'Weekly')])
    feedback = TextAreaField()
    submit = SubmitField('Submit')

@app.route('/', methods = ['GET', 'POST'])
def index():

    form = InfoForm()
  
    if form.validate_on_submit():
        session['name'] = form.name.data      
        session['age'] = form.age.data      
        session['gender'] = form.gender.data      
        session['mem'] = form.mem.data      
        session['feedback'] = form.feedback.data

        return redirect(url_for('thankyou'))

    return render_template('form_field_home.html', form = form)

@app.route('/thankyou')
def thankyou():

    return render_template('thankyou.html')


if __name__ == "__main__":
    app.run()
