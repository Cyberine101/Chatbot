from config import db

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String(10000), unique=False, nullable=False)

    def to_json(self):
       return{
        "id": self.id,
        "message": self.message,
       }