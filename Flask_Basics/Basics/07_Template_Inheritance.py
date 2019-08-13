from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('superhome.html')

@app.route('/superheroes/<name>')
def superh(name):
    return render_template('superheroes.html', name = name)

if __name__ == "__main__":
    app.run() 