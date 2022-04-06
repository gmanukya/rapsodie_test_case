import { gql } from '@apollo/client';

export const GET_ALL_ARTISTS = gql`
    query allArtists {
        allArtists {
            id
            name
            image
        }
    }
`;

export const GET_ARTIST = gql`
    query artist($id: Int!) {
        artist(id: $id) {
            id
            name
            image
            spotifyUrl
            instagramId
            twitterId
        }
    }
`;

export const GET_ARTIST_STATS = gql`
    query artistStats($id: Int!, $timeframe: Int!) {
        artistStats(id: $id, timeframe: $timeframe) {
            benefs
            benefsDelta
            benefsProg
            revenues
            salaries
        }
    }
`;