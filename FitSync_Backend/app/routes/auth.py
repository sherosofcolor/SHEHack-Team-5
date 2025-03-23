from flask import Blueprint, request, jsonify
from app.utils.security import hash_password, check_password
from app import db
from flask_jwt_extended import create_access_token

auth_bp = Blueprint("auth", __name__)

users = db["users"]

@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.json
    if users.find_one({"email": data["email"]}):
        return jsonify({"message": "User already exists"}), 400

    hashed_password = hash_password(data["password"])
    users.insert_one({"email": data["email"], "password": hashed_password, "preferences": data["preferences"]})
    
    return jsonify({"message": "User registered successfully"}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    user = users.find_one({"email": data["email"]})

    if user and check_password(user["password"], data["password"]):
        return jsonify({"message": "Login successful"}), 200
    
    return jsonify({"message": "Invalid credentials"}), 401
