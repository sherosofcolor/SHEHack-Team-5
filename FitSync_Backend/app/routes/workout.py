from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from app import db
from app.services.rule_engine import fetch_day_plan, fetch_montly_plan

workout_bp = Blueprint("workout", __name__)
users = db["users"]

@workout_bp.route('/fetch_montly_workout_plan', methods=['GET'])
def get_workout_plan():
    user_email = request.args.get("email")
    user = users.find_one({"email": user_email})
    if not user:
        return jsonify({"message": "User not found"}), 404
    plan = fetch_montly_plan(user.get("user_id"))
    return jsonify({"workout_plan": plan}), 200


@workout_bp.route('/fetch_day_workout_plan', methods=['GET'])
def get_workout_plan():
    user_email = request.args.get("email")
    day = request.args.get("day")
    user = users.find_one({"email": user_email})
    if not user:
        return jsonify({"message": "User not found"}), 404
    plan = fetch_day_plan(user.get("user_id", day))
    return jsonify({"workout_plan": plan}), 200



