from graphene import ObjectType, String, Int, NonNull


class Artist(ObjectType):
    id = NonNull(Int)
    spotify_id = String()
    spotify_url = String()
    instagram_id = String()
    twitter_id = String()
    name = String()
    image = String()
    benefs_1 = Int()
    benefs_delta_1 = Int()
    benefs_prog_1 = Int()
    revenues_1 = Int()
    salaries_1 = Int()
    benefs_7 = Int()
    benefs_delta_7 = Int()
    benefs_prog_7 = Int()
    revenues_7 = Int()
    salaries_7 = Int()
    benefs_30 = Int()
    benefs_delta_30 = Int()
    benefs_prog_30 = Int()
    revenues_30 = Int()
    salaries_30 = Int()

    # init function is used to make the artist object creation easier
    # by passing the json object directly when creating an Artist
    def __init__(self, data):
        self.id = data["id"]
        self.spotify_id = data["spotify_id"]
        self.spotify_url = data["spotify_url"]
        self.instagram_id = data["instagram_id"]
        self.twitter_id = data["twitter_id"]
        self.name = data["name"]
        self.image = data["image"]
        self.benefs_1 = data["benefs_1"]
        self.benefs_delta_1 = data["benefs_delta_1"]
        self.benefs_prog_1 = data["benefs_prog_1"]
        self.revenues_1 = data["revenues_1"]
        self.salaries_1 = data["salaries_1"]
        self.benefs_7 = data["benefs_7"]
        self.benefs_delta_7 = data["benefs_delta_7"]
        self.benefs_prog_7 = data["benefs_prog_7"]
        self.revenues_7 = data["revenues_7"]
        self.salaries_7 = data["salaries_7"]
        self.benefs_30 = data["benefs_30"]
        self.benefs_delta_30 = data["benefs_delta_30"]
        self.benefs_prog_30 = data["benefs_prog_30"]
        self.revenues_30 = data["revenues_30"]
        self.salaries_30 = data["salaries_30"]
