from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return '<h1> Hello from Flask </h1>'

@app.route('/information')
def info():
    return '<h2> Flask is a web framework for python</h2>'

if __name__ == '__main__':
    app.run()
    