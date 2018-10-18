ENDPOINT (post)

`https://platform.podium.com/graphql`

HEADER

`de98bd02f28a88b56fbf802ebf3f9815`

QUERY

query scriptsForOrg($id:ID!) {
  webchatWidgets(orgId: $id) {
    token
    script
    settings {
      bubbleColor
      iconType
      avatarUrl
      promptMessage
      name
      defaultLocation {
        id
      }
    }
  }
}

vars

{
  "id": 14160
}

//////////

PUBLIC - find defaultLocationId

{
  widget(token: "7fd92b69f1c05c27784271da773905ea") {
    defaultLocation {
      name
      id
      address
    }
  }
}


//////////


mutation updateScript($token:ID!, $settings: Settings!) {
  updateSettings(token: $token, settings: $settings) {
    status
  }
}

vars

{
  "token": "84cbfe7492697262213eca614d30cd21",
  "settings": {"defaultLocationId":"7823"}
}


//////////


CREATE

mutation createScript($id:ID!, $settings: Settings!) {
  createWidget(orgId: $id, settings: $settings) {
    script
  }
}

vars

{
  "id": 6299,
  "settings": {"name": "Tyge Test"}
}

(if creating through above query, must use `whiteList` query first, or circumvent by creating in admin)

WHITELIST

mutation whitelist($id:ID!) {
  whitelist(orgId: $id) {
    status
  }

}

vars

{
  "id": 6584
}

//////////


SENDWEBCHATEMAIL

mutation createscript($csm: String!, $org: ID!) {
  organization(id: $org) {
    sendWebchatScriptEmail(csmName: $csm, toEmails: [],
      cc: ["dominique wilson", "Tyge Johnson"],
      scripts: ["<script defer src=\"https://connect.podium.com/widget.js#API_TOKEN=22726bc5-7032-4f6a-8e6b-f2eb2753847c\" id=\"podium-widget\" data-api-token=\"22726bc5-7032-4f6a-8e6b-f2eb2753847c\"></script>"])
        {
      status
    }
  }
}

vars

{
  "org": 10025,
  "csm": "dominique wilson"
}

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
