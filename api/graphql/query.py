import graphene
import pandas as pd
import json

from graphene import List, Argument, Field, Int
from api.models.Artist import Artist
from api.models.ArtistStats import ArtistStats

# The csv file is read and used as a db to demonstrate with graphql.
# The id field has been renamed "id" in the csv file for the sake of the test case.
data = pd.read_csv('data.csv').to_json(orient="records")
db = json.loads(data)


class Query(graphene.ObjectType):
    allArtists = List(Artist)
    artist = Field(Artist, id=Argument(Int))
    artistStats = Field(ArtistStats, id=Argument(Int), timeframe=Argument(Int))

    def resolve_allArtists(self, info):
        def mapToArtist(item):
            return Artist(item)

        return map(mapToArtist, db)

    def resolve_artist(self, info, id):
        return Artist(next((x for x in db if x["id"] == id), None))

    # We resolve the artist stats for a given timeframe.
    def resolve_artistStats(self, info, id, timeframe):
        artist = next((x for x in db if x["id"] == id), None)

        if timeframe == 1:
            return ArtistStats(
                benefs=artist["benefs_1"],
                benefs_delta=artist["benefs_delta_1"],
                benefs_prog=artist["benefs_prog_1"],
                revenues=artist["revenues_1"],
                salaries=artist["salaries_1"]
            )
        elif timeframe == 7:
            return ArtistStats(
                benefs=artist["benefs_7"],
                benefs_delta=artist["benefs_delta_7"],
                benefs_prog=artist["benefs_prog_7"],
                revenues=artist["revenues_7"],
                salaries=artist["salaries_7"]
            )
        elif timeframe == 30:
            return ArtistStats(
                benefs=artist["benefs_30"],
                benefs_delta=artist["benefs_delta_30"],
                benefs_prog=artist["benefs_prog_30"],
                revenues=artist["revenues_30"],
                salaries=artist["salaries_30"]
            )
