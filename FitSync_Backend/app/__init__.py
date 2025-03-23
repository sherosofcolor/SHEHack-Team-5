from flask import Flask
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)
bcrypt = Bcrypt(app)
mongo = MongoClient("mongodb+srv://nishithapatange1901:Spkzlg8fFH2qfWi0@shehackcluster.zxlui.mongodb.net/?retryWrites=true&w=majority&appName=SHEHackCluster")
db = mongo["fitness_app"]

from app.routes.auth import auth_bp
from app.routes.user import user_bp
from app.routes.workout import workout_bp
from app.routes.report import report_bp

app.register_blueprint(auth_bp, url_prefix="/api")
app.register_blueprint(user_bp, url_prefix="/api")
app.register_blueprint(workout_bp, url_prefix="/api")
app.register_blueprint(report_bp, url_prefix="/api")
