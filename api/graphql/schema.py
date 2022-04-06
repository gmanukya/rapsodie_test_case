import graphene

from api.graphql.query import Query

schema = graphene.Schema(query=Query)