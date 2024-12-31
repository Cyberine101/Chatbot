from flask import request, jsonify
from config import app, db
from models import Message

@app.route('/store', methods=["POST"])
def store_messages():
    message = request.json.get("message")

    if not message:
        return {
            jsonify({"message": "Bad Request"}, 400)
        }
    
    new_message = Message(message=message)
    try:
        db.session.add(new_message)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "Message Stored!"}), 201

@app.route('/retrieve', methods=["GET"])
def retrieve_messages():
    messages = Message.query.all()
    json_messages = list(map(lambda x: x.to_json(), messages))
    return jsonify({"store": json_messages})

if(__name__) == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)