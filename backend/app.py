from flask import Flask
from pymongo import MongoClient

app = Flask(__name__)

# Connect to MongoDB Atlas
client = MongoClient("mongodb+srv://nirmalbhavya163:CHXpzcn9hoySZAkv@first.fidufwf.mongodb.net/?retryWrites=true&w=majority&appName=first")
db = client['autofolio']

@app.route('/')
def home():
    return "MongoDB connected!"

@app.route('/add-user')
def add_user():
    db.users.insert_one({
        "name": "Test User",
        "email": "test@example.com"
    })
    return "User added!"

@app.route('/add-portfolio')
def add_portfolio():
    db.portfolios.insert_one({
        "user_id": "some_user_id",
        "theme": "Tech",
        "content": {"projects": [], "skills": []}
    })
    return "Portfolio added!"

if __name__ == '__main__':
    app.run(debug=True)
        