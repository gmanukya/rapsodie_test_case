from graphene import ObjectType, String, Int, NonNull

# This model is used to resolve the artist stats regardless of the selected timeframe.
# Instead of having different queries for the different timeframes, we pass
# the timeframe to the query and get the corresponding stats.


class ArtistStats(ObjectType):
    benefs = Int()
    benefs_delta = Int()
    benefs_prog = Int()
    revenues = Int()
    salaries = Int()
