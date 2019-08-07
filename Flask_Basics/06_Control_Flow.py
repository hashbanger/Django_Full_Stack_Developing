from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def indexing():
    superh = ['Superman', 'Batman', 'WonderWoman', 'Flash', 'Green Lantern']
    return render_template('sups.html', superh = superh)

if __name__ == '__main__':
    app.run()