from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "This is the chatbot backend!"

if(__name__) == '__main__':
    app.run(debug=True)