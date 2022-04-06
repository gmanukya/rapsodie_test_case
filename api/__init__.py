from flask import Flask
from flask_graphql import GraphQLView
from api.graphql.schema import schema
from flask_cors import CORS


def create_app():
    app = Flask(__name__)
    CORS(app)
    
    app.add_url_rule(
        '/graphql',
        view_func=GraphQLView.as_view(
            'graphql',
            schema=schema,
            graphiql=True
        )
    )

    return app
