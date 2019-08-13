from flask import Flask, render_template
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField

app = Flask(__name__)

app.config['SECRET_KEY'] = 'baguvix'

class InfoForm(FlaskForm):

    power = StringField('Enter your Superpower')
    submit = SubmitField('Submit')

@app.route('/', methods = ['GET', 'POST'])
def index():
    
    power = False
    form = InfoForm()

    if form.validate_on_submit():
        power = form.power.data
        form.power.data = ''

    return render_template('form_home.html', form = form, power = power)

if __name__ == "__main__":
    app.run()

