from flask import Flask, render_template, flash, session, redirect, url_for
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField

app = Flask(__name__)

app.config['SECRET_KEY'] = 'baguvix'

class SimpleForm(FlaskForm):

    hero = StringField('What superhero are you?')
    submit = SubmitField('click to get a flash')

@app.route('/', methods = ['GET', 'POST'])
def index():
    form = SimpleForm()

    if form.validate_on_submit():
        session['hero'] = form.hero.data
        flash(f"You are {session['hero']}!")
        flash("Second alert is just to check if the FOR loop is working!")

        return redirect(url_for('index'))
    return render_template('message_home.html', form = form)

if __name__ == "__main__":
    app.run()
    