from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from app import db

report_bp = Blueprint("report", __name__)
users = db["users"]

@report_bp.route('/monthly-report', methods=['GET'])
@jwt_required()
def get_monthly_report():
    user_email = request.args.get("email")
    user = users.find_one({"email": user_email})

    if not user:
        return jsonify({"message": "User not found"}), 404

    report = {
        "days_active": user.get("days_active", 0),
        "workouts_completed": user.get("workouts_completed", 0)
    }
    return jsonify(report), 200
