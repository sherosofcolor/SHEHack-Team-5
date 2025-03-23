from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from app import db

user_bp = Blueprint("user", __name__)
users = db["users"]

@user_bp.route('/preferences', methods=['POST'])
@jwt_required()
def update_preferences():
    data = request.json
    user_email = data.get("email")

    users.update_one({"email": user_email}, {"$set": {"preferences": data}})
    return jsonify({"message": "Preferences updated"}), 200
