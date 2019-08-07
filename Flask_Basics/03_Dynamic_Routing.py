from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return '<h1> This is the DC Comics Page'

@app.route('/information')
def info():
    return '<h2>Top three DC heroes are Superman Batman and Wonder Woman</h2>'

@app.route('/dc/<name>')
def names(name):
    return '<h2> This is the page for {}</h2>'.format(name.upper())

if __name__ == '__main__':
    app.run()
    