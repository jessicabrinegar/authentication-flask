"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required

api = Blueprint('api', __name__)

@api.route("/login", methods=["POST"])
def create_token():
    body = request.get_json(force=True)
    user = db.session.query(User).filter(User.username == body['username']).first()
    if user is None:
        return jsonify('Error: User does not exist.'), 401
    elif user.password == body['password'] and user.username == body['username']:
        access_token = create_access_token(identity={'id': user.id})
        return jsonify(access_token = access_token, user=user.serialize()), 200
    else:
        return jsonify(f'Error: Incorrect password was given for user: {user.username}.'), 401


@api.route('/register', methods=['POST'])
def create_user():
    rb = request.get_json()
    new_user = User(
        email=rb["email"],
        password=rb["password"],
        is_active=True
        )
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.serialize()),200


@api.route('/private',methods=["GET"])
@jwt_required()
def private():
    user_token=get_jwt_identity()
    user=User.query.get(user_token)
    return jsonify(user.serialize()),200


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200