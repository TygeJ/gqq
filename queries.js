ARCHIVE

mutation updateScript($token:ID!, $reason: String!) {
  archiveWidget(token: $token, reason: $reason){
    status
  }
}

VARS

{
  "token": "7337b9a9-1880-4240-8cad-3abc17d0239e",
  "reason": "accidentally created - test"
}

ENDPOINT

https://mind-flayer.podium.com/graphql_private
