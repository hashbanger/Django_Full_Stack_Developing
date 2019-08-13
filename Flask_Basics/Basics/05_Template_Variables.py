from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    my_name = 'prashant'
    letters = list(my_name)
    lastnames = {'prashant': 'brahmbhatt', 'shivam': 'mittal'}
    return render_template('jinja_variables.html', my_name = my_name, letters = letters, lastnames = lastnames)

if __name__ == '__main__':
    app.run()
    